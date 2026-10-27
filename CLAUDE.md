# Els Porxos Casa Rural — Web

## Estado
- **`main`** = web publicada en https://elsporxos.es (Astro desde el 2026-10-19; Netlify compila `main` sola con `netlify.toml`). La web antigua está en la etiqueta `v1-legacy`.
- **`rediseno`** = rama de trabajo. Los cambios se agrupan y se pasan a `main` solo cuando el usuario lo pide (plan gratuito de Netlify: cada publicación gasta minutos de compilación).

## Calendario de disponibilidad
- `src/components/inicio/Disponibilidad.astro` (portada, después de Tarifas, `#disponibilidad`): sin precios; al elegir fechas rellena el campo «Fechas» del formulario.
- Datos: `netlify/functions/disponibilidad.mts` → `/api/disponibilidad`. Lee los iCal de exportación de las variables de entorno de Netlify `ICAL_AIRBNB`, `ICAL_BOOKING`, `ICAL_VRBO` (nunca en el repo) y devuelve solo rangos `[entrada, salida)`; la salida queda libre. Caché de 1 h en la red de Netlify.
- Si no se lee ningún iCal, la web muestra «Consulta por WhatsApp», nunca un calendario vacío. En `npm run dev` usa `src/scripts/disponibilidad-prueba.ts`; `?calendario=error` prueba el aviso.

## SEO (no perder posicionamiento)
- Mantener las URLs: `/`, `/casa-rural-lleida/`, `/que-hacer-cerca/` (con barra final: `trailingSlash: 'always'`).
- Mantener títulos, descripciones, datos estructurados (LodgingBusiness, reseñas, FAQ, atracciones) y el texto de la web actual (`main`). Se puede ampliar, no quitar.
- `public/images/` conserva las URLs antiguas de imagen (og:image apunta a `/images/hero.jpg`).

## Dirección visual «Bajo los arcos»
- Base técnica de Rodaments Segrià (`~/Desktop/Web Rodaments segria`): Astro estático, GSAP + ScrollTrigger, Lenis.
- Paleta de la casa: cal (fondo), carbón de los capiteles (oscuros), oro del logo como único acento. Terracota y turquesa solo en fotos. Valores y contrastes en `src/styles/tokens.css`.
- Tipografía (cambiada el 2026-10-23, la eligió el usuario): Zilla Slab (titulares, pesos 400-600 normal y cursiva, `@fontsource/zilla-slab`) + Karla (texto, `@fontsource-variable/karla`).
- Forma: fotos en arco, botones píldora, el resto recto. Iconos de Phosphor (`Icono.astro`, grosor light).
- Portada: la casa en un arco → el arco se abre → entras al porche por un arco pequeño → líneas con lo que tiene la casa.
- Siempre: animar solo `transform`, `opacity` y `clip-path`; respetar `prefers-reduced-motion` (versión estática completa). Sin rayas largas (—) en los textos visibles.

## Datos y fotos
- Datos de la casa: `src/data/casa.ts` (fuente única: capacidad, teléfono, WhatsApp, enlaces de reserva, registro HUTL-000401).
- Fotos de la casa: casi todas son de 800 px (limitan la calidad); las de iPhone a 4032 px están en `~/Desktop/Casa Rural/Fotos carlos/01/IMG_28*.JPG`. Al repo entran optimizadas, sin EXIF, en `src/assets/img/casa/`.
- Fotos de «Qué hacer cerca»: Wikimedia Commons con crédito del autor (decidido con el cliente).
- Logo vectorial: `src/assets/brand/logo.svg` (sacado de `~/Desktop/Casa Rural/els_porxos_imatge_corporativa.pdf`).

## Comandos
```bash
npm run dev      # servidor de desarrollo (en la app: preview «web-porxos»)
npm run dev:limpio # igual, rehaciendo la caché de librerías (si tras compilar las animaciones dejan de funcionar: error 504)
npm run build    # web estática en dist/
```
En desarrollo, `?y=1200` en la URL coloca el scroll en esa posición (para revisar secuencias).
