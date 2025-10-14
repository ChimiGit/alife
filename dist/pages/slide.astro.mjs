import { c as createComponent, f as renderHead, a as addAttribute, b as renderTemplate } from '../chunks/astro/server_CyXtAmDb.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Slide = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-m5tftua6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- <title>Bg 2.4</title> -->${renderHead()}</head> <body data-astro-cid-m5tftua6> <div class="svg-container" data-astro-cid-m5tftua6> <img${addAttribute(`${"/"}assets/images/Bg 2.4.svg`, "src")} alt="Bg 2.4" data-astro-cid-m5tftua6> </div> </body></html>`;
}, "/Users/chimitshering/Desktop/alife-web/src/pages/slide.astro", void 0);
const $$file = "/Users/chimitshering/Desktop/alife-web/src/pages/slide.astro";
const $$url = "/slide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Slide,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
