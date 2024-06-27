/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DBgNKEsm.mjs';
import 'kleur/colors';
import { $ as $$LayoutProject } from './LayoutProject_Ev62Ptzn.mjs';

const html = "<h1 id=\"proyecto-sitio-web-del-ilustre-colegio-de-procuradores-de-antequera\">Proyecto: Sitio Web del Ilustre Colegio de Procuradores de Antequera</h1>\n<p><strong>DESCRIPCIÓN DEL PROYECTO</strong></p>\n<p>El sitio web del Ilustre Colegio de Procuradores de Antequera está diseñado para proporcionar información y servicios a sus miembros y al público en general. Tiene un estilo web clásico para que sea usable y accesible para todo tipo de usuarios.</p>\n<p><a class=\"border-b-2 border-black border-bottom\" href=\"https://www.colegioprocuradoresantequera.es\" target=\"_blank\">Accede a la web</a></p>\n<img class=\"img-h\" src=\"/src/pages/projects/project-6/home.png\" alt=\"Sitio web\">\n<p><strong>COMPONENTES CLAVES</strong></p>\n<ol>\n<li>\n<p><strong>Bienvenida y Rol del Procurador:</strong></p>\n<ul>\n<li>Explicación del rol y la importancia del procurador en el sistema judicial, su historia y evolución.</li>\n</ul>\n</li>\n<li>\n<p><strong>Órganos de Gobierno y Listado de Colegiados:</strong></p>\n<ul>\n<li>Información sobre la estructura organizativa y un acceso al listado de miembros del colegio.</li>\n</ul>\n</li>\n<li>\n<p><strong>Normativa y Legislación:</strong></p>\n<ul>\n<li>Documentos relevantes, incluyendo estatutos, códigos deontológicos y reglamentos.</li>\n</ul>\n</li>\n<li>\n<p><strong>Incorporaciones y Ventanilla Única:</strong></p>\n<ul>\n<li>Información para nuevos colegiados y acceso a trámites electrónicos.</li>\n</ul>\n</li>\n<li>\n<p><strong>Memoria Anual y Recursos:</strong></p>\n<ul>\n<li>Publicaciones anuales y enlaces a recursos adicionales.</li>\n</ul>\n</li>\n</ol>\n<p><strong>OBJETIVOS DEL PROYECTO</strong></p>\n<ul>\n<li><strong>Proporcionar Información</strong>: Facilitar el acceso a la normativa y a los servicios del colegio.</li>\n<li><strong>Soporte a los Colegiados</strong>: Ofrecer herramientas y recursos para los procuradores miembros.</li>\n<li><strong>Transparencia y Accesibilidad</strong>: Mejorar la comunicación y la accesibilidad para todos los usuarios.</li>\n</ul>\n<p><strong>IMPACTO ESPERADO</strong></p>\n<p>El sitio web pretende mejorar la transparencia, eficiencia y accesibilidad de los servicios ofrecidos por el Ilustre Colegio de Procuradores de Antequera, fortaleciendo el apoyo a sus miembros y la información al público.</p>";

				const frontmatter = {"layout":"../../../layouts/LayoutProject.astro","title":"Web para el Illustre Colegio de Procuradores de Antequera","description":"El sitio web del Ilustre Colegio de Procuradores de Antequera está diseñado para proporcionar información y servicios a sus miembros y al público en general.","poster":"poster.jpg"};
				const file = "/Users/sandra/Dev/PORTFOLIO/portfolio/src/pages/projects/project-6/content.md";
				const url = "/projects/project-6/content";
				function rawContent() {
					return "\n# Proyecto: Sitio Web del Ilustre Colegio de Procuradores de Antequera\n\n**DESCRIPCIÓN DEL PROYECTO**\n\nEl sitio web del Ilustre Colegio de Procuradores de Antequera está diseñado para proporcionar información y servicios a sus miembros y al público en general. Tiene un estilo web clásico para que sea usable y accesible para todo tipo de usuarios.\n\n<a class=\"border-b-2 border-black border-bottom\" href=\"https://www.colegioprocuradoresantequera.es\" target=\"_blank\">Accede a la web</a>\n\n<img class=\"img-h\" src=\"/src/pages/projects/project-6/home.png\" alt=\"Sitio web\" />\n\n**COMPONENTES CLAVES**\n\n1. **Bienvenida y Rol del Procurador:**\n   - Explicación del rol y la importancia del procurador en el sistema judicial, su historia y evolución.\n\n2. **Órganos de Gobierno y Listado de Colegiados:**\n   - Información sobre la estructura organizativa y un acceso al listado de miembros del colegio.\n\n3. **Normativa y Legislación:**\n   - Documentos relevantes, incluyendo estatutos, códigos deontológicos y reglamentos.\n\n4. **Incorporaciones y Ventanilla Única:**\n   - Información para nuevos colegiados y acceso a trámites electrónicos.\n\n5. **Memoria Anual y Recursos:**\n   - Publicaciones anuales y enlaces a recursos adicionales.\n\n**OBJETIVOS DEL PROYECTO**\n\n- **Proporcionar Información**: Facilitar el acceso a la normativa y a los servicios del colegio.\n- **Soporte a los Colegiados**: Ofrecer herramientas y recursos para los procuradores miembros.\n- **Transparencia y Accesibilidad**: Mejorar la comunicación y la accesibilidad para todos los usuarios.\n\n**IMPACTO ESPERADO**\n\nEl sitio web pretende mejorar la transparencia, eficiencia y accesibilidad de los servicios ofrecidos por el Ilustre Colegio de Procuradores de Antequera, fortaleciendo el apoyo a sus miembros y la información al público.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"proyecto-sitio-web-del-ilustre-colegio-de-procuradores-de-antequera","text":"Proyecto: Sitio Web del Ilustre Colegio de Procuradores de Antequera"}];
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
