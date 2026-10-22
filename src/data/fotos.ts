// Catálogo único de fotos de la casa. Las secciones y la galería leen de aquí.
// Para añadir una foto: copiarla a src/assets/img/casa/ (en kebab-case) y añadir su línea aquí.
// El orden de cada grupo es el orden en la galería.
import type { ImageMetadata } from 'astro';
import type { Idioma } from '../i18n';

export type Grupo = 'porches' | 'interior' | 'habitaciones' | 'exterior';

export const grupos: { id: Grupo; nombre: string; nombreCa: string }[] = [
	{ id: 'porches', nombre: 'Porches', nombreCa: 'Porxos' },
	{ id: 'interior', nombre: 'Interior', nombreCa: 'Interior' },
	{ id: 'habitaciones', nombre: 'Habitaciones', nombreCa: 'Habitacions' },
	{ id: 'exterior', nombre: 'Jardín y piscina', nombreCa: 'Jardí i piscina' },
];

const datos: { archivo: string; alt: string; altCa: string; grupo: Grupo }[] = [
	// Porches
	{ archivo: 'porche-futbolin-piscina', alt: 'Futbolín en el porche cubierto, con el jardín y la piscina al fondo', altCa: "Futbolí al porxo cobert, amb el jardí i la piscina al fons", grupo: 'porches' },
	{ archivo: 'porche-ping-pong', alt: 'Porche alargado con mesa de ping-pong y vistas al jardín', altCa: "Porxo allargat amb taula de ping-pong i vistes al jardí", grupo: 'porches' },
	{ archivo: 'porche-futbolin', alt: 'Porche cubierto con futbolín clásico, mesa y sillas', altCa: "Porxo cobert amb futbolí clàssic, taula i cadires", grupo: 'porches' },
	{ archivo: 'porche-barbacoa-futbolin', alt: 'Futbolín junto a la barbacoa de obra del porche', altCa: "Futbolí al costat de la barbacoa d'obra del porxo", grupo: 'porches' },
	{ archivo: 'barbacoa-mesa-porche', alt: 'Barbacoa de obra y mesa grande para comer todos juntos bajo el porche', altCa: "Barbacoa d'obra i taula gran per menjar tots junts sota el porxo", grupo: 'porches' },
	{ archivo: 'porche-arcos-jardin', alt: 'Porche con rosales junto al jardín', altCa: "Porxo amb rosers al costat del jardí", grupo: 'porches' },
	{ archivo: 'porche-banco-madera', alt: 'Porche con banco rústico de madera', altCa: "Porxo amb banc rústic de fusta", grupo: 'porches' },
	// Interior
	{ archivo: 'salon-comedor-mesa', alt: 'Salón-comedor con gran mesa de madera y sofás de cuero', altCa: "Sala d'estar i menjador amb una gran taula de fusta i sofàs de pell", grupo: 'interior' },
	{ archivo: 'salon-chimenea', alt: 'Zona de estar del salón con sofás de cuero, televisión y chimenea', altCa: "Sala d'estar amb sofàs de pell, televisió i llar de foc", grupo: 'interior' },
	{ archivo: 'salon-comedor', alt: 'Salón-comedor amplio y luminoso con mesa para todo el grupo', altCa: "Sala d'estar i menjador àmplia i lluminosa amb taula per a tot el grup", grupo: 'interior' },
	{ archivo: 'salon-comedor-sofas', alt: 'Mesa de comedor y sofás de cuero en el salón', altCa: "Taula de menjador i sofàs de pell a la sala", grupo: 'interior' },
	{ archivo: 'salon-detalle', alt: 'Mueble de madera y detalles decorativos del salón', altCa: "Moble de fusta i detalls decoratius de la sala", grupo: 'interior' },
	{ archivo: 'comedor', alt: 'Comedor con mesa de madera y sillas a juego', altCa: "Menjador amb taula de fusta i cadires a joc", grupo: 'interior' },
	{ archivo: 'comedor-vitrina', alt: 'Comedor con mesa de madera, estantes y vitrina', altCa: "Menjador amb taula de fusta, prestatges i vitrina", grupo: 'interior' },
	{ archivo: 'sala-estar-sillones', alt: 'Sala de estar con sillones giratorios de cuero', altCa: "Sala d'estar amb butaques giratòries de pell", grupo: 'interior' },
	{ archivo: 'sala-estar-lampara', alt: 'Sala de estar con sillones de cuero y lámpara de mosaico', altCa: "Sala d'estar amb butaques de pell i làmpada de mosaic", grupo: 'interior' },
	{ archivo: 'sala-estar', alt: 'Rincón de la sala de estar con sillón de cuero', altCa: "Racó de la sala d'estar amb butaca de pell", grupo: 'interior' },
	{ archivo: 'recibidor-escalera', alt: 'Recibidor de entrada con la escalera de mármol', altCa: "Rebedor d'entrada amb l'escala de marbre", grupo: 'interior' },
	{ archivo: 'escalera-recibidor', alt: 'Escalera con barandilla de forja vista desde el recibidor', altCa: "Escala amb barana de forja vista des del rebedor", grupo: 'interior' },
	{ archivo: 'recibidor-detalle', alt: 'Detalle del recibidor con la escalera de forja', altCa: "Detall del rebedor amb l'escala de forja", grupo: 'interior' },
	{ archivo: 'distribuidor-planta-alta', alt: 'Distribuidor de la planta de arriba con barandilla de forja', altCa: "Distribuïdor de la planta de dalt amb barana de forja", grupo: 'interior' },
	{ archivo: 'pasillo-habitaciones', alt: 'Pasillo de las habitaciones con jarrón decorativo', altCa: "Passadís de les habitacions amb gerro decoratiu", grupo: 'interior' },
	{ archivo: 'bano-b', alt: 'Cuarto de baño con bañera', altCa: "Bany amb banyera", grupo: 'interior' },
	{ archivo: 'bano-b-lavabo', alt: 'Cuarto de baño con lavabo de mosaico y bañera', altCa: "Bany amb lavabo de mosaic i banyera", grupo: 'interior' },
	{ archivo: 'bano-suite', alt: 'Baño de la habitación suite', altCa: "Bany de l'habitació suite", grupo: 'interior' },
	{ archivo: 'bano-a', alt: 'Cuarto de baño con ducha', altCa: "Bany amb dutxa", grupo: 'interior' },
	// Habitaciones
	{ archivo: 'habitacion-d-suite', alt: 'Habitación de matrimonio suite con butaca', altCa: "Habitació de matrimoni suite amb butaca", grupo: 'habitaciones' },
	{ archivo: 'habitacion-d-suite-2', alt: 'Habitación suite con cama de matrimonio y cómoda', altCa: "Habitació suite amb llit de matrimoni i calaixera", grupo: 'habitaciones' },
	{ archivo: 'habitacion-e-matrimonio', alt: 'Habitación de matrimonio con cabecero de madera', altCa: "Habitació de matrimoni amb capçal de fusta", grupo: 'habitaciones' },
	{ archivo: 'habitacion-e-matrimonio-2', alt: 'Habitación de matrimonio con mesitas y lámparas', altCa: "Habitació de matrimoni amb tauletes i llums", grupo: 'habitaciones' },
	{ archivo: 'habitacion-c-doble', alt: 'Habitación doble con dos camas individuales', altCa: "Habitació doble amb dos llits individuals", grupo: 'habitaciones' },
	{ archivo: 'habitacion-f-doble', alt: 'Habitación doble con camas individuales y cabeceros de madera', altCa: "Habitació doble amb llits individuals i capçals de fusta", grupo: 'habitaciones' },
	{ archivo: 'habitacion-a-triple', alt: 'Habitación triple con litera', altCa: "Habitació triple amb llitera", grupo: 'habitaciones' },
	{ archivo: 'habitacion-b-literas', alt: 'Habitación séxtuple con literas de madera', altCa: "Habitació sèxtuple amb lliteres de fusta", grupo: 'habitaciones' },
	// Jardín y piscina
	{ archivo: 'casa-dron', alt: "Vista aérea de la casa con el jardín y la piscina, entre los campos de Bellcaire d'Urgell", altCa: "Vista aèria de la casa amb el jardí i la piscina, entre els camps de Bellcaire d'Urgell", grupo: 'exterior' },
	{ archivo: 'piscina-seto', alt: 'Piscina privada junto al seto y la balaustrada', altCa: "Piscina privada al costat de la bardissa i la balustrada", grupo: 'exterior' },
	{ archivo: 'fachada-jardin-entrada', alt: 'La casa con sus porches, el magnolio y la piscina', altCa: "La casa amb els porxos, el magnoli i la piscina", grupo: 'exterior' },
	{ archivo: 'piscina', alt: 'Piscina privada rodeada de seto y jardín', altCa: "Piscina privada envoltada de bardissa i jardí", grupo: 'exterior' },
	{ archivo: 'piscina-escalera', alt: 'Piscina privada con escalera', altCa: "Piscina privada amb escala", grupo: 'exterior' },
	{ archivo: 'jardin-piscina-campos', alt: 'Jardín y piscina vistos desde el balcón, con los campos al fondo', altCa: "Jardí i piscina vistos des del balcó, amb els camps al fons", grupo: 'exterior' },
	{ archivo: 'jardin-flores-piscina', alt: 'Flores del jardín junto a la piscina y la balaustrada', altCa: "Flors del jardí al costat de la piscina i la balustrada", grupo: 'exterior' },
	{ archivo: 'jardin-camino-entrada', alt: 'Camino de entrada por el jardín, entre flores', altCa: "Camí d'entrada pel jardí, entre flors", grupo: 'exterior' },
	{ archivo: 'jardin-rosales-porche', alt: 'Jardín con rosales a lo largo del porche', altCa: "Jardí amb rosers al llarg del porxo", grupo: 'exterior' },
	{ archivo: 'jardin-desde-balcon', alt: 'El jardín y el camino de entrada vistos desde el balcón', altCa: "El jardí i el camí d'entrada vistos des del balcó", grupo: 'exterior' },
	{ archivo: 'zona-juegos', alt: 'Zona de juegos infantil con canasta, casita y tobogán', altCa: "Zona de jocs infantil amb cistella, caseta i tobogan", grupo: 'exterior' },
	{ archivo: 'pista-deportiva', alt: 'Pista deportiva privada con portería y la casa al fondo', altCa: "Pista esportiva privada amb porteria i la casa al fons", grupo: 'exterior' },
	{ archivo: 'fachada-panoramica', alt: 'Vista panorámica de la fachada con porches y balcones', altCa: "Vista panoràmica de la façana amb porxos i balcons", grupo: 'exterior' },
	{ archivo: 'fachada-calle-olivos', alt: 'La casa vista desde la calle, entre olivos', altCa: "La casa vista des del carrer, entre oliveres", grupo: 'exterior' },
	{ archivo: 'fachada-calle-entrada', alt: 'Fachada de la casa vista desde la calle', altCa: "Façana de la casa vista des del carrer", grupo: 'exterior' },
];

