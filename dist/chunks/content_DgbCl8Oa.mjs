/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DBgNKEsm.mjs';
import 'kleur/colors';
import { $ as $$LayoutProject } from './LayoutProject_Ev62Ptzn.mjs';

const html = "<h2 id=\"proyecto-sistema-de-registro-de-jornada-para-trabajadores-de-oficina\">Proyecto: Sistema de Registro de Jornada para Trabajadores de Oficina</h2>\n<p><strong>DESCRIPCIÓN DEL PROYECTO</strong></p>\n<p>Este proyecto se centra en el desarrollo de un sistema integral para el registro de jornada laboral de trabajadores de oficina, tanto en modalidad presencial como en remoto.</p>\n<img class=\"img-h\" src=\"/src/pages/projects/project-8/register3.png\" alt=\"Registro de jornada\">\n<img class=\"img-h\" src=\"/src/pages/projects/project-8/register4.png\" alt=\"Registro de jornada\">\n<img class=\"img-h\" src=\"/src/pages/projects/project-8/register1.png\" alt=\"Registro de jornada\">\n<img class=\"img-h\" src=\"/src/pages/projects/project-8/register2.png\" alt=\"Registro de jornada\">\n<p><strong>COMPONENTES PRINCIPALES</strong></p>\n<ol>\n<li>\n<p><strong>Registro de Entrada y Salida:</strong></p>\n<ul>\n<li>Los empleados pueden registrar sus horas de entrada y salida mediante una interfaz web, garantizando precisión y facilidad de uso.</li>\n</ul>\n</li>\n<li>\n<p><strong>Seguimiento de Horas Trabajadas:</strong></p>\n<ul>\n<li>El sistema calcula automáticamente las horas trabajadas diarias y semanales, proporcionando un resumen accesible para empleados y gerentes.</li>\n</ul>\n</li>\n<li>\n<p><strong>Modalidades de Trabajo:</strong></p>\n<ul>\n<li>Soporte tanto para trabajo presencial como remoto, permitiendo a los empleados registrar su jornada desde cualquier ubicación.</li>\n</ul>\n</li>\n</ol>\n<p><strong>Objetivos del Proyecto:</strong></p>\n<ul>\n<li><strong>Mejorar la Eficiencia</strong>: Automatizar el registro y seguimiento de la jornada laboral, reduciendo errores y ahorrando tiempo.</li>\n<li><strong>Cumplir con Normativas</strong>: Asegurar que la empresa cumple con las leyes y regulaciones sobre el registro de jornada laboral.</li>\n<li><strong>Flexibilidad</strong>: Adaptarse a diferentes modalidades de trabajo, soportando tanto el trabajo en oficina como el remoto.</li>\n</ul>\n<p><strong>IMPACTO ESPERADO</strong></p>\n<p>El sistema de registro de jornada busca optimizar la gestión del tiempo de trabajo, mejorar la transparencia y asegurar el cumplimiento normativo, proporcionando una herramienta esencial tanto para los empleados como para los administradores de la empresa.</p>";

				const frontmatter = {"layout":"../../../layouts/LayoutProject.astro","title":"Sistema de Registro de Jornada para Trabajadores de Oficina","description":"Este proyecto se centra en el desarrollo de un sistema integral para el registro de jornada laboral de trabajadores de oficina, tanto en modalidad presencial como en remoto.","poster":"poster.jpg"};
				const file = "/Users/sandra/Dev/PORTFOLIO/portfolio/src/pages/projects/project-8/content.md";
				const url = "/projects/project-8/content";
				function rawContent() {
					return "\n## Proyecto: Sistema de Registro de Jornada para Trabajadores de Oficina\n\n**DESCRIPCIÓN DEL PROYECTO**\n\nEste proyecto se centra en el desarrollo de un sistema integral para el registro de jornada laboral de trabajadores de oficina, tanto en modalidad presencial como en remoto.\n\n<img class=\"img-h\" src=\"/src/pages/projects/project-8/register3.png\" alt=\"Registro de jornada\" />\n<img class=\"img-h\" src=\"/src/pages/projects/project-8/register4.png\" alt=\"Registro de jornada\" />\n<img class=\"img-h\" src=\"/src/pages/projects/project-8/register1.png\" alt=\"Registro de jornada\" />\n<img class=\"img-h\" src=\"/src/pages/projects/project-8/register2.png\" alt=\"Registro de jornada\" />\n\n\n\n**COMPONENTES PRINCIPALES**\n\n1. **Registro de Entrada y Salida:**\n   - Los empleados pueden registrar sus horas de entrada y salida mediante una interfaz web, garantizando precisión y facilidad de uso.\n\n2. **Seguimiento de Horas Trabajadas:**\n   - El sistema calcula automáticamente las horas trabajadas diarias y semanales, proporcionando un resumen accesible para empleados y gerentes.\n\n3. **Modalidades de Trabajo:**\n   - Soporte tanto para trabajo presencial como remoto, permitiendo a los empleados registrar su jornada desde cualquier ubicación.\n\n**Objetivos del Proyecto:**\n\n- **Mejorar la Eficiencia**: Automatizar el registro y seguimiento de la jornada laboral, reduciendo errores y ahorrando tiempo.\n- **Cumplir con Normativas**: Asegurar que la empresa cumple con las leyes y regulaciones sobre el registro de jornada laboral.\n- **Flexibilidad**: Adaptarse a diferentes modalidades de trabajo, soportando tanto el trabajo en oficina como el remoto.\n\n**IMPACTO ESPERADO**\n\nEl sistema de registro de jornada busca optimizar la gestión del tiempo de trabajo, mejorar la transparencia y asegurar el cumplimiento normativo, proporcionando una herramienta esencial tanto para los empleados como para los administradores de la empresa.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"proyecto-sistema-de-registro-de-jornada-para-trabajadores-de-oficina","text":"Proyecto: Sistema de Registro de Jornada para Trabajadores de Oficina"}];
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
