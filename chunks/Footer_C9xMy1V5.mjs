import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_DBgNKEsm.mjs';
import 'kleur/colors';
import 'clsx';

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="navbar bg-base-100 fixed bg-white"> <div class="flex-1"> <div class="dropdown"> <div tabindex="0" role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg> </div> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> <li><a href="/">Home</a></li> <li><a href="/#projects">Proyectos</a></li> </ul> </div> <a class="text-xl font-semibold text-color-base">Sandra Cabello</a> </div> <div class="navbar-center hidden lg:flex"> <ul class="menu menu-horizontal px-1"> <li><a href="/">Home</a></li> <li><a href="/#projects">Proyectos</a></li> </ul> </div> </section>`;
}, "/Users/sandra/Dev/PORTFOLIO/portfolio/src/componentes/NavBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer footer-center p-4 bg-black text-white text-base-content"> <aside> <p>Copyright © 2024 - All right reserved by Sandra Cabello</p> </aside> </footer>`;
}, "/Users/sandra/Dev/PORTFOLIO/portfolio/src/componentes/Footer.astro", void 0);

export { $$NavBar as $, $$Footer as a };
