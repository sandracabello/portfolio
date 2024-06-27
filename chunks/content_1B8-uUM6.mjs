/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DBgNKEsm.mjs';
import 'kleur/colors';
import { $ as $$LayoutProject } from './LayoutProject_Ev62Ptzn.mjs';

const html = "<h1 id=\"proyecto-prototipo-de-la-web-para-la-agrupación-fotográfica-antequerana\">Proyecto: Prototipo de la Web para la Agrupación Fotográfica Antequerana</h1>\n<p>Este proyecto consiste en la creación de un prototipo utilizando Figma para el desarrollo de la página web de la Agrupación Fotográfica Antequerana.</p>\n<p>El prototipo abarca varias secciones clave, proporcionando una visión integral y detallada de la estructura y el diseño del sitio web. Las secciones incluidas son:</p>\n<ul>\n<li><strong>Home</strong>: La página de inicio presenta una introducción a la agrupación, destacando noticias, eventos y actividades recientes.</li>\n<li><strong>Listado de Exposiciones</strong>: Una sección dedicada a mostrar un catálogo de exposiciones fotográficas organizadas por la agrupación, con imágenes destacadas y descripciones breves.</li>\n<li><strong>Detalle de Exposición</strong>: Cada exposición cuenta con una página específica que proporciona información detallada sobre la misma, incluyendo una galería de fotos, la biografía del fotógrafo y detalles del evento.</li>\n<li><strong>Página de Contacto</strong>: Un espacio donde los visitantes pueden encontrar información de contacto, formularios para consultas y un mapa interactivo con la ubicación de la agrupación.</li>\n</ul>\n<p>El prototipo está diseñado para ofrecer una navegación intuitiva y una experiencia visual atractiva, alineándose con los valores y la estética de la Agrupación Fotográfica Antequerana.</p>\n<h2 id=\"home\">HOME</h2>\n<p><img src=\"/src/pages/projects/project-1/home.jpg\" alt=\"Página principal\"></p>\n<h2 id=\"lista-de-exposicines\">LISTA DE EXPOSICINES</h2>\n<p><img src=\"/src/pages/projects/project-1/expositions.jpg\" alt=\"Lista de exposiciones\"></p>\n<h2 id=\"detalle-exposición\">DETALLE EXPOSICIÓN</h2>\n<p><img src=\"/src/pages/projects/project-1/details.jpg\" alt=\"Detalle de una exposición\"></p>";

				const frontmatter = {"layout":"../../../layouts/LayoutProject.astro","title":"Prototipo Web AFA","description":"Este proyecto consiste en la creación de un prototipo utilizando Figma para el desarrollo de la página web de la Agrupación Fotográfica Antequerana.","poster":"poster.jpg"};
				const file = "/Users/sandra/Dev/PORTFOLIO/portfolio/src/pages/projects/project-1/content.md";
				const url = "/projects/project-1/content";
				function rawContent() {
					return "\n\n# Proyecto: Prototipo de la Web para la Agrupación Fotográfica Antequerana\n\nEste proyecto consiste en la creación de un prototipo utilizando Figma para el desarrollo de la página web de la Agrupación Fotográfica Antequerana.\n\nEl prototipo abarca varias secciones clave, proporcionando una visión integral y detallada de la estructura y el diseño del sitio web. Las secciones incluidas son:\n\n- **Home**: La página de inicio presenta una introducción a la agrupación, destacando noticias, eventos y actividades recientes.\n- **Listado de Exposiciones**: Una sección dedicada a mostrar un catálogo de exposiciones fotográficas organizadas por la agrupación, con imágenes destacadas y descripciones breves.\n- **Detalle de Exposición**: Cada exposición cuenta con una página específica que proporciona información detallada sobre la misma, incluyendo una galería de fotos, la biografía del fotógrafo y detalles del evento.\n- **Página de Contacto**: Un espacio donde los visitantes pueden encontrar información de contacto, formularios para consultas y un mapa interactivo con la ubicación de la agrupación.\n\nEl prototipo está diseñado para ofrecer una navegación intuitiva y una experiencia visual atractiva, alineándose con los valores y la estética de la Agrupación Fotográfica Antequerana.\n\n## HOME\n![Página principal](/src/pages/projects/project-1/home.jpg)\n\n## LISTA DE EXPOSICINES\n![Lista de exposiciones](/src/pages/projects/project-1/expositions.jpg)\n\n## DETALLE EXPOSICIÓN\n![Detalle de una exposición](/src/pages/projects/project-1/details.jpg)\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"proyecto-prototipo-de-la-web-para-la-agrupación-fotográfica-antequerana","text":"Proyecto: Prototipo de la Web para la Agrupación Fotográfica Antequerana"},{"depth":2,"slug":"home","text":"HOME"},{"depth":2,"slug":"lista-de-exposicines","text":"LISTA DE EXPOSICINES"},{"depth":2,"slug":"detalle-exposición","text":"DETALLE EXPOSICIÓN"}];
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
