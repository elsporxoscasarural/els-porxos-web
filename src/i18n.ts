// Idiomas de la web: castellano en la raíz y catalán en /ca/.
// Cada componente guarda sus textos en los dos idiomas y elige con idiomaDe(Astro.currentLocale).
export type Idioma = 'es' | 'ca';

export const idiomaDe = (locale: string | undefined): Idioma => (locale === 'ca' ? 'ca' : 'es');

/** Equivalencias de URL entre idiomas (para el selector de idioma y las etiquetas hreflang) */
export const rutas: { es: string; ca: string }[] = [
	{ es: '/', ca: '/ca/' },
	{ es: '/casa-rural-lleida/', ca: '/ca/casa-rural-lleida/' },
	{ es: '/casa-rural-grupos-grandes/', ca: '/ca/casa-rural-grups-grans/' },
	{ es: '/casa-rural-familias-ninos/', ca: '/ca/casa-rural-families-amb-nens/' },
	{ es: '/que-hacer-cerca/', ca: '/ca/que-fer-a-prop/' },
];

/** La misma página en el otro idioma (o la portada si no tiene equivalente) */
export const equivalente = (ruta: string, a: Idioma) => {
	const r = rutas.find((x) => x.es === ruta || x.ca === ruta);
	return r ? r[a] : a === 'ca' ? '/ca/' : '/';
};

/** Ruta de una página en un idioma, a partir de su ruta en castellano: ruta('/que-hacer-cerca/', 'ca') */
export const ruta = (es: string, lang: Idioma) => {
	const [base, ancla] = es.split('#');
	const r = rutas.find((x) => x.es === base);
	const destino = lang === 'es' ? base : r ? r.ca : `/ca${base}`;
	return ancla !== undefined ? `${destino}#${ancla}` : destino;
};
