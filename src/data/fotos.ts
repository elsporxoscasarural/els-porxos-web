// Catálogo único de fotos de la casa. Las secciones y la galería leen de aquí.
// Para añadir una foto: copiarla a src/assets/img/casa/ (en kebab-case) y añadir su línea aquí.
// El orden de cada grupo es el orden en la galería.
import type { ImageMetadata } from 'astro';

export type Grupo = 'porches' | 'interior' | 'habitaciones' | 'exterior';

export const grupos: { id: Grupo; nombre: string }[] = [
	{ id: 'porches', nombre: 'Porches' },
	{ id: 'interior', nombre: 'Interior' },
	{ id: 'habitaciones', nombre: 'Habitaciones' },
	{ id: 'exterior', nombre: 'Jardín y piscina' },
];

const datos: { archivo: string; alt: string; grupo: Grupo }[] = [
	// Porches
	{ archivo: 'porche-futbolin-piscina', alt: 'Futbolín en el porche cubierto, con el jardín y la piscina al fondo', grupo: 'porches' },
	{ archivo: 'porche-ping-pong', alt: 'Porche alargado con mesa de ping-pong y vistas al jardín', grupo: 'porches' },
	{ archivo: 'porche-futbolin', alt: 'Porche cubierto con futbolín clásico, mesa y sillas', grupo: 'porches' },
	{ archivo: 'porche-barbacoa-futbolin', alt: 'Futbolín junto a la barbacoa de obra del porche', grupo: 'porches' },
	{ archivo: 'barbacoa-mesa-porche', alt: 'Barbacoa de obra y mesa grande para comer todos juntos bajo el porche', grupo: 'porches' },
	{ archivo: 'porche-arcos-jardin', alt: 'Porche con rosales junto al jardín', grupo: 'porches' },
	{ archivo: 'porche-banco-madera', alt: 'Porche con banco rústico de madera', grupo: 'porches' },
	// Interior
	{ archivo: 'salon-comedor-mesa', alt: 'Salón-comedor con gran mesa de madera y sofás de cuero', grupo: 'interior' },
	{ archivo: 'salon-chimenea', alt: 'Zona de estar del salón con sofás de cuero, televisión y chimenea', grupo: 'interior' },
	{ archivo: 'salon-comedor', alt: 'Salón-comedor amplio y luminoso con mesa para todo el grupo', grupo: 'interior' },
	{ archivo: 'salon-comedor-sofas', alt: 'Mesa de comedor y sofás de cuero en el salón', grupo: 'interior' },
	{ archivo: 'salon-detalle', alt: 'Mueble de madera y detalles decorativos del salón', grupo: 'interior' },
	{ archivo: 'comedor', alt: 'Comedor con mesa de madera y sillas a juego', grupo: 'interior' },
	{ archivo: 'comedor-vitrina', alt: 'Comedor con mesa de madera, estantes y vitrina', grupo: 'interior' },
	{ archivo: 'sala-estar-sillones', alt: 'Sala de estar con sillones giratorios de cuero', grupo: 'interior' },
	{ archivo: 'sala-estar-lampara', alt: 'Sala de estar con sillones de cuero y lámpara de mosaico', grupo: 'interior' },
	{ archivo: 'sala-estar', alt: 'Rincón de la sala de estar con sillón de cuero', grupo: 'interior' },
	{ archivo: 'recibidor-escalera', alt: 'Recibidor de entrada con la escalera de mármol', grupo: 'interior' },
	{ archivo: 'escalera-recibidor', alt: 'Escalera con barandilla de forja vista desde el recibidor', grupo: 'interior' },
	{ archivo: 'recibidor-detalle', alt: 'Detalle del recibidor con la escalera de forja', grupo: 'interior' },
	{ archivo: 'distribuidor-planta-alta', alt: 'Distribuidor de la planta de arriba con barandilla de forja', grupo: 'interior' },
	{ archivo: 'pasillo-habitaciones', alt: 'Pasillo de las habitaciones con jarrón decorativo', grupo: 'interior' },
	{ archivo: 'bano-b', alt: 'Cuarto de baño con bañera', grupo: 'interior' },
	{ archivo: 'bano-b-lavabo', alt: 'Cuarto de baño con lavabo de mosaico y bañera', grupo: 'interior' },
	{ archivo: 'bano-suite', alt: 'Baño de la habitación suite', grupo: 'interior' },
	{ archivo: 'bano-a', alt: 'Cuarto de baño con ducha', grupo: 'interior' },
	// Habitaciones
	{ archivo: 'habitacion-d-suite', alt: 'Habitación de matrimonio suite con butaca', grupo: 'habitaciones' },
	{ archivo: 'habitacion-d-suite-2', alt: 'Habitación suite con cama de matrimonio y cómoda', grupo: 'habitaciones' },
	{ archivo: 'habitacion-e-matrimonio', alt: 'Habitación de matrimonio con cabecero de madera', grupo: 'habitaciones' },
	{ archivo: 'habitacion-e-matrimonio-2', alt: 'Habitación de matrimonio con mesitas y lámparas', grupo: 'habitaciones' },
	{ archivo: 'habitacion-c-doble', alt: 'Habitación doble con dos camas individuales', grupo: 'habitaciones' },
	{ archivo: 'habitacion-f-doble', alt: 'Habitación doble con camas individuales y cabeceros de madera', grupo: 'habitaciones' },
	{ archivo: 'habitacion-a-triple', alt: 'Habitación triple con litera', grupo: 'habitaciones' },
	{ archivo: 'habitacion-b-literas', alt: 'Habitación séxtuple con literas de madera', grupo: 'habitaciones' },
	// Jardín y piscina
	{ archivo: 'casa-dron', alt: "Vista aérea de la casa con el jardín y la piscina, entre los campos de Bellcaire d'Urgell", grupo: 'exterior' },
	{ archivo: 'piscina-seto', alt: 'Piscina privada junto al seto y la balaustrada', grupo: 'exterior' },
	{ archivo: 'fachada-jardin-entrada', alt: 'La casa con sus porches, el magnolio y la piscina', grupo: 'exterior' },
	{ archivo: 'piscina', alt: 'Piscina privada rodeada de seto y jardín', grupo: 'exterior' },
	{ archivo: 'piscina-escalera', alt: 'Piscina privada con escalera', grupo: 'exterior' },
	{ archivo: 'jardin-piscina-campos', alt: 'Jardín y piscina vistos desde el balcón, con los campos al fondo', grupo: 'exterior' },
	{ archivo: 'jardin-flores-piscina', alt: 'Flores del jardín junto a la piscina y la balaustrada', grupo: 'exterior' },
	{ archivo: 'jardin-camino-entrada', alt: 'Camino de entrada por el jardín, entre flores', grupo: 'exterior' },
	{ archivo: 'jardin-rosales-porche', alt: 'Jardín con rosales a lo largo del porche', grupo: 'exterior' },
	{ archivo: 'jardin-desde-balcon', alt: 'El jardín y el camino de entrada vistos desde el balcón', grupo: 'exterior' },
	{ archivo: 'zona-juegos', alt: 'Zona de juegos infantil con canasta, casita y tobogán', grupo: 'exterior' },
	{ archivo: 'pista-deportiva', alt: 'Pista deportiva privada con portería y la casa al fondo', grupo: 'exterior' },
	{ archivo: 'fachada-panoramica', alt: 'Vista panorámica de la fachada con porches y balcones', grupo: 'exterior' },
	{ archivo: 'fachada-calle-olivos', alt: 'La casa vista desde la calle, entre olivos', grupo: 'exterior' },
	{ archivo: 'fachada-calle-entrada', alt: 'Fachada de la casa vista desde la calle', grupo: 'exterior' },
];

const archivos = import.meta.glob<{ default: ImageMetadata }>('../assets/img/casa/*.jpg', { eager: true });

export interface Foto {
	id: string;
	src: ImageMetadata;
	alt: string;
	grupo: Grupo;
}

export const fotos: Foto[] = datos.map((d) => {
	const m = archivos[`../assets/img/casa/${d.archivo}.jpg`];
	if (!m) throw new Error(`Falta la foto src/assets/img/casa/${d.archivo}.jpg`);
	return { id: d.archivo, src: m.default, alt: d.alt, grupo: d.grupo };
});

/** Busca una foto por su nombre de archivo (sin .jpg). Falla al compilar si no existe. */
export function foto(id: string): Foto {
	const f = fotos.find((x) => x.id === id);
	if (!f) throw new Error(`La foto «${id}» no está en src/data/fotos.ts`);
	return f;
}
