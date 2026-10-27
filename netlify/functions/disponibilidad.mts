// Disponibilidad de la casa para el calendario de la web (/api/disponibilidad).
// Lee los calendarios iCal de exportación de Airbnb, Booking y Vrbo (variables de entorno
// ICAL_AIRBNB, ICAL_BOOKING, ICAL_VRBO: nunca en el código), los junta y devuelve SOLO los rangos
// de noches ocupadas: sin nombres, códigos de reserva ni plataforma de origen.
// La red de Netlify guarda la respuesta 1 hora, así que las plataformas se consultan como mucho una vez por hora.

const FUENTES = ['ICAL_AIRBNB', 'ICAL_BOOKING', 'ICAL_VRBO'];
const MESES_ADELANTE = 13;

/** Rango de noches ocupadas: [entrada, salida), fechas AAAA-MM-DD. La salida queda libre para otra entrada. */
export type Rango = [string, string];

const aFecha = (d: Date) => d.toISOString().slice(0, 10);
const sumarDias = (fecha: string, n: number) => {
	const d = new Date(`${fecha}T00:00:00Z`);
	d.setUTCDate(d.getUTCDate() + n);
	return aFecha(d);
};

/** Saca los rangos ocupados de un archivo iCal. Las tres plataformas exportan reservas y bloqueos como
 *  eventos de día completo cuyo DTEND es el día de salida (no incluido), que es justo lo que queremos. */
export function analizarIcal(texto: string): Rango[] {
	// Las líneas largas continúan en la siguiente empezando por espacio o tabulador
	const lineas = texto.replace(/\r?\n[ \t]/g, '').split(/\r?\n/);
	const rangos: Rango[] = [];
	let evento: Record<string, string> | null = null;
	for (const linea of lineas) {
		if (linea === 'BEGIN:VEVENT') evento = {};
		else if (linea === 'END:VEVENT' && evento) {
			const inicio = evento.DTSTART?.match(/(\d{4})(\d{2})(\d{2})/);
			if (inicio && evento.STATUS !== 'CANCELLED') {
				const entrada = `${inicio[1]}-${inicio[2]}-${inicio[3]}`;
				const fin = evento.DTEND?.match(/(\d{4})(\d{2})(\d{2})/);
				let salida = fin ? `${fin[1]}-${fin[2]}-${fin[3]}` : sumarDias(entrada, 1);
				if (salida <= entrada) salida = sumarDias(entrada, 1);
				rangos.push([entrada, salida]);
			}
			evento = null;
		} else if (evento) {
			// «DTSTART;VALUE=DATE:20270612» → clave DTSTART, valor 20270612
			const i = linea.indexOf(':');
			if (i > 0) evento[linea.slice(0, i).split(';')[0].toUpperCase()] = linea.slice(i + 1).trim();
		}
	}
	return rangos;
}

/** Junta los rangos de todas las plataformas (pueden venir repetidos si se sincronizan entre ellas),
 *  descarta lo pasado y lo muy lejano, y fusiona los que se solapan o se tocan. */
export function combinar(rangos: Rango[], hoy: string): Rango[] {
	const limite = sumarDias(hoy, MESES_ADELANTE * 31);
	const utiles = rangos
		.filter(([e, s]) => s > hoy && e < limite)
		.map(([e, s]): Rango => [e < hoy ? hoy : e, s])
		.sort((a, b) => (a[0] < b[0] ? -1 : 1));
	const fusion: Rango[] = [];
	for (const r of utiles) {
		const ultimo = fusion[fusion.length - 1];
		if (ultimo && r[0] <= ultimo[1]) {
			if (r[1] > ultimo[1]) ultimo[1] = r[1];
		} else fusion.push([r[0], r[1]]);
	}
	return fusion;
}

async function leer(url: string): Promise<Rango[]> {
	const r = await fetch(url, { signal: AbortSignal.timeout(7000), headers: { 'User-Agent': 'elsporxos.es calendario' } });
	if (!r.ok) throw new Error(String(r.status));
	const texto = await r.text();
	if (!texto.includes('BEGIN:VCALENDAR')) throw new Error('no es iCal');
	return analizarIcal(texto);
}

const respuesta = (cuerpo: object, estado: number, segundosCdn: number) =>
	new Response(JSON.stringify(cuerpo), {
		status: estado,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300',
			// Caché en la red de Netlify; si la respuesta es buena, mientras se renueva se sirve la copia anterior
			'Netlify-CDN-Cache-Control': `public, durable, s-maxage=${segundosCdn}${estado === 200 ? ', stale-while-revalidate=86400' : ''}`,
		},
	});

export default async () => {
	const urls = FUENTES.map((n) => process.env[n]).filter((u): u is string => !!u && u.startsWith('https://'));
	const resultados = await Promise.allSettled(urls.map(leer));
	const leidos = resultados.filter((r): r is PromiseFulfilledResult<Rango[]> => r.status === 'fulfilled');
	resultados.forEach((r, i) => r.status === 'rejected' && console.error(`Calendario ${i + 1} sin leer: ${r.reason}`));

	// Sin ningún calendario leído no se devuelve nada: la web pide consultar por WhatsApp,
	// nunca un calendario vacío que parezca todo libre. Se reintenta a los 5 minutos.
	if (!leidos.length) return respuesta({ error: 'sin-datos' }, 503, 300);

	const hoy = aFecha(new Date());
	return respuesta(
		{ ocupado: combinar(leidos.flatMap((r) => r.value), hoy), actualizado: new Date().toISOString(), calendarios: leidos.length },
		200,
		3600,
	);
};

export const config = { path: '/api/disponibilidad' };
