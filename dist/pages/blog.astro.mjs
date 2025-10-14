import { c as createComponent, d as renderComponent, b as renderTemplate, r as renderScript, a as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CyXtAmDb.mjs';
import { $ as $$Layout } from '../chunks/Layout_DwCKskDx.mjs';
import { g as getAllBlogs, a as getBlogsByCategory } from '../chunks/blog_sV6-TrpQ.mjs';
import { g as getCollection } from '../chunks/_astro_content_DaMKlswk.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

async function getBlogCategories() {
  const blogCategories = await getCollection("blog-categories");
  return blogCategories.sort((a, b) => a.data.order - b.data.order);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogs = getAllBlogs();
  const blogCategories = await getBlogCategories();
  const contentData = Object.fromEntries(
    blogCategories.map((category) => [
      category.data.title.toLowerCase().replace(/\s+/g, "-"),
      {
        posts: category.data.title === "Overview" ? allBlogs.map((blog, index) => ({
          id: index + 1,
          title: blog.title,
          excerpt: blog.description,
          category: blog.category,
          slug: blog.slug,
          pubDate: blog.pubDate,
          author: blog.author,
          tags: blog.tags || []
        })) : getBlogsByCategory(category.data.title).map((blog, index) => ({
          id: index + 1,
          title: blog.title,
          excerpt: blog.description,
          category: blog.category,
          slug: blog.slug,
          pubDate: blog.pubDate,
          author: blog.author,
          tags: blog.tags || []
        })),
        categoryInfo: category.data
      }
    ])
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - ALIFE", "description": "Research breakthroughs, upcoming events, and latest news from the frontier of evolutionary AI", "data-astro-cid-ijnerlr2": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main id="blog-content" class="max-w-6xl mx-auto px-4 pb-12 content-stagger" style="font-family: 'Inter', sans-serif;" data-astro-cid-ijnerlr2> <div class="mb-6 sm:mb-8 md:mb-12 md:pt-10" data-astro-cid-ijnerlr2> <h2 class="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-64px text-primary mb-4 sm:mb-6 md:mb-8" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2>Sharing Our Journey</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-primary max-w-3xl font-light" data-astro-cid-ijnerlr2>
Research breakthroughs, upcoming events, and latest news from the frontier of evolutionary AI
</p> </div> <div class="mb-4 sm:mb-6 md:mb-8 tabs-section" data-astro-cid-ijnerlr2> <div class="overflow-x-auto" data-astro-cid-ijnerlr2> <div class="flex min-w-max" data-astro-cid-ijnerlr2> <div class="flex bg-gray-100 rounded-full p-1 font-light text-sm" data-astro-cid-ijnerlr2> `, ' </div> </div> </div> </div> <!-- Separator line --> <div class="border-b border-gray-200 mb-8" data-astro-cid-ijnerlr2></div> <div class="w-full content-section" data-astro-cid-ijnerlr2> <div id="tab-content" class="w-full" data-astro-cid-ijnerlr2> <!-- Dynamic category content --> ', " </div> </div> </main>  <script>\n      document.addEventListener('DOMContentLoaded', () => {\n        // Tab functionality\n        const tabs = document.querySelectorAll('.tab, .active-tab');\n        const tabContents = document.querySelectorAll('.tab-content');\n\n        function showTab(tabName) {\n          // Hide all tab contents\n          tabContents.forEach((content) => {\n            content.classList.add('hidden');\n            // Remove animation classes from cards in hidden tabs\n            const cards = content.querySelectorAll('.blog-card');\n            cards.forEach(card => {\n              card.classList.remove('animate');\n            });\n          });\n\n          // Show selected tab content\n          const selectedContent = document.getElementById(`${tabName}-content`);\n          if (selectedContent) {\n            selectedContent.classList.remove('hidden');\n            \n            // Animate cards in the selected tab\n            const cards = selectedContent.querySelectorAll('.blog-card');\n            cards.forEach((card, index) => {\n              // Reset animation delay for each card\n              card.style.transitionDelay = `${(index + 1) * 0.1}s`;\n              // Trigger animation\n              setTimeout(() => {\n                card.classList.add('animate');\n              }, 50);\n            });\n          }\n        }\n\n        tabs.forEach((tab) => {\n          tab.addEventListener('click', function () {\n            // Update tab styling\n            tabs.forEach((t) => {\n              t.classList.remove('active-tab', 'bg-primary', 'text-white');\n              t.classList.add('tab', 'text-primary');\n            });\n\n            this.classList.remove('tab', 'text-primary');\n            this.classList.add('active-tab', 'bg-primary', 'text-white');\n\n            // Get tab name from ID\n            const tabName = this.id.replace('-tab', '');\n            showTab(tabName);\n          });\n        });\n\n        // Initialize with first tab (Overview)\n        const firstTab = tabs[0];\n        if (firstTab) {\n          const tabName = firstTab.id.replace('-tab', '');\n          showTab(tabName);\n        }\n        \n        // Animate initial cards after page load\n        setTimeout(() => {\n          const firstTabContent = document.querySelector('.tab-content:not(.hidden)');\n          if (firstTabContent) {\n            const cards = firstTabContent.querySelectorAll('.blog-card');\n            cards.forEach((card, index) => {\n              card.style.transitionDelay = `${(index + 1) * 0.1}s`;\n              setTimeout(() => {\n                card.classList.add('animate');\n              }, 50);\n            });\n          }\n        }, 100);\n      });\n    </script>  ", " "], [" ", `<main id="blog-content" class="max-w-6xl mx-auto px-4 pb-12 content-stagger" style="font-family: 'Inter', sans-serif;" data-astro-cid-ijnerlr2> <div class="mb-6 sm:mb-8 md:mb-12 md:pt-10" data-astro-cid-ijnerlr2> <h2 class="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-64px text-primary mb-4 sm:mb-6 md:mb-8" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2>Sharing Our Journey</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-primary max-w-3xl font-light" data-astro-cid-ijnerlr2>
Research breakthroughs, upcoming events, and latest news from the frontier of evolutionary AI
</p> </div> <div class="mb-4 sm:mb-6 md:mb-8 tabs-section" data-astro-cid-ijnerlr2> <div class="overflow-x-auto" data-astro-cid-ijnerlr2> <div class="flex min-w-max" data-astro-cid-ijnerlr2> <div class="flex bg-gray-100 rounded-full p-1 font-light text-sm" data-astro-cid-ijnerlr2> `, ' </div> </div> </div> </div> <!-- Separator line --> <div class="border-b border-gray-200 mb-8" data-astro-cid-ijnerlr2></div> <div class="w-full content-section" data-astro-cid-ijnerlr2> <div id="tab-content" class="w-full" data-astro-cid-ijnerlr2> <!-- Dynamic category content --> ', " </div> </div> </main>  <script>\n      document.addEventListener('DOMContentLoaded', () => {\n        // Tab functionality\n        const tabs = document.querySelectorAll('.tab, .active-tab');\n        const tabContents = document.querySelectorAll('.tab-content');\n\n        function showTab(tabName) {\n          // Hide all tab contents\n          tabContents.forEach((content) => {\n            content.classList.add('hidden');\n            // Remove animation classes from cards in hidden tabs\n            const cards = content.querySelectorAll('.blog-card');\n            cards.forEach(card => {\n              card.classList.remove('animate');\n            });\n          });\n\n          // Show selected tab content\n          const selectedContent = document.getElementById(\\`\\${tabName}-content\\`);\n          if (selectedContent) {\n            selectedContent.classList.remove('hidden');\n            \n            // Animate cards in the selected tab\n            const cards = selectedContent.querySelectorAll('.blog-card');\n            cards.forEach((card, index) => {\n              // Reset animation delay for each card\n              card.style.transitionDelay = \\`\\${(index + 1) * 0.1}s\\`;\n              // Trigger animation\n              setTimeout(() => {\n                card.classList.add('animate');\n              }, 50);\n            });\n          }\n        }\n\n        tabs.forEach((tab) => {\n          tab.addEventListener('click', function () {\n            // Update tab styling\n            tabs.forEach((t) => {\n              t.classList.remove('active-tab', 'bg-primary', 'text-white');\n              t.classList.add('tab', 'text-primary');\n            });\n\n            this.classList.remove('tab', 'text-primary');\n            this.classList.add('active-tab', 'bg-primary', 'text-white');\n\n            // Get tab name from ID\n            const tabName = this.id.replace('-tab', '');\n            showTab(tabName);\n          });\n        });\n\n        // Initialize with first tab (Overview)\n        const firstTab = tabs[0];\n        if (firstTab) {\n          const tabName = firstTab.id.replace('-tab', '');\n          showTab(tabName);\n        }\n        \n        // Animate initial cards after page load\n        setTimeout(() => {\n          const firstTabContent = document.querySelector('.tab-content:not(.hidden)');\n          if (firstTabContent) {\n            const cards = firstTabContent.querySelectorAll('.blog-card');\n            cards.forEach((card, index) => {\n              card.style.transitionDelay = \\`\\${(index + 1) * 0.1}s\\`;\n              setTimeout(() => {\n                card.classList.add('animate');\n              }, 50);\n            });\n          }\n        }, 100);\n      });\n    </script>  ", " "])), maybeRenderHead(), blogCategories.map((category, index) => renderTemplate`<button${addAttribute(`${category.data.title.toLowerCase().replace(/\s+/g, "-")}-tab`, "id")}${addAttribute(`px-6 py-2 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${index === 0 ? "active-tab bg-primary text-white" : "tab text-primary hover:bg-gray-200"}`, "class")} data-astro-cid-ijnerlr2> ${category.data.title} </button>`), blogCategories.map((category, index) => {
    const categoryKey = category.data.title.toLowerCase().replace(/\s+/g, "-");
    const categoryData = contentData[categoryKey];
    return renderTemplate`<div${addAttribute(`${categoryKey}-content`, "id")}${addAttribute(`tab-content ${index === 0 ? "" : "hidden"}`, "class")} data-astro-cid-ijnerlr2> <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> ${categoryData?.posts.map((post) => renderTemplate`<a${addAttribute(`${"/"}blog/${post.slug}`, "href")} class="block group blog-card cursor-pointer" data-astro-cid-ijnerlr2> <div class="mb-6" data-astro-cid-ijnerlr2> <img${addAttribute(`${"/"}assets/images/image.png`, "src")} loading="lazy"${addAttribute(post.title, "alt")} class="w-full aspect-square object-cover " data-astro-cid-ijnerlr2> </div> <div class="space-y-3" data-astro-cid-ijnerlr2> <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug group-hover:text-primary transition-colors duration-200" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2> ${post.title} </h2> <p class="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3 font-light" data-astro-cid-ijnerlr2> ${post.excerpt} </p> <div class="text-xs sm:text-sm md:text-base lg:text-lg font-light" data-astro-cid-ijnerlr2> ${new Date(post.pubDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).replace(/\//g, ".")} by ${post.author} </div> </div> </a>`)} ${(!categoryData?.posts || categoryData.posts.length === 0) && renderTemplate`<div class="col-span-full text-center py-12" data-astro-cid-ijnerlr2> <p class="text-gray-500 text-lg" data-astro-cid-ijnerlr2>No blog posts available yet.</p> <p class="text-gray-400 text-sm mt-2" data-astro-cid-ijnerlr2>Check back soon for updates!</p> </div>`} </div> </div>`;
  }), renderScript($$result2, "/Users/chimitshering/Desktop/alife-web/src/pages/blog.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/Users/chimitshering/Desktop/alife-web/src/pages/blog.astro", void 0);
const $$file = "/Users/chimitshering/Desktop/alife-web/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
