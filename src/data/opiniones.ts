// Opiniones reales de huéspedes (Airbnb y Google), tal como están en la web actual.
// Para añadir una: una línea más. Se reflejan también en los datos estructurados (reseñas).
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