const archivos = import.meta.glob<{ default: ImageMetadata }>('../assets/img/casa/*.jpg', { eager: true });

export interface Foto {
	id: string;
	src: ImageMetadata;
	alt: string;
	grupo: Grupo;
}

const base = datos.map((d) => {
	const m = archivos[`../assets/img/casa/${d.archivo}.jpg`];
	if (!m) throw new Error(`Falta la foto src/assets/img/casa/${d.archivo}.jpg`);
	return { id: d.archivo, src: m.default, alt: d.alt, altCa: d.altCa, grupo: d.grupo };
});

/** Todas las fotos, con el texto alternativo en el idioma pedido */
export const fotosEn = (lang: Idioma = 'es'): Foto[] =>
	base.map(({ altCa, ...f }) => ({ ...f, alt: lang === 'ca' ? altCa : f.alt }));

/** Catálogo en castellano (compatibilidad) */
export const fotos: Foto[] = fotosEn('es');

/** Busca una foto por su nombre de archivo (sin .jpg). Falla al compilar si no existe. */
export function foto(id: string, lang: Idioma = 'es'): Foto {
	const f = fotosEn(lang).find((x) => x.id === id);
	if (!f) throw new Error(`La foto «${id}» no está en src/data/fotos.ts`);
	return f;
}
