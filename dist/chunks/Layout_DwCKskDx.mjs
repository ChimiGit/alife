import { e as createAstro, c as createComponent, a as addAttribute, f as renderHead, d as renderComponent, q as renderSlot, b as renderTemplate } from './astro/server_CyXtAmDb.mjs';
import { $ as $$Header } from './Header_D3_ZqHLC.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro = createAstro("https://alife.institute");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "ALIFE - Artificial Life Institute" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(`${"/"}favicon.svg`, "href")}><link rel="icon" type="image/png"${addAttribute(`${"/"}assets/logo/thumbnail-logo.png`, "href")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- SEO Meta Tags --><meta name="description"${addAttribute(description, "content")}><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload"${addAttribute(`${"/"}fonts/gt-alpina-fine/GT-Alpina-Fine-Standard-Medium.woff2`, "href")} as="font" type="font/woff2" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50" data-astro-cid-sckkx6r4> <!-- Noise overlay --> <div class="noise-overlay" data-astro-cid-sckkx6r4></div> <div id="main-content" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "/Users/chimitshering/Desktop/alife-web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
