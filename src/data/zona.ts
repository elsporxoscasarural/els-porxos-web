// Qué hacer cerca de la casa. Textos de la web actual. Fotos de Wikimedia Commons con licencia libre:
// se muestra siempre el crédito del autor y el enlace a la licencia (lo exigen CC BY y CC BY-SA).
import type { ImageMetadata } from 'astro';
import type { Idioma } from '../i18n';

const archivos = import.meta.glob<{ default: ImageMetadata }>('../assets/img/zona/*.jpg', { eager: true });
const img = (id: string) => {
	const m = archivos[`../assets/img/zona/${id}.jpg`];
	if (!m) throw new Error(`Falta la foto src/assets/img/zona/${id}.jpg`);
	return m.default;
};

export interface Lugar {
	id: string;
	nombre: string;
	distancia: string;
	texto: string;
	foto: ImageMetadata;
	alt: string;
	/** Texto ampliado de la página «Qué hacer cerca» */
	titulo: string;
	parrafos: string[];
	etiquetas: string[];
	credito: { autor: string; licencia: string; urlLicencia: string; fuente: string };
}

export const lugares: Lugar[] = [
	{
		id: 'penelles',
		titulo: 'Penelles: el pueblo de los murales',
		parrafos: [
			'A unos 10 minutos de Els Porxos (7 km), Penelles es un pequeño pueblo de la Noguera que se ha convertido en un museo de arte urbano al aire libre. Decenas de murales de artistas de todo el mundo cubren sus fachadas, granjas y muros, gracias al festival GarGar que se celebra cada verano.',
			'Es un paseo ideal para después de comer: aparcar en la entrada del pueblo y recorrer sus calles descubriendo obras que van del realismo hiperrealista a la abstracción. Hay un mapa disponible en la entrada con la ubicación de todos los murales.',
		],
		etiquetas: ['Arte urbano', 'GarGar', '1 hora', 'Gratuito'],
		nombre: 'Penelles',
		distancia: 'A 10 min (7 km)',
		texto: 'El pueblo-museo del arte urbano: decenas de murales de artistas de todo el mundo cubren sus fachadas gracias al festival GarGar.',
		foto: img('penelles'),
		alt: 'Mural de un anciano con gorra pintado en la fachada de una casa de Penelles',
		credito: { autor: 'Manuel Portero', licencia: 'CC BY-SA 4.0', urlLicencia: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Arte_mural_en_Penelles_(Lleida)_03.jpg' },
	},
	{
		id: 'castell-del-remei',
		titulo: 'Castell del Remei',
		parrafos: [
			'Finca histórica con una bodega centenaria de la D.O. Costers del Segre, a unos 15 minutos de la casa rural. Ofrecen visitas guiadas por la bodega y los viñedos, catas de vinos y un restaurante con menú degustación. El entorno incluye un santuario, un lago y jardines para pasear.',
			'Es el plan perfecto para los adultos del grupo: una mañana o tarde de enoturismo mientras los niños disfrutan de la piscina y los juegos en la casa rural.',
		],
		etiquetas: ['Enoturismo', 'Catas', 'Restaurante', 'Costers del Segre'],
		nombre: 'Castell del Remei',
		distancia: 'Aprox. 15 min (11 km)',
		texto: 'Finca histórica con bodega centenaria de la D.O. Costers del Segre: visitas y catas entre viñedos, santuario, lago y restaurante. Una escapada perfecta desde la casa.',
		foto: img('castell-del-remei'),
		alt: 'Bodega abovedada del Castell del Remei con hileras de barricas',
		credito: { autor: 'Manuel Portero', licencia: 'CC BY-SA 4.0', urlLicencia: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Bodega-cava_del_remei_1de2w.jpg' },
	},
	{
		id: 'estany-ivars',
		titulo: 'Estany d\'Ivars i Vila-sana',
		parrafos: [
			'El lago interior más grande de Cataluña es un humedal recuperado que se ha convertido en un paraíso para la observación de aves: garzas, flamencos, patos y decenas de especies más. Un camino circular de unos 7 km rodea el lago, perfecto para recorrer a pie o en bicicleta con toda la familia.',
			'Hay varios miradores con paneles informativos, zonas de descanso y aparcamiento gratuito. Es una excursión tranquila ideal para combinar con una mañana o tarde en la casa rural.',
		],
		etiquetas: ['Aves', 'Bici', 'Familias', 'Media jornada'],
		nombre: "Estany d'Ivars i Vila-sana",
		distancia: 'Aprox. 20 min (13 km)',
		texto: 'El lago interior más grande de Cataluña, un humedal recuperado ideal para observar aves y recorrer a pie o en bicicleta su camino circular.',
		foto: img('estany-ivars'),
		alt: "El Estany d'Ivars al atardecer, con un nido de cigüeña sobre un poste",
		credito: { autor: 'Berta Blanch Julià', licencia: 'CC BY-SA 4.0', urlLicencia: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Estany_d%27Ivars_i_Vilasana.jpg' },
	},
	{
		id: 'camarasa',
		titulo: 'Embalse de Camarasa',
		parrafos: [
			'El embalse de Camarasa es el plan perfecto para los días de más calor: baño en aguas tranquilas, kayak, paddle surf y pesca, todo rodeado de montañas y con varias zonas de acceso fácil. También hay rutas de senderismo por los alrededores del pantano, con vistas panorámicas sobre la Noguera.',
			'El pueblo de Camarasa, con su castillo medieval en lo alto, merece un paseo antes o después del baño. Desde Bellcaire d\'Urgell se llega en unos 20 minutos.',
		],
		etiquetas: ['Baño', 'Kayak', 'Pesca', 'Día completo'],
		nombre: 'Camarasa',
		distancia: 'Aprox. 20 min (19 km)',
		texto: 'Su embalse es un paraíso para el kayak, la pesca y el baño, rodeado de montañas y rutas de senderismo para todos los niveles.',
		foto: img('camarasa'),
		alt: 'El embalse de Camarasa entre montañas',
		credito: { autor: 'Cornelia Bohl Smolders', licencia: 'CC BY-SA 3.0', urlLicencia: 'https://creativecommons.org/licenses/by-sa/3.0', fuente: 'https://commons.wikimedia.org/wiki/File:Embassament_de_Camarasa.jpg' },
	},
	{
		id: 'congost-de-mu',
		titulo: 'Congost de Mu y pasarelas del Segre',
		parrafos: [
			'La ruta de las pasarelas colgantes sobre el río Segre, entre Camarasa y Alòs de Balaguer, es una de las excursiones más populares de la zona. El recorrido sigue el desfiladero del Mu por pasarelas de madera y metal ancladas a la roca, con vistas espectaculares sobre el agua.',
			'Es una ruta circular de unas 2 horas, accesible para familias con niños. El punto de partida más habitual es el aparcamiento de Camarasa. Perfecta para una mañana de excursión antes de volver a la piscina de la casa rural.',
		],
		etiquetas: ['Pasarelas', 'Río Segre', '2 horas', 'Accesible'],
		nombre: 'Congost de Mu',
		distancia: 'Aprox. 25 min (37 km)',
		texto: 'La ruta de las pasarelas colgantes sobre el río Segre, entre Camarasa y Alòs de Balaguer. Una caminata espectacular junto al agua.',
		foto: img('congost-mu'),
		alt: 'El río Segre entre las paredes del Congost de Mu',
		credito: { autor: 'Alberto-g-rovi', licencia: 'CC BY 3.0', urlLicencia: 'https://creativecommons.org/licenses/by/3.0', fuente: 'https://commons.wikimedia.org/wiki/File:Congost_de_Mu_(11).jpg' },
	},
	{
		id: 'mont-rebei',
		titulo: 'Congost de Mont-rebei',
		parrafos: [
			'El desfiladero más impresionante de Cataluña y una de las excursiones más buscadas desde cualquier casa rural en Lleida. Un sendero de 4 km excavado en la roca a 500 metros sobre las aguas turquesas de la Noguera Ribagorçana, en la frontera entre Lleida y Huesca.',
			'La ruta es lineal (ida y vuelta), sin grandes desniveles pero con tramos aéreos. Es apta para familias con niños mayores de 7-8 años. Se recomienda ir temprano, especialmente en verano, para aparcar cerca y evitar el calor. Desde Bellcaire d\'Urgell se llega por la C-12 hasta el Pont de Montanyana.',
		],
		etiquetas: ['Senderismo', 'Paisaje', 'Medio día', 'Familias'],
		nombre: 'Congost de Mont-rebei',
		distancia: 'Aprox. 1 h (56 km)',
		texto: 'El desfiladero más impresionante de Cataluña: un sendero excavado en la roca sobre las aguas turquesas de la Noguera Ribagorçana. Imprescindible.',
		foto: img('mont-rebei'),
		alt: 'El Congost de Mont-rebei visto desde arriba, con el río turquesa entre las dos paredes del cañón',
		credito: { autor: 'Sílvia Martín', licencia: 'CC BY 2.0', urlLicencia: 'https://creativecommons.org/licenses/by/2.0', fuente: 'https://commons.wikimedia.org/wiki/File:Congost_de_Mont-rebei_-_8677113211.jpg' },
	},
	{
		id: 'rutas-bici',
		titulo: 'Rutas en bici y senderismo por la llanura de Urgell',
		parrafos: [
			'La llanura de Urgell es territorio llano, atravesado por canales de riego y caminos entre campos de cereal, almendros y frutales. Desde la puerta de Els Porxos salen rutas sin apenas desnivel, ideales para familias con niños o para quien prefiere pedalear sin cuestas.',
			'El Canal d\'Urgell, que pasa cerca de Bellcaire, tiene un camino de servicio perfecto para bicicleta. También puedes recorrer los caminos rurales que conectan los pueblos de la comarca: Penelles, Castellserà, Ivars d\'Urgell y más.',
		],
		etiquetas: ['Bicicleta', 'Senderismo', 'Familias', 'Sin desnivel'],
		nombre: 'Rutas en bici y a pie',
		distancia: 'Desde la puerta de casa',
		texto: 'La llanura de Urgell, con sus caminos entre campos y canales, es perfecta para pasear y pedalear sin desniveles desde la misma casa.',
		foto: img('canal-urgell'),
		alt: "Camino arbolado junto al Canal d'Urgell",
		credito: { autor: 'Birding In Spain', licencia: 'CC BY-SA 4.0', urlLicencia: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Canal_d%27Urgell_at_Lleida.jpg' },
	},
];

// Textos en catalán de cada lugar (mismo id). Los créditos y las fotos son comunes.
type Traduccion = Pick<Lugar, 'nombre' | 'distancia' | 'texto' | 'alt' | 'titulo' | 'parrafos' | 'etiquetas'>;
const catalan: Record<string, Traduccion> = {
	penelles: {
		nombre: 'Penelles',
		titulo: 'Penelles: el poble dels murals',
		distancia: 'A 10 min (7 km)',
		texto: "El poble museu de l'art urbà: desenes de murals d'artistes de tot el món cobreixen les façanes gràcies al festival GarGar.",
		alt: "Mural d'un avi amb gorra pintat a la façana d'una casa de Penelles",
		parrafos: [
			"A uns 10 minuts d'Els Porxos (7 km), Penelles és un petit poble de la Noguera que s'ha convertit en un museu d'art urbà a l'aire lliure. Desenes de murals d'artistes de tot el món cobreixen les façanes, granges i murs, gràcies al festival GarGar que se celebra cada estiu.",
			"És un passeig ideal per després de dinar: aparcar a l'entrada del poble i recórrer els carrers descobrint obres que van de l'hiperrealisme a l'abstracció. A l'entrada hi ha un mapa amb la ubicació de tots els murals.",
		],
		etiquetas: ['Art urbà', 'GarGar', '1 hora', 'Gratuït'],
	},
	'castell-del-remei': {
		nombre: 'Castell del Remei',
		titulo: 'Castell del Remei',
		distancia: 'Aprox. 15 min (11 km)',
		texto: 'Finca històrica amb celler centenari de la D.O. Costers del Segre: visites i tasts entre vinyes, santuari, llac i restaurant. Una escapada perfecta des de la casa.',
		alt: 'Celler amb volta del Castell del Remei amb fileres de bótes',
		parrafos: [
			'Finca històrica amb un celler centenari de la D.O. Costers del Segre, a uns 15 minuts de la casa rural. Ofereixen visites guiades pel celler i les vinyes, tasts de vins i un restaurant amb menú degustació. L\'entorn inclou un santuari, un llac i jardins per passejar.',
			'És el pla perfecte per als adults del grup: un matí o una tarda d\'enoturisme mentre els nens gaudeixen de la piscina i els jocs a la casa rural.',
		],
		etiquetas: ['Enoturisme', 'Tasts', 'Restaurant', 'Costers del Segre'],
	},
	'estany-ivars': {
		nombre: "Estany d'Ivars i Vila-sana",
		titulo: "Estany d'Ivars i Vila-sana",
		distancia: 'Aprox. 20 min (13 km)',
		texto: "L'estany interior més gran de Catalunya, una zona humida recuperada ideal per observar ocells i recórrer a peu o en bicicleta el seu camí circular.",
		alt: "L'Estany d'Ivars al capvespre, amb un niu de cigonya sobre un pal",
		parrafos: [
			"L'estany interior més gran de Catalunya és una zona humida recuperada que s'ha convertit en un paradís per a l'observació d'ocells: agrons, flamencs, ànecs i desenes d'espècies més. Un camí circular d'uns 7 km envolta l'estany, perfecte per fer a peu o en bicicleta amb tota la família.",
			"Hi ha diversos miradors amb plafons informatius, zones de descans i aparcament gratuït. És una excursió tranquil·la ideal per combinar amb un matí o una tarda a la casa rural.",
		],
		etiquetas: ['Ocells', 'Bici', 'Famílies', 'Mitja jornada'],
	},
	camarasa: {
		nombre: 'Camarasa',
		titulo: 'Embassament de Camarasa',
		distancia: 'Aprox. 20 min (19 km)',
		texto: "El seu embassament és un paradís per al caiac, la pesca i el bany, envoltat de muntanyes i rutes de senderisme per a tots els nivells.",
		alt: "L'embassament de Camarasa entre muntanyes",
		parrafos: [
			"L'embassament de Camarasa és el pla perfecte per als dies de més calor: bany en aigües tranquil·les, caiac, paddle surf i pesca, tot envoltat de muntanyes i amb diverses zones d'accés fàcil. També hi ha rutes de senderisme pels voltants del pantà, amb vistes panoràmiques sobre la Noguera.",
			"El poble de Camarasa, amb el castell medieval dalt de tot, val la pena per fer un passeig abans o després del bany. Des de Bellcaire d'Urgell s'hi arriba en uns 20 minuts.",
		],
		etiquetas: ['Bany', 'Caiac', 'Pesca', 'Dia sencer'],
	},
	'congost-de-mu': {
		nombre: 'Congost de Mu',
		titulo: 'Congost de Mu i passarel·les del Segre',
		distancia: 'Aprox. 25 min (37 km)',
		texto: "La ruta de les passarel·les penjades sobre el riu Segre, entre Camarasa i Alòs de Balaguer. Una caminada espectacular vora l'aigua.",
		alt: 'El riu Segre entre les parets del Congost de Mu',
		parrafos: [
			"La ruta de les passarel·les penjades sobre el riu Segre, entre Camarasa i Alòs de Balaguer, és una de les excursions més populars de la zona. El recorregut segueix el congost de Mu per passarel·les de fusta i metall ancorades a la roca, amb vistes espectaculars sobre l'aigua.",
			"És una ruta circular d'unes 2 hores, accessible per a famílies amb nens. El punt de sortida més habitual és l'aparcament de Camarasa. Perfecta per a un matí d'excursió abans de tornar a la piscina de la casa rural.",
		],
		etiquetas: ['Passarel·les', 'Riu Segre', '2 hores', 'Accessible'],
	},
	'mont-rebei': {
		nombre: 'Congost de Mont-rebei',
		titulo: 'Congost de Mont-rebei',
		distancia: 'Aprox. 1 h (56 km)',
		texto: 'El congost més impressionant de Catalunya: un camí excavat a la roca sobre les aigües turquesa de la Noguera Ribagorçana. Imprescindible.',
		alt: 'El Congost de Mont-rebei vist des de dalt, amb el riu turquesa entre les dues parets del canó',
		parrafos: [
			"El congost més impressionant de Catalunya i una de les excursions més buscades des de qualsevol casa rural de Lleida. Un camí de 4 km excavat a la roca a 500 metres sobre les aigües turquesa de la Noguera Ribagorçana, a la frontera entre Lleida i Osca.",
			"La ruta és lineal (anada i tornada), sense grans desnivells però amb trams aeris. És apta per a famílies amb nens de més de 7-8 anys. Es recomana anar-hi d'hora, sobretot a l'estiu, per aparcar a prop i evitar la calor. Des de Bellcaire d'Urgell s'hi arriba per la C-12 fins al Pont de Montanyana.",
		],
		etiquetas: ['Senderisme', 'Paisatge', 'Mig dia', 'Famílies'],
	},
	'rutas-bici': {
		nombre: 'Rutes en bici i a peu',
		titulo: "Rutes en bici i senderisme per la plana d'Urgell",
		distancia: 'Des de la porta de casa',
		texto: "La plana d'Urgell, amb els seus camins entre camps i canals, és perfecta per passejar i pedalar sense desnivells des de la mateixa casa.",
		alt: "Camí arbrat al costat del Canal d'Urgell",
		parrafos: [
			"La plana d'Urgell és territori pla, travessat per canals de reg i camins entre camps de cereal, ametllers i fruiters. Des de la porta d'Els Porxos surten rutes gairebé sense desnivell, ideals per a famílies amb nens o per a qui prefereix pedalar sense pujades.",
			"El Canal d'Urgell, que passa a prop de Bellcaire, té un camí de servei perfecte per anar en bicicleta. També pots recórrer els camins rurals que connecten els pobles de la comarca: Penelles, Castellserà, Ivars d'Urgell i més.",
		],
		etiquetas: ['Bicicleta', 'Senderisme', 'Famílies', 'Sense desnivell'],
	},
};

/** Lugares en el idioma pedido */
export const lugaresEn = (lang: Idioma = 'es'): Lugar[] =>
	lang === 'ca' ? lugares.map((l) => ({ ...l, ...catalan[l.id] })) : lugares;
