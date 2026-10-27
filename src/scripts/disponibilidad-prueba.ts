// Datos de prueba del calendario para `npm run dev` (en local no hay funciones de Netlify).
// Solo se importa en desarrollo: no llega a la web publicada.
type Rango = [string, string];

const sumar = (f: string, n: number) => {
	const d = new Date(`${f}T00:00:00Z`);
	d.setUTCDate(d.getUTCDate() + n);
	return d.toISOString().slice(0, 10);
};

/** Reservas inventadas a partir de hoy: fines de semana, una semana larga y salidas que coinciden con entradas. */
export const datosDePrueba = (hoy: string): Rango[] =>
	(
		[
			[3, 5],
			[9, 12],
			[12, 14],
			[24, 26],
			[38, 45],
			[52, 54],
			[66, 68],
			[80, 87],
			[101, 103],
		] as const
	).map(([a, b]): Rango => [sumar(hoy, a), sumar(hoy, b)]);
