/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_C-ikqLv9.mjs';
import 'kleur/colors';
import { $ as $$LayoutProject } from './LayoutProject_jBMhx4B3.mjs';

const html = "<h2 id=\"proyecto-plantilla-web-para-hamburguesería\">Proyecto: Plantilla Web para Hamburguesería</h2>\n<p><strong>DESCRIPCIÓN DEL PROYECTO</strong></p>\n<p>La plantilla web para hamburguesería es una página única diseñada para ofrecer una experiencia completa y atractiva a los visitantes, destacando los productos y la identidad de la hamburguesería de manera efectiva.</p>\n<h2 id=\"home-desktop\">HOME DESKTOP</h2>\n<p><img src=\"/src/pages/projects/project-4/pc.png\" alt=\"imagen\"></p>\n<h2 id=\"home-mobile\">HOME MOBILE</h2>\n<p><img src=\"/src/pages/projects/project-4/mobile.png\" alt=\"imagen\"></p>\n<p><strong>COMPONENTES CLAVES</strong></p>\n<ol>\n<li>\n<p><strong>Botón de Contacto Directo:</strong></p>\n<ul>\n<li>Un botón prominente que facilita a los usuarios iniciar una llamada directamente desde sus dispositivos móviles para realizar pedidos o consultas.</li>\n</ul>\n</li>\n<li>\n<p><strong>Sección de Menú Completo:</strong></p>\n<ul>\n<li>Presentación detallada de todos los platos disponibles, incluyendo hamburguesas gourmet, acompañamientos, bebidas y postres. Cada elemento del menú está acompañado por su descripción y precio correspondiente.</li>\n</ul>\n</li>\n<li>\n<p><strong>Quiénes Somos:</strong></p>\n<ul>\n<li>Una sección dedicada a contar la historia y los valores de la hamburguesería, destacando la pasión por la calidad, la frescura de los ingredientes y el compromiso con la satisfacción del cliente.</li>\n</ul>\n</li>\n<li>\n<p><strong>Footer con Información de Contacto:</strong></p>\n<ul>\n<li>Incluye datos de contacto como dirección física, número de teléfono, horarios de atención y enlaces a las redes sociales para una comunicación directa y efectiva.</li>\n</ul>\n</li>\n</ol>\n<p><strong>OBJETIVOS DEL PROYECTO</strong></p>\n<ul>\n<li><strong>Impulsar las Ventas</strong>: Facilitar a los clientes la realización de pedidos mediante un acceso rápido a la función de llamada directa.</li>\n<li><strong>Informar y Atraer</strong>: Proporcionar información clara y atractiva sobre los productos ofrecidos y la historia de la hamburguesería para captar y retener la atención del público.</li>\n<li><strong>Mejorar la Experiencia del Usuario</strong>: Crear una experiencia de navegación intuitiva y agradable que promueva la interacción y fomente la fidelidad de los clientes.</li>\n</ul>\n<p><strong>IMPACTO ESPERADO</strong></p>\n<p>La plantilla web para hamburguesería tiene como objetivo no solo atraer nuevos clientes, sino también mejorar la satisfacción y fidelidad de los existentes al ofrecer un acceso sencillo a la información del menú, detalles de contacto y la historia detrás del negocio. Esto contribuirá a consolidar la marca y fortalecer su presencia en el mercado local.</p>";

				const frontmatter = {"layout":"../../../layouts/LayoutProject.astro","title":"Plantilla Web para Hamburguesería","description":"La plantilla web para hamburguesería es una página única diseñada para ofrecer una experiencia completa y atractiva a los visitantes, destacando los productos y la identidad de la hamburguesería de manera efectiva.","poster":"poster.jpg"};
				const file = "/Users/sandra/Dev/PORTFOLIO/portfolio/src/pages/projects/project-4/content.md";
				const url = "/dist/projects/project-4/content";
				function rawContent() {
					return "\n## Proyecto: Plantilla Web para Hamburguesería\n\n**DESCRIPCIÓN DEL PROYECTO**\n\nLa plantilla web para hamburguesería es una página única diseñada para ofrecer una experiencia completa y atractiva a los visitantes, destacando los productos y la identidad de la hamburguesería de manera efectiva.\n\n## HOME DESKTOP\n![imagen](/src/pages/projects/project-4/pc.png)\n\n## HOME MOBILE\n![imagen](/src/pages/projects/project-4/mobile.png)\n\n**COMPONENTES CLAVES**\n\n1. **Botón de Contacto Directo:**\n   - Un botón prominente que facilita a los usuarios iniciar una llamada directamente desde sus dispositivos móviles para realizar pedidos o consultas.\n\n2. **Sección de Menú Completo:**\n   - Presentación detallada de todos los platos disponibles, incluyendo hamburguesas gourmet, acompañamientos, bebidas y postres. Cada elemento del menú está acompañado por su descripción y precio correspondiente.\n\n3. **Quiénes Somos:**\n   - Una sección dedicada a contar la historia y los valores de la hamburguesería, destacando la pasión por la calidad, la frescura de los ingredientes y el compromiso con la satisfacción del cliente.\n\n4. **Footer con Información de Contacto:**\n   - Incluye datos de contacto como dirección física, número de teléfono, horarios de atención y enlaces a las redes sociales para una comunicación directa y efectiva.\n\n**OBJETIVOS DEL PROYECTO**\n\n- **Impulsar las Ventas**: Facilitar a los clientes la realización de pedidos mediante un acceso rápido a la función de llamada directa.\n- **Informar y Atraer**: Proporcionar información clara y atractiva sobre los productos ofrecidos y la historia de la hamburguesería para captar y retener la atención del público.\n- **Mejorar la Experiencia del Usuario**: Crear una experiencia de navegación intuitiva y agradable que promueva la interacción y fomente la fidelidad de los clientes.\n\n**IMPACTO ESPERADO**\n\nLa plantilla web para hamburguesería tiene como objetivo no solo atraer nuevos clientes, sino también mejorar la satisfacción y fidelidad de los existentes al ofrecer un acceso sencillo a la información del menú, detalles de contacto y la historia detrás del negocio. Esto contribuirá a consolidar la marca y fortalecer su presencia en el mercado local.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"proyecto-plantilla-web-para-hamburguesería","text":"Proyecto: Plantilla Web para Hamburguesería"},{"depth":2,"slug":"home-desktop","text":"HOME DESKTOP"},{"depth":2,"slug":"home-mobile","text":"HOME MOBILE"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$LayoutProject, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
