// Datos estructurados comunes de las páginas interiores. Todas apuntan a la misma entidad
// (la casa, con @id fijo) para que Google y las IA entiendan que hablan del mismo alojamiento.
export const ID_CASA = 'https://elsporxos.es/#casa';

export const migas = (nombre: string, url: string, lang: 'es' | 'ca' = 'es') => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		lang === 'ca'
			? { '@type': 'ListItem', position: 1, name: 'Inici', item: 'https://elsporxos.es/ca/' }
			: { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://elsporxos.es/' },
		{ '@type': 'ListItem', position: 2, name: nombre, item: url },
	],
});

export const paginaSobreLaCasa = (url: string, nombre: string, descripcion: string, lang: 'es' | 'ca' = 'es') => ({
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	'@id': `${url}#pagina`,
	url,
	name: nombre,
	description: descripcion,
	inLanguage: lang,
	isPartOf: { '@type': 'WebSite', name: 'Els Porxos Casa Rural', url: 'https://elsporxos.es/' },
	about: { '@id': ID_CASA },
	dateModified: new Date().toISOString().slice(0, 10),
});
