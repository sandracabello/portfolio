/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as createAstro, d as renderHead, a as renderComponent, e as renderSlot } from './astro/server_DBgNKEsm.mjs';
import 'kleur/colors';
/* empty css                         */
import { $ as $$NavBar, a as $$Footer } from './Footer_C9xMy1V5.mjs';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero min-h-screen bg-base-200"> <div class="hero-content text-center z-auto"> <div class="max-w-md flex flex-col gap-6 items-center"> <h1 class="text-5xl font-bold">Hola <span class="color-emoji">(^_^)</span></h1> <p class="text-xl">Me llamo Sandra Cabello, me dedico al diseño y desarrollo de interfaces.</p> <p class="italic">"En el diseño tiene que darse a la vez ambos: solución y belleza."</p> <p> <a class="inline-flex border-b-2 border-transparent hover:border-black border-bottom" href="https://www.linkedin.com/in/sandra-cabello-jurado-0378a7112/" target="_blank">
Contacta conmigo en:
<img src="/public/icon-linkedin.svg"> </a> </p> <a href="/#projects" class="btn btn-primary w-fit m-0">Mis Proyectos</a> </div> </div> </section>`;
}, "/Users/sandra/Dev/PORTFOLIO/portfolio/src/componentes/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const data = Astro2.props;
  const { url, item } = data;
  const { title, description, poster } = item.frontmatter;
  const pathImg = `src/pages/${url.replace("content", "")}${poster}`;
  return renderTemplate`${maybeRenderHead()}<article class="text-center items-center flex flex-col gap-8"> <h2 class="font-semibold uppercase">${title}</h2> <img class="drop-shadow-2xl -z-10"${addAttribute(pathImg, "src")} width="852" height="503"> <div class="flex flex-col items-center text-left w-full"> <p class="w-4/5">${description}</p> <a class="btn btn-primary w-fit mt-6"${addAttribute(url, "href")}>Saber más sobre ${title}</a> </div> </article>`;
}, "/Users/sandra/Dev/PORTFOLIO/portfolio/src/componentes/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$LayoutHome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutHome;
  const { pageTitle, items } = Astro2.props;
  return renderTemplate`<html lang="es" data-theme="lofi"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderComponent($$result, "Header", $$Header, {})} <section id="projects" class="cards m-6 flex flex-col gap-44 mt-16 mb-16"> ${items.map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "url": item.url, "item": item })}`)} </section> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/sandra/Dev/PORTFOLIO/portfolio/src/layouts/LayoutHome.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home";
  const projects = await Astro2.glob(/* #__PURE__ */ Object.assign({"./projects/project-1/content.md": () => import('./content_1B8-uUM6.mjs'),"./projects/project-2/content.md": () => import('./content_8nnx_F2B.mjs'),"./projects/project-3/content.md": () => import('./content_Du0a-4nt.mjs'),"./projects/project-4/content.md": () => import('./content_DTRy1ujK.mjs'),"./projects/project-5/content.md": () => import('./content_DjCTlJ7F.mjs'),"./projects/project-6/content.md": () => import('./content_m75IxRGp.mjs'),"./projects/project-7/content.md": () => import('./content_CZtZcuSp.mjs'),"./projects/project-8/content.md": () => import('./content_DgbCl8Oa.mjs')}), () => "../pages/projects/**/*.md");
  return renderTemplate`${renderComponent($$result, "LayoutHome", $$LayoutHome, { "pageTitle": pageTitle, "items": projects })}`;
}, "/Users/sandra/Dev/PORTFOLIO/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/sandra/Dev/PORTFOLIO/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
