// Movimiento común a toda la web: scroll con inercia (Lenis), sincronizado con GSAP ScrollTrigger,
// y apariciones suaves de los elementos con la clase .aparece al entrar en pantalla.
// Con «reducir movimiento» activado no se hace nada: todo se ve estático y completo.
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Instancia única de Lenis, compartida por los componentes que la necesitan (importan este módulo).
export let lenis: Lenis | null = null;

if (!reducido) {
	gsap.registerPlugin(ScrollTrigger);

	// Un único reloj: Lenis avanza con el ticker de GSAP, así el scroll y las animaciones van a la par.
	lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9, anchors: { offset: -80 } });
	lenis.on('scroll', ScrollTrigger.update);
	const l = lenis;
	gsap.ticker.add((tiempo) => l.raf(tiempo * 1000));
	gsap.ticker.lagSmoothing(0);
	// Solo en desarrollo: acceso desde la consola para revisar las secuencias de scroll
	if (import.meta.env.DEV) {
		(window as Window & { __lenis?: Lenis }).__lenis = lenis;
		// ?y=1200 en la URL coloca la página en esa posición (para capturas de revisión)
		const y = Number(new URLSearchParams(location.search).get('y'));
		if (y) window.addEventListener('load', () => setTimeout(() => l.scrollTo(y, { immediate: true }), 300));
	}

	document.documentElement.classList.add('con-movimiento'); // ya la pone el <head>; por si acaso
	const observador = new IntersectionObserver(
		(entradas) => {
			for (const entrada of entradas) {
				if (!entrada.isIntersecting) continue;
				entrada.target.classList.add('visible');
				observador.unobserve(entrada.target);
			}
		},
		{ rootMargin: '0px 0px -8% 0px' },
	);
	document.querySelectorAll<HTMLElement>('.aparece').forEach((el) => {
		// En rejillas, un pequeño escalonado entre elementos hermanos
		const indice = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
		if (el.tagName === 'LI') el.style.transitionDelay = `${(indice % 3) * 70}ms`;
		observador.observe(el);
	});
}
