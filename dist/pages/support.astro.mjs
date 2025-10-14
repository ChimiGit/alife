import { c as createComponent, d as renderComponent, b as renderTemplate, m as maybeRenderHead, a as addAttribute, r as renderScript } from '../chunks/astro/server_CyXtAmDb.mjs';
import { $ as $$Layout } from '../chunks/Layout_DwCKskDx.mjs';
export { renderers } from '../renderers.mjs';

const $$Support = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Support Us - ALIFE", "description": "Support ALIFE's mission to advance evolutionary AI research. Help us build the future where humans and artificial life forms co-evolve." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="md:pt-10 md:pb-12 content-stagger" style="font-family: 'Inter', sans-serif;"> <!-- Hero Section --> <section class="sm:pb-16 md:pb-10"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <h2 class="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-64px text-primary mb-4 sm:mb-6 md:mb-8" style="font-family: 'GT Alpina Fine', serif;">Join the Evolution</h2> <p class="text-primary max-w-5xl leading-relaxed font-light text-sm md:text-20px" style="font-family: 'Inter', sans-serif; line-height: 2;">
Support our mission to advance artificial life research and development
</p> </div> </section> <!-- Contact Section --> <section class="py-10 sm:py-10 md:py-10"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div> <!-- Contact Information --> <div class="space-y-8 mb-12"> <!-- Email --> <div class="flex items-start space-x-3 sm:space-x-4"> <div class="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex justify-center"> <img${addAttribute(`${"/"}assets/images/email.svg`, "src")} alt="Email" class="w-4 h-4 sm:w-5 sm:h-5"> </div> <div> <p class="text-sm sm:text-base lg:text-lg text-primary font-normal">example@teamwebflow.com</p> </div> </div> <!-- Location --> <div class="flex items-start space-x-3 sm:space-x-4"> <div class="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex justify-center"> <img${addAttribute(`${"/"}assets/images/property-location.svg`, "src")} alt="Location" class="w-4 h-4 sm:w-5 sm:h-5"> </div> <div> <p class="text-sm sm:text-base lg:text-lg text-primary font-normal">Kyoto HQ, Japan</p> </div> </div> <!-- Phone --> <div class="flex items-start space-x-3 sm:space-x-4"> <div class="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex justify-center"> <img${addAttribute(`${"/"}assets/images/mobile-chat.svg`, "src")} alt="Phone" class="w-4 h-4 sm:w-5 sm:h-5"> </div> <div> <p class="text-sm sm:text-base lg:text-lg text-primary font-normal">+44 123 654 7890</p> </div> </div> </div> <!-- Contact Form --> <div> <form class="space-y-6 max-w-2xl"> <!-- Name Field --> <div> <label for="name" class="block text-sm font-normal text-gray-700 mb-2">
Name <span class="text-red-500">*</span> </label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 text-gray-900 placeholder-gray-500" placeholder="Name"> </div> <!-- Email Field --> <div> <label for="email" class="block text-sm font-normal text-gray-700 mb-2">
Email <span class="text-red-500">*</span> </label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 text-gray-900 placeholder-gray-500" placeholder="Email"> </div> <!-- Message Field --> <div> <label for="message" class="block text-sm font-normal text-gray-700 mb-2">
Message
</label> <textarea id="message" name="message" rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 text-gray-900 placeholder-gray-500 resize-vertical" placeholder="Message"></textarea> </div> <!-- Submit Button --> <div class="flex justify-end"> <button type="submit" class="bg-primary text-white px-6 py-2 rounded-4xl font-normal text-sm hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer">
Submit
</button> </div> </form> </div> </div> </div> </section> </main>  ${renderScript($$result2, "/Users/chimitshering/Desktop/alife-web/src/pages/support.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/chimitshering/Desktop/alife-web/src/pages/support.astro", void 0);
const $$file = "/Users/chimitshering/Desktop/alife-web/src/pages/support.astro";
const $$url = "/support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Support,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
