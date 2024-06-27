/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as createAstro } from './astro/server_DBgNKEsm.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../content/projects/*.md");
  return renderTemplate`${maybeRenderHead()}<ul> ${allProjects.map((project) => renderTemplate`<li>${project.frontmatter.title}</li>`)} </ul>`;
}, "/Users/sandra/Dev/PORTFOLIO/portfolio/src/pages/projects.astro", void 0);

const $$file = "/Users/sandra/Dev/PORTFOLIO/portfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
