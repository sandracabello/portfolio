import { c as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, a as renderComponent, e as renderSlot, f as createAstro } from './astro/server_DBgNKEsm.mjs';
import 'kleur/colors';
/* empty css                         */
import { $ as $$NavBar, a as $$Footer } from './Footer_C9xMy1V5.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$LayoutProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutProject;
  const pageTitle = "Proyectos";
  return renderTemplate`<html lang="es" data-theme="lofi" data-astro-cid-vh7gexkn> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-vh7gexkn> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-vh7gexkn": true })} <section class="markdown w-full md:w-5/6 m-auto" data-astro-cid-vh7gexkn> ${renderSlot($$result, $$slots["default"])} </section> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-vh7gexkn": true })} </body></html>`;
}, "/Users/sandra/Dev/PORTFOLIO/portfolio/src/layouts/LayoutProject.astro", void 0);

export { $$LayoutProject as $ };
