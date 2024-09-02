import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BuT32Zm5.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://chelo67.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title><!-- Google Fonts Poppins --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><!-- Google Fonts Lobster --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Tarjetas digitales/astro/astro4/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jose Perez", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="contenedor" data-astro-cid-j7pv25f6> <!-- encabezado ---------------------> <header data-astro-cid-j7pv25f6> <div class="encabezado" id="header" data-astro-cid-j7pv25f6> <div class="perfil" data-astro-cid-j7pv25f6> <div class="foto" data-astro-cid-j7pv25f6> <img src="" alt="foto" id="foto-perfil" data-astro-cid-j7pv25f6> </div> <div class="nombre" data-astro-cid-j7pv25f6> <h1 id="nombre" data-astro-cid-j7pv25f6></h1> <p id="puesto" data-astro-cid-j7pv25f6></p> </div> </div> </div> </header> <!-- Contacto ----------------------------------> <section class="contacto" data-astro-cid-j7pv25f6> <div class="redes" data-astro-cid-j7pv25f6> <div class="phone" id="color_boton" data-astro-cid-j7pv25f6> <a href="" id="link_phone" data-astro-cid-j7pv25f6> <i class="fa-solid fa-phone fa-2x" data-astro-cid-j7pv25f6></i> </a> </div> <div class="email" id="color_boton1" data-astro-cid-j7pv25f6> <a href="" id="link_email" data-astro-cid-j7pv25f6> <i class="fa-solid fa-envelope fa-2x" data-astro-cid-j7pv25f6></i> </a> </div> <div class="web" id="color_boton2" data-astro-cid-j7pv25f6> <a href="" id="link_web" data-astro-cid-j7pv25f6> <i class="fa-solid fa-globe fa-2x" data-astro-cid-j7pv25f6></i> </a> </div> </div> </section> <!-- informacion --------------------> <section class="informacion" data-astro-cid-j7pv25f6> <div class="info" data-astro-cid-j7pv25f6><i class="fa-solid fa-phone fa-2x" data-astro-cid-j7pv25f6></i><p id="phone" data-astro-cid-j7pv25f6></p></div> <div class="info" data-astro-cid-j7pv25f6><i class="fa-solid fa-envelope fa-2x" data-astro-cid-j7pv25f6></i><p id="email" data-astro-cid-j7pv25f6></p></div> <div class="info" data-astro-cid-j7pv25f6><i class="fa-solid fa-globe fa-2x" data-astro-cid-j7pv25f6></i><p id="web" data-astro-cid-j7pv25f6></p></div> </section> <!-- Redes sociales ----------------------> <section class="title-redes" data-astro-cid-j7pv25f6>\nSigueme\n</section> <section class="redes_sociales" data-astro-cid-j7pv25f6> <div class="icon_redes" data-astro-cid-j7pv25f6><a href="" id="link_facebook" data-astro-cid-j7pv25f6><i class="fa-brands fa-facebook fa-2x" data-astro-cid-j7pv25f6></i></a></div> <div class="icon_redes" data-astro-cid-j7pv25f6><a href="https://www.instagram.com/" data-astro-cid-j7pv25f6><i class="fa-brands fa-square-instagram fa-2x" data-astro-cid-j7pv25f6></i></a></div> <div class="icon_redes" data-astro-cid-j7pv25f6><a href="https://www.youtube.com/" data-astro-cid-j7pv25f6><i class="fa-brands fa-youtube fa-2x" data-astro-cid-j7pv25f6></i></a></div> <div class="icon_redes" data-astro-cid-j7pv25f6><a href="https://www.linkedin.com/" data-astro-cid-j7pv25f6><i class="fa-brands fa-linkedin fa-2x" data-astro-cid-j7pv25f6></i></a></div> </section> <!--boton compartir -------------------------------> <section class="botones" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <a href="https://drive.google.com/file/d/1UGj2wB6M4ZWWjBLPaFMFhDNLt9SCmHj4/view?usp=sharing" class="boton_guardar" data-astro-cid-j7pv25f6> <i class="fa-solid fa-download" data-astro-cid-j7pv25f6></i>\nGuardar contacto\n</a> </div> </section> <script src="https://kit.fontawesome.com/dbb4fa1064.js" crossorigin="anonymous"><\/script>  </div> '])), maybeRenderHead()) })}`;
}, "C:/Tarjetas digitales/astro/astro4/src/pages/index.astro", void 0);

const $$file = "C:/Tarjetas digitales/astro/astro4/src/pages/index.astro";
const $$url = "/astro-tarjeta8";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
