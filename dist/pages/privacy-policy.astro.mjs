import { c as createComponent, d as renderComponent, b as renderTemplate, m as maybeRenderHead, r as renderScript } from '../chunks/astro/server_CyXtAmDb.mjs';
import { $ as $$Layout } from '../chunks/Layout_DwCKskDx.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy - ALIFE", "description": "ALIFE Privacy Policy - Learn how we protect your privacy and handle your data." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 content-stagger" style="font-family: 'Inter', sans-serif;"> <div class="mb-8 sm:mb-12"> <h1 class="text-4xl sm:text-5xl font-medium text-primary mb-4 sm:mb-6" style="font-family: 'GT Alpina Fine', serif;">Privacy Policy</h1> <p class="text-sm sm:text-base text-gray-600">Last updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p> </div> <div class="prose prose-lg max-w-none text-gray-700"> <h2 class="text-2xl font-medium text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">Information We Collect</h2> <p class="mb-6 leading-relaxed">
We collect information you provide directly to us, such as when you contact us, subscribe to our newsletter, or interact with our website.
</p> <h2 class="text-2xl font-medium text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">How We Use Your Information</h2> <p class="mb-6 leading-relaxed">
We use the information we collect to provide, maintain, and improve our services, communicate with you, and conduct research.
</p> <h2 class="text-2xl font-medium text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">Information Sharing</h2> <p class="mb-6 leading-relaxed">
We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
</p> <h2 class="text-2xl font-medium text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">Data Security</h2> <p class="mb-6 leading-relaxed">
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
</p> <h2 class="text-2xl font-medium text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">Contact Us</h2> <p class="mb-6 leading-relaxed">
If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@alife.org" class="text-primary hover:underline">privacy@alife.org</a>.
</p> </div> </main>  ${renderScript($$result2, "/Users/chimitshering/Desktop/alife-web/src/pages/privacy-policy.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/chimitshering/Desktop/alife-web/src/pages/privacy-policy.astro", void 0);

const $$file = "/Users/chimitshering/Desktop/alife-web/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrivacyPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
