import { c as createComponent, d as renderComponent, b as renderTemplate, m as maybeRenderHead, r as renderScript, a as addAttribute, u as unescapeHTML } from '../chunks/astro/server_CyXtAmDb.mjs';
import { marked } from 'marked';
import { $ as $$Layout } from '../chunks/Layout_DwCKskDx.mjs';
import { g as getAllJobs } from '../chunks/jobs_DZQca_UY.mjs';
export { renderers } from '../renderers.mjs';

const $$Career = createComponent(async ($$result, $$props, $$slots) => {
  const jobs = await getAllJobs();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Career - ALIFE", "description": "Join ALIFE and be part of pioneering evolutionary AI research. Explore career opportunities at the intersection of nature and computation." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="career-content" class="md:pt-10 md:pb-12 content-stagger"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <!-- Hero Section --> <section class="mb-8 sm:mb-12 md:mb-16"> <h2 class="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-64px text-primary mb-4 sm:mb-6 md:mb-8" style="font-family: 'GT Alpina Fine', serif;">
Where Brilliant<br>
Minds Explore Together
</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-primary leading-relaxed font-light" style="font-family: 'Inter', sans-serif;">
We believe in systems that explore without predetermined goals, discovering paths no one planned.
</p> </section> <!-- Philosophy Section --> <section class="mb-12 sm:mb-16 md:mb-20"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"> <div> <!-- Mobile dots for Symbiosis (1 dot) --> <div class="flex justify-start mb-2 sm:hidden"> <div class="w-2 h-2 bg-primary rounded-full"></div> </div> <h3 class="text-base sm:text-lg font-medium text-primary mb-2 sm:mb-3 md:mb-4" style="font-family: 'GT Alpina Fine', serif;">Symbiosis:</h3> <p class="text-sm sm:text-base text-primary leading-relaxed font-light" style="font-family: 'Inter', sans-serif;">
Rather than replacement,<br>
we seek harmonious<br>
coexistence between<br>
human and artificial<br>
intelligence
</p> </div> <div> <!-- Mobile dots for Emergence (2 dots) --> <div class="flex justify-start gap-1 mb-2 sm:hidden"> <div class="w-2 h-2 bg-primary rounded-full"></div> <div class="w-2 h-2 bg-primary rounded-full"></div> </div> <h3 class="text-base sm:text-lg font-medium text-primary mb-2 sm:mb-3 md:mb-4" style="font-family: 'GT Alpina Fine', serif;">Emergence:</h3> <p class="text-sm sm:text-base text-primary leading-relaxed font-light" style="font-family: 'Inter', sans-serif;">
We believe in systems<br>
that explore without<br>
predetermined goals,<br>
discovering paths<br>
no one planned
</p> </div> <div> <!-- Mobile dots for Evolution (3 dots) --> <div class="flex justify-start gap-1 mb-2 sm:hidden"> <div class="w-2 h-2 bg-primary rounded-full"></div> <div class="w-2 h-2 bg-primary rounded-full"></div> <div class="w-2 h-2 bg-primary rounded-full"></div> </div> <h3 class="text-base sm:text-lg font-medium text-primary mb-2 sm:mb-3 md:mb-4" style="font-family: 'GT Alpina Fine', serif;">Evolution:</h3> <p class="text-sm sm:text-base text-primary leading-relaxed font-light" style="font-family: 'Inter', sans-serif;">
Our approach mimics<br>
nature's most creative<br>
force—continuous<br>
adaptation and<br>
innovation
</p> </div> <div> <!-- Mobile dots for Discovery (4 dots) --> <div class="flex justify-start gap-1 mb-2 sm:hidden"> <div class="w-2 h-2 bg-primary rounded-full"></div> <div class="w-2 h-2 bg-primary rounded-full"></div> <div class="w-2 h-2 bg-primary rounded-full"></div> <div class="w-2 h-2 bg-primary rounded-full"></div> </div> <h3 class="text-base sm:text-lg font-medium text-primary mb-2 sm:mb-3 md:mb-4" style="font-family: 'GT Alpina Fine', serif;">Discovery:</h3> <p class="text-sm sm:text-base text-primary leading-relaxed font-light" style="font-family: 'Inter', sans-serif;">
We pioneer new approaches<br>
to AI that don't just<br>
optimize, but discover,<br>
surprise, and continuously<br>
evolve
</p> </div> </div> </section> <!-- Divider Line --> <div class="border-b border-primary mb-8 sm:mb-12 md:mb-16"></div> <!-- Jobs Section --> <section> <div class="space-y-8"> ${jobs && jobs.length > 0 ? jobs.map((job, index) => {
    const htmlContent = job.content ? String(marked(job.content || "")) : "";
    return renderTemplate`<div class="border-b border-primary pb-8 last:border-b-0"> <div class="flex justify-between items-start mb-6"> <div class="flex-1"> <h3 class="text-2xl font-medium text-primary mb-2" style="font-family: 'GT Alpina Fine', serif;"> ${job.title} </h3> <p class="text-primary text-16px font-medium mb-3">${job.location}</p> <p class="text-primary text-base font-light mb-4"> ${job.title === "Research Head" ? "Taming data into insights, and insights into impact." : "Bridging business needs with smart solutions."} </p> </div> <div class="flex flex-col items-end space-y-3 ml-8"> <button type="button" class="bg-primary text-white px-6 py-2 rounded-full font-medium text-xs hover:bg-primary transition-colors duration-200 inline-block job-details-toggle cursor-pointer"${addAttribute(`#job-details-${index}`, "data-target")}>
View Details
</button> <div class="text-right text-sm"> <p class="text-primary"> ${new Date(job.deadline).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })} </p> <p class="text-primary"> ${job.type} </p> </div> </div> </div> <!-- Job Details Accordion --> <div${addAttribute(`job-details-${index}`, "id")} class="job-details-content hidden"> <!-- Separator --> <hr class="border-primary mb-8"> <!-- Job Content from Markdown --> <div class="job-markdown-content mb-12"> <div>${unescapeHTML(
      htmlContent.replace(/<h2>/g, `<h2 style="font-family: 'GT Alpina Fine', sans-serif; color: #2E3192; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; margin-top: 3rem;">`).replace(/<h2 style="font-family: 'Inter', sans-serif; color: #2E3192; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; margin-top: 3rem; font-size: '20px'">About ALife<\/h2>/g, `<h2 style="font-family: 'Inter', sans-serif; color: #2E3192; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; margin-top: 0;">About ALife</h2>`).replace(/<p>/g, `<p style="margin-bottom: 1rem; line-height: 1.7; color: #2E3192; font-family: 'Inter', sans-serif; font-weight: 300;">`).replace(/<ul>/g, '<ul style="margin-bottom: 3rem; padding-left: 0; list-style: none;">').replace(/<li>/g, `<li style="margin-bottom: 0.75rem; color: #2E3192; display: flex; align-items: flex-start; font-family: 'Inter', sans-serif; font-weight: 300;"><span style="width: 8px; height: 8px; background-color: #2E3192; border-radius: 50%; margin-top: 8px; margin-right: 12px; flex-shrink: 0;"></span>`).replace(/<\/li>/g, "</li>")
    )}</div> </div> <!-- Separator --> <hr class="border-primary mb-12"> <!-- Application Form --> <section class="mb-12"> <h3 class="text-40px font-medium text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">
Apply Now.
</h3> <p class="text-primary text-16px mb-8">
Tell us why you'd be a good fit for the ${job.title} role.
</p> <form class="space-y-6"${addAttribute(`job-application-form-${index}`, "id")}> <!-- Name Fields --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label${addAttribute(`firstName-${index}`, "for")} class="block text-sm font-medium text-primary mb-2">First Name</label> <input type="text"${addAttribute(`firstName-${index}`, "id")} name="firstName" placeholder="First Name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required> </div> <div> <label${addAttribute(`lastName-${index}`, "for")} class="block text-sm font-medium text-primary mb-2">Last Name</label> <input type="text"${addAttribute(`lastName-${index}`, "id")} name="lastName" placeholder="Last Name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required> </div> </div> <!-- Email Field --> <div> <label${addAttribute(`email-${index}`, "for")} class="block text-sm font-medium text-primary mb-2">Email</label> <input type="email"${addAttribute(`email-${index}`, "id")} name="email" placeholder="example123@gmail.com" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required> </div> <!-- Phone Field --> <div> <label${addAttribute(`phone-${index}`, "for")} class="block text-sm font-medium text-primary mb-2">Phone</label> <input type="tel"${addAttribute(`phone-${index}`, "id")} name="phone" placeholder="+0 123 456 789" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"> </div> <!-- Resume Upload --> <div> <label${addAttribute(`resume-${index}`, "for")} class="block text-sm font-medium text-primary mb-2">Resume</label> <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors duration-200"> <svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path> </svg> <p class="text-gray-600 mb-2">Upload your resume</p> <p class="text-sm text-gray-500">Resume should be a PDF under 3.5MB</p> <input type="file"${addAttribute(`resume-${index}`, "id")} name="resume" accept=".pdf" class="hidden" required> <button type="button"${addAttribute(`document.getElementById('resume-${index}').click()`, "onclick")} class="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary transition-colors duration-200 cursor-pointer">
Choose File
</button> </div> </div> <!-- Checkboxes --> <div class="space-y-4"> <div class="flex items-start"> <input type="checkbox"${addAttribute(`privacy-${index}`, "id")} name="privacy" class="mt-1 mr-3 text-primary focus:ring-primary" required> <label${addAttribute(`privacy-${index}`, "for")} class="text-sm text-primary font-light">
By submitting my application, I acknowledge that I have read and understand GMC's Job Applicant Privacy Notice.
</label> </div> <div class="flex items-start"> <input type="checkbox"${addAttribute(`accuracy-${index}`, "id")} name="accuracy" class="mt-1 mr-3 text-primary focus:ring-primary" required> <label${addAttribute(`accuracy-${index}`, "for")} class="text-sm text-primary font-light">
I have reviewed and confirmed that all the information provided is accurate and complete.
</label> </div> </div> <!-- Important Note --> <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4"> <p class="text-sm text-primary"> <strong>Important: Please double-check all the information provided above. Ensuring accuracy is crucial, as any errors or omissions may impact the review of your application.</strong> </p> </div> <!-- Submit Button --> <div class="flex justify-end"> <button type="submit" class="bg-primary text-white text-sm px-8 py-3 font-medium hover:bg-primary transition-colors duration-200 cursor-pointer" style="border-radius: 100px;">
Submit Application
</button> </div> </form> </section> </div> </div>`;
  }) : renderTemplate`<div class="text-center text-primary py-8"> <h3 class="text-xl font-medium mb-4">Job Openings Coming Soon</h3> <p>We're currently updating our job listings. Please check back later for new opportunities.</p> </div>`} </div> </section> </div> </main>  ${renderScript($$result2, "/Users/chimitshering/Desktop/alife-web/src/pages/career.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/chimitshering/Desktop/alife-web/src/pages/career.astro", void 0);

const $$file = "/Users/chimitshering/Desktop/alife-web/src/pages/career.astro";
const $$url = "/career";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Career,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
