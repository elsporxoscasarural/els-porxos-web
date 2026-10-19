// Qué hacer cerca de la casa. Textos de la web actual. Fotos de Wikimedia Commons con licencia libre:
// se muestra siempre el crédito del autor y el enlace a la licencia (lo exigen CC BY y CC BY-SA).
import type { ImageMetadata } from 'astro';

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
			'A solo 5 minutos de Els Porxos, Penelles es un pequeño pueblo de la Noguera que se ha convertido en un museo de arte urbano al aire libre. Decenas de murales de artistas de todo el mundo cubren sus fachadas, granjas y muros, gracias al festival GarGar que se celebra cada verano.',
			'Es un paseo ideal para después de comer: aparcar en la entrada del pueblo y recorrer sus calles descubriendo obras que van del realismo hiperrealista a la abstracción. Hay un mapa disponible en la entrada con la ubicación de todos los murales.',
		],
		etiquetas: ['Arte urbano', 'GarGar', '1 hora', 'Gratuito'],
		nombre: 'Penelles',
		distancia: 'A 5 min de la casa',
		texto: 'El pueblo-museo del arte urbano: decenas de murales de artistas de todo el mundo cubren sus fachadas gracias al festival GarGar.',
		foto: img('penelles'),
		alt: 'Mural de un anciano con gorra pintado en la fachada de una casa de Penelles',
		credito: { autor: 'Manuel Portero', licencia: 'CC BY-SA 4.0', urlLicencia: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Arte_mural_en_Penelles_(Lleida)_03.jpg' },
	},
	{
		id: 'castell-del-remei',
		titulo: 'Castell del Remei',
		parrafos: [
			'Finca histórica con una bodega centenaria de la D.O. Costers del Segre, a solo 10 minutos de la casa rural. Ofrecen visitas guiadas por la bodega y los viñedos, catas de vinos y un restaurante con menú degustación. El entorno incluye un santuario, un lago y jardines para pasear.',
			'Es el plan perfecto para los adultos del grupo: una mañana o tarde de enoturismo mientras los niños disfrutan de la piscina y los juegos en la casa rural.',
		],
		etiquetas: ['Enoturismo', 'Catas', 'Restaurante', 'Costers del Segre'],
		nombre: 'Castell del Remei',
		distancia: 'Aprox. 10 min en coche',
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
		distancia: 'Aprox. 15 min en coche',
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
			'El pueblo de Camarasa, con su castillo medieval en lo alto, merece un paseo antes o después del baño. Desde Bellcaire d\'Urgell se llega en 25 minutos por la C-12.',
		],
		etiquetas: ['Baño', 'Kayak', 'Pesca', 'Día completo'],
		nombre: 'Camarasa',
		distancia: 'Aprox. 25 min en coche',
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
		distancia: 'Aprox. 30 min en coche',
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
		distancia: 'Aprox. 1 h en coche',
		texto: 'El desfiladero más impresionante de Cataluña: un sendero excavado en la roca sobre las aguas turquesas de la Noguera Ribagorçana. Imprescindible.',
		foto: img('mont-rebei'),
		alt: 'Excursionistas en el sendero excavado en la roca del Congost de Mont-rebei',
		credito: { autor: 'Alberto-g-rovi', licencia: 'CC BY 3.0', urlLicencia: 'https://creativecommons.org/licenses/by/3.0', fuente: 'https://commons.wikimedia.org/wiki/File:Congost_de_Mont-rebei_(2).jpg' },
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
