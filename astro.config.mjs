// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://elsporxos.es',
	// Las URLs actuales acaban en barra (/casa-rural-lleida/): se mantienen igual para no perder posicionamiento
	trailingSlash: 'always',
	// Sin la barra de herramientas de desarrollo de Astro: tapa partes de la web al revisarla en local
	devToolbar: { enabled: false },
	// CSS dentro del HTML: sin peticiones que bloqueen el primer pintado (la web es pequeña, compensa)
	build: { inlineStylesheets: 'always' },
	// Castellano en la raíz (/) y catalán en /ca/
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'ca'],
		routing: { prefixDefaultLocale: false },
	},
	integrations: [
		sitemap({
			filter: (pagina) => !pagina.includes('/404'),
			i18n: { defaultLocale: 'es', locales: { es: 'es-ES', ca: 'ca-ES' } },
		}),
	],
});
