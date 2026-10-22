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
			'La casa rural tiene capacidad para hasta 20 personas en 6 habitaciones (2 dobles, 2 de matrimonio, 1 triple y 1 séxtuple con literas) y 3 cuartos de baño.',
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
			"En Bellcaire d'Urgell, comarca de La Noguera, provincia de Lleida (Cataluña). A 12 minutos de Balaguer, 35 de Lleida y 1 h 30 min de Barcelona, cerca de Mont-rebei, Camarasa y el Estany d'Ivars.",
	},
	{
		pregunta: '¿Qué actividades se pueden hacer cerca de la casa rural?',
		respuesta:
			"Desde Els Porxos se accede fácilmente al Congost de Mont-rebei, las pasarelas del Congost de Mu, el embalse de Camarasa, el Estany d'Ivars i Vila-sana y los murales de Penelles. También hay rutas en bici y senderismo por la llanura de Urgell.",
	},
];

export const preguntasCa: Pregunta[] = [
	{
		pregunta: 'Quantes persones hi caben a la casa rural Els Porxos?',
		respuesta:
			'La casa rural té capacitat per a fins a 20 persones en 6 habitacions (2 dobles, 2 de matrimoni, 1 triple i 1 sèxtuple amb lliteres) i 3 banys.',
	},
	{
		pregunta: "Es lloga la casa sencera o per habitacions?",
		respuesta:
			"Sempre sencera. El grup que lloga Els Porxos té ús exclusiu de tota la casa, la piscina, el jardí, la barbacoa i la pista esportiva: no es comparteix amb altres hostes.",
	},
	{
		pregunta: 'Té piscina privada la casa rural?',
		respuesta:
			"Sí, Els Porxos disposa de piscina privada d'ús exclusiu per als hostes, envoltada de jardí i amb accés directe des dels porxos.",
	},
	{
		pregunta: 'És una bona casa rural per a famílies amb nens?',
		respuesta:
			"Sí. El recinte està tancat i té zona de jocs infantil amb cistella, caseta, tobogan i gronxador, una pista amb dues porteries, futbolí i ping-pong, i una habitació amb lliteres. És habitual que hi vinguin diverses famílies juntes.",
	},
	{
		pregunta: 'Es poden fer celebracions a la casa?',
		respuesta:
			"Sí, celebracions tranquil·les com aniversaris, reunions familiars o d'empresa, sempre dins del grup allotjat i sense música alta a la nit.",
	},
	{
		pregunta: "S'admeten mascotes?",
		respuesta: "No, a Els Porxos no s'admeten mascotes.",
	},
	{
		pregunta: "Quina és l'estada mínima i què inclou el preu?",
		respuesta:
			"El lloguer mínim és de 2 nits. El preu és per la casa sencera i inclou llençols, tovalloles i la neteja final. Varia segons la temporada, les nits i la mida del grup: consulta el preu exacte per WhatsApp.",
	},
	{
		pregunta: 'On és la casa rural Els Porxos?',
		respuesta:
			"A Bellcaire d'Urgell, comarca de la Noguera, província de Lleida (Catalunya). A 12 minuts de Balaguer, 35 de Lleida i 1 h 30 min de Barcelona, a prop de Mont-rebei, Camarasa i l'Estany d'Ivars.",
	},
	{
		pregunta: 'Què es pot fer a prop de la casa rural?',
		respuesta:
			"Des d'Els Porxos s'accedeix fàcilment al Congost de Mont-rebei, les passarel·les del Congost de Mu, l'embassament de Camarasa, l'Estany d'Ivars i Vila-sana i els murals de Penelles. També hi ha rutes en bici i senderisme per la plana d'Urgell.",
	},
];

/** Preguntas generales en el idioma pedido */
export const preguntasEn = (lang: 'es' | 'ca' = 'es') => (lang === 'ca' ? preguntasCa : preguntas);

/** Datos estructurados FAQPage a partir de una lista de preguntas */
export const esquemaPreguntas = (lista: Pregunta[], lang: 'es' | 'ca' = 'es') => ({
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	inLanguage: lang,
	mainEntity: lista.map((p) => ({
		'@type': 'Question',
		name: p.pregunta,
		acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
	})),
});
