// Opiniones reales de huéspedes (Airbnb y Google), tal como están en la web actual.
// Para añadir una: una línea más. Se reflejan también en los datos estructurados (reseñas).
import type { Idioma } from '../i18n';

export interface Opinion {
	nombre: string;
	fuente: 'Airbnb' | 'Google';
	fecha?: string;
	texto: string;
}

export const destacada: Opinion = {
	nombre: 'Sergi',
	fuente: 'Airbnb',
	fecha: 'junio 2026',
	texto:
		'La casa estuvo genial, todo en perfectas condiciones para las 13 personas que fuimos. Incluso mejor que en fotos: no se ven el futbolín ni la mesa de ping-pong, con los que pasamos muy buenos ratos. Pol estuvo muy atento y nos facilitó las horas de entrada y salida.',
};

export const opiniones: Opinion[] = [
	{
		nombre: 'Dary',
		fuente: 'Airbnb',
		fecha: 'mayo 2026',
		texto:
			'Un fin de semana muy divertido en un ambiente familiar. La protección de la piscina para los niños nos gustó mucho: podían corretear cerca sin riesgo. La casa es muy familiar y a la vez íntima. ¡Nos encantó el lugar!',
	},
	{
		nombre: 'Marty',
		fuente: 'Airbnb',
		fecha: 'agosto 2025',
		texto:
			'Pasamos dos semanas de vacaciones en familia estupendas. Éramos 16 y la casa se adaptó perfectamente a toda nuestra tribu. Pol es encantador, muy acogedor y siempre atento cuando lo necesitas.',
	},
	{
		nombre: 'Marc',
		fuente: 'Airbnb',
		fecha: 'julio 2023',
		texto:
			'Espacios muy grandes, camas cómodas, piscina limpia... ¡Y el futbolín ha sido un gran entretenimiento! Pol y su familia, muy amables, nos han ayudado en todo momento. Casa perfecta para ir con buena compañía.',
	},
	{
		nombre: 'Quico',
		fuente: 'Google',
		texto: 'Es un encanto, estuvimos muy cómodos y la zona es muy tranquila. Lugar perfecto para que los críos se lo pasen bien. Recomendado al 100%.',
	},
	{
		nombre: 'Óscar',
		fuente: 'Google',
		texto: 'Una casa muy bien montada, prácticamente tiene de todo. Nos lo pasamos espectacular. Repetiremos seguro.',
	},
];

// Traducción al catalán (mismo orden: la destacada y luego la lista)
const meses: Record<string, string> = { 'junio 2026': 'juny 2026', 'mayo 2026': 'maig 2026', 'agosto 2025': 'agost 2025', 'julio 2023': 'juliol 2023' };
const textosCa: Record<string, string> = {
	Sergi: "La casa va estar genial, tot en perfectes condicions per a les 13 persones que vam anar-hi. Fins i tot millor que a les fotos: no s'hi veuen el futbolí ni la taula de ping-pong, amb què vam passar molt bones estones. En Pol va estar molt atent i ens va facilitar les hores d'entrada i sortida.",
	Dary: "Un cap de setmana molt divertit en un ambient familiar. La protecció de la piscina per als nens ens va agradar molt: podien córrer a prop sense risc. La casa és molt familiar i alhora íntima. Ens va encantar!",
	Marty: "Vam passar dues setmanes de vacances en família fantàstiques. Érem 16 i la casa es va adaptar perfectament a tota la colla. En Pol és encantador, molt acollidor i sempre atent quan el necessites.",
	Marc: "Espais molt grans, llits còmodes, piscina neta... I el futbolí ha estat un gran entreteniment! En Pol i la seva família, molt amables, ens han ajudat en tot moment. Casa perfecta per anar-hi amb bona companyia.",
	Quico: "És un encant, vam estar molt còmodes i la zona és molt tranquil·la. Lloc perfecte perquè la mainada s'ho passi bé. Recomanat al 100%.",
	'Óscar': "Una casa molt ben muntada, pràcticament té de tot. Ens ho vam passar d'allò més bé. Hi tornarem segur.",
};
const traducir = (o: Opinion): Opinion => ({ ...o, texto: textosCa[o.nombre] ?? o.texto, fecha: o.fecha && (meses[o.fecha] ?? o.fecha) });
export const opinionesEn = (lang: Idioma = 'es') =>
	lang === 'ca' ? { destacada: traducir(destacada), opiniones: opiniones.map(traducir) } : { destacada, opiniones };
