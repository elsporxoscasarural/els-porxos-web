// Preguntas frecuentes. Se muestran en la página y desde aquí se generan también los datos
// para Google (FAQPage): así lo visible y lo que lee Google nunca se desincronizan.
// Respuestas cortas y completas por sí solas: es lo que citan los buscadores de IA.
export interface Pregunta {
	pregunta: string;
	respuesta: string;
}

export const preguntas: Pregunta[] = [
	{
		pregunta: '¿Cuántas personas caben en la casa rural Els Porxos?',
		respuesta:
			'La casa rural tiene capacidad para hasta 19 personas en 6 habitaciones (2 dobles, 2 de matrimonio, 1 triple y 1 séxtuple con literas) y 3 cuartos de baño.',
	},
	{
		pregunta: '¿Se alquila la casa entera o por habitaciones?',
		respuesta:
			'Siempre entera. El grupo que alquila Els Porxos tiene uso exclusivo de toda la casa, la piscina, el jardín, la barbacoa y la pista deportiva: no se comparte con otros huéspedes.',
	},
	{
		pregunta: '¿Tiene piscina privada la casa rural?',
		respuesta:
			'Sí, Els Porxos dispone de piscina privada de uso exclusivo para los huéspedes, rodeada de jardín y con acceso directo desde los porches.',
	},
	{
		pregunta: '¿Es una buena casa rural para familias con niños?',
		respuesta:
			'Sí. El recinto está vallado y tiene zona de juegos infantil con canasta, casita, tobogán y columpio, una pista con dos porterías, futbolín y ping-pong, y una habitación con literas. Es habitual que vengan varias familias juntas.',
	},
	{
		pregunta: '¿Se pueden hacer celebraciones en la casa?',
		respuesta:
			'Sí, celebraciones tranquilas como cumpleaños, aniversarios, reuniones familiares o de empresa, siempre dentro del grupo alojado y sin música alta por la noche.',
	},
	{
		pregunta: '¿Se admiten mascotas?',
		respuesta: 'No, en Els Porxos no se admiten mascotas.',
	},
	{
		pregunta: '¿Cuál es la estancia mínima y qué incluye el precio?',
		respuesta:
			'El alquiler mínimo es de 2 noches. El precio es por la casa completa e incluye sábanas, toallas y la limpieza final. Varía según la temporada, las noches y el tamaño del grupo: consulta el precio exacto por WhatsApp.',
	},
	{
		pregunta: '¿Dónde está situada la casa rural Els Porxos?',
		respuesta:
			"En Bellcaire d'Urgell, comarca de La Noguera, provincia de Lleida (Cataluña). A 12 minutos de Balaguer, 35 de Lleida y 1 h 50 min de Barcelona, cerca de Mont-rebei, Camarasa y el Estany d'Ivars.",
	},
	{
		pregunta: '¿Qué actividades se pueden hacer cerca de la casa rural?',
		respuesta:
			"Desde Els Porxos se accede fácilmente al Congost de Mont-rebei, las pasarelas del Congost de Mu, el embalse de Camarasa, el Estany d'Ivars i Vila-sana y los murales de Penelles. También hay rutas en bici y senderismo por la llanura de Urgell.",
	},
];

/** Datos estructurados FAQPage a partir de una lista de preguntas */
export const esquemaPreguntas = (lista: Pregunta[]) => ({
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: lista.map((p) => ({
		'@type': 'Question',
		name: p.pregunta,
		acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
	})),
});
