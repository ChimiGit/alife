import { c as createComponent, d as renderComponent, b as renderTemplate, m as maybeRenderHead, r as renderScript } from '../chunks/astro/server_CyXtAmDb.mjs';
import { g as getCollection } from '../chunks/_astro_content_DaMKlswk.mjs';
import { $ as $$Layout } from '../chunks/Layout_DwCKskDx.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Modal, ModalContent, ModalBody } from '@heroui/modal';
import { marked } from 'marked';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroUIProvider as HeroUIProvider$1 } from '@heroui/react';
export { renderers } from '../renderers.mjs';

async function getAllTeamMembers() {
  try {
    const team = await getCollection("team");
    return team.map((member) => ({
      ...member.data,
      slug: member.slug
    }));
  } catch (error) {
    return [];
  }
}

async function getAllSupportCategories() {
  try {
    const supportCategories = await getCollection("support-categories");
    return supportCategories.map((category) => ({
      title: category.data.title,
      slug: category.id.replace(".md", ""),
      // Remove .md extension
      order: category.data.order,
      description: category.data.description,
      content: category.body || ""
    })).sort((a, b) => a.order - b.order);
  } catch (error) {
    return [];
  }
}
async function getAllSupportTeamMembers() {
  try {
    const supportTeam = await getCollection("support-team");
    return supportTeam.map((member) => ({
      name: member.data.name,
      title: member.data.title,
      bio: member.data.bio,
      location: member.data.location,
      image: member.data.image,
      category: member.data.category,
      slug: member.id.replace(".md", ""),
      // Remove .md extension
      order: member.data.order,
      linkedin: member.data.linkedin,
      twitter: member.data.twitter,
      email: member.data.email
    }));
  } catch (error) {
    return [];
  }
}

function TeamMemberCard({
  member,
  onClick
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity duration-200",
      onClick: () => onClick(member),
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-48 mb-3 sm:mb-4 overflow-hidden bg-gray-200 mx-auto sm:mx-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: member.image,
            alt: member.name,
            className: "w-full h-auto object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx(
          "h4",
          {
            className: "text-25px sm:text-lg font-medium text-primary mb-1",
            style: { fontFamily: "'GT Alpina Fine', serif" },
            children: member.name
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-12px sm:text-sm text-primary", children: member.title })
      ]
    }
  );
}

function TeamMemberModal({
  isOpen,
  onClose,
  member
}) {
  if (!member) return null;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    Modal,
    {
      isOpen,
      onClose,
      size: "2xl",
      placement: "center",
      hideCloseButton: true,
      classNames: {
        base: "bg-white border-0 shadow-none rounded-lg max-h-[90vh] overflow-hidden focus:outline-none focus:ring-0 relative",
        body: "py-8 px-8 flex flex-col",
        wrapper: "flex items-center justify-center min-h-screen",
        backdrop: "bg-gray-500 bg-opacity-50 backdrop-blur-md"
      },
      children: /* @__PURE__ */ jsx(ModalContent, { children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.8, y: 20 },
          transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 300,
            damping: 30
          },
          className: "relative",
          children: [
            /* @__PURE__ */ jsx(
              motion.button,
              {
                onClick: onClose,
                className: "absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-light w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10 cursor-pointer",
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.95 },
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.1 },
                children: "×"
              }
            ),
            /* @__PURE__ */ jsxs(ModalBody, { children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: member.image,
                    alt: member.name,
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  "h2",
                  {
                    className: "text-3xl font-medium text-black mb-2",
                    style: { fontFamily: "'GT Alpina Fine', serif" },
                    children: member.name
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6 font-medium", children: member.title })
              ] }),
              member.description && /* @__PURE__ */ jsx("div", { className: "text-gray-700 text-left mb-6 leading-relaxed text-base max-w-2xl mx-auto prose prose-gray overflow-y-auto max-h-[30vh] pr-2", children: /* @__PURE__ */ jsx(
                "div",
                {
                  dangerouslySetInnerHTML: {
                    __html: marked(member.description, {
                      breaks: true,
                      gfm: true
                    })
                  }
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-8 mt-auto", children: [
                member.linkedin && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: member.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-7 h-7",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
                      }
                    )
                  }
                ),
                member.twitter && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: member.twitter,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-7 h-7",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
                      }
                    )
                  }
                ),
                member.email && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `mailto:${member.email}`,
                    className: "text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-7 h-7",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" })
                      }
                    )
                  }
                )
              ] })
            ] })
          ]
        }
      ) })
    }
  ) });
}

function HeroUIProvider({ children }) {
  return /* @__PURE__ */ jsx(HeroUIProvider$1, { children });
}

function TeamSection({ title, members }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  return /* @__PURE__ */ jsxs(HeroUIProvider, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 sm:mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-4xl sm:text-4xl md:text-4xl lg:text-40px font-medium text-primary mb-4 sm:mb-6 md:mb-8",
          style: { fontFamily: "'GT Alpina Fine', serif" },
          children: title
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8", children: members.map((member) => /* @__PURE__ */ jsx(
        TeamMemberCard,
        {
          member,
          onClick: handleMemberClick
        },
        member.slug
      )) })
    ] }),
    /* @__PURE__ */ jsx(
      TeamMemberModal,
      {
        isOpen: isModalOpen,
        onClose: handleCloseModal,
        member: selectedMember
      }
    )
  ] });
}

function SupporterSection({
  title,
  members
}) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  return /* @__PURE__ */ jsxs(HeroUIProvider, { children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8 sm:mb-12 md:mb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-3 sm:px-4 md:px-6", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-4xl sm:text-4xl md:text-4xl lg:text-40px font-medium text-primary mb-4 sm:mb-6 md:mb-8",
          style: { fontFamily: "'GT Alpina Fine', serif" },
          children: title
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8", children: members.map((member) => /* @__PURE__ */ jsx(
        TeamMemberCard,
        {
          member,
          onClick: handleMemberClick
        },
        member.slug
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(
      TeamMemberModal,
      {
        isOpen: isModalOpen,
        onClose: handleCloseModal,
        member: selectedMember
      }
    )
  ] });
}

const $$People = createComponent(async ($$result, $$props, $$slots) => {
  const teamMembers = await getAllTeamMembers();
  const teamCategories = await getCollection("team-categories");
  const sortedCategories = teamCategories.sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  const membersByCategory = sortedCategories.map((category) => {
    const categoryId = category.id.replace(".md", "");
    const members = teamMembers.filter((member) => member.category === categoryId);
    return {
      ...category.data,
      slug: categoryId,
      members
    };
  }).filter((category) => category.members.length > 0);
  const supportTeamMembers = await getAllSupportTeamMembers();
  const supportCategories = await getAllSupportCategories();
  const supportMembersByCategory = supportCategories.map((category) => {
    const members = supportTeamMembers.filter((member) => member.category === category.slug);
    return {
      ...category,
      members
    };
  }).filter((category) => category.members.length > 0);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "People - ALIFE", "description": "Meet the brilliant minds at ALIFE - world-class researchers and innovative engineers exploring the intersection of nature and computation." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="people-content" class="md:pt-10 content-stagger" style="min-height: 100vh;"> <!-- Hero Section --> <section class="mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4 md:px-6"> <div class="max-w-6xl mx-auto px-2 sm:px-4 md:px-6"> <h2 class="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-64px text-primary mb-4 sm:mb-6 md:mb-8" style="font-family: 'GT Alpina Fine', serif;">
Where Brilliant<br>
Minds Explore Together
</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-20px text-primary leading-relaxed mb-8 sm:mb-12 md:mb-20 font-light" style="font-family: 'Inter', sans-serif; line-height: 1.6;">
Discover what happens at the intersection of nature and computation, where we're creating something unprecedented. Our team combines world-class researchers and innovative engineers united by a shared fascination with emergence and open-ended discovery. Here, your expertise contributes to projects that grow organically, surprising even their creators.
</p> </div> </section> <!-- Team Sections --> <section class="mb-8 sm:mb-12 md:mb-20 px-3 sm:px-4 md:px-6"> <div class="max-w-6xl mx-auto px-2 sm:px-4 md:px-6"> ${membersByCategory.map((category) => renderTemplate`${renderComponent($$result2, "TeamSection", TeamSection, { "title": category.title, "members": category.members, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/chimitshering/Desktop/alife-web/src/components/TeamSection.tsx", "client:component-export": "default" })}`)} </div> </section> <!-- Meet our supporters Section --> <div class="w-full py-6 sm:py-8 flex flex-col flex-1" style="background-color: #F5F6E3;"> <div class="max-w-6xl mx-auto px-3 sm:px-4 md:px-6"> <h1 class="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-primary mb-4 sm:mb-6 md:mb-8 leading-tight" style="font-family: 'GT Alpina Fine', serif;">
Meet<br>
our Supporters
</h1> <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-20px text-primary w-full leading-relaxed mb-8 sm:mb-12 font-light" style="font-family: 'Inter', sans-serif; line-height: 1.6;">
Discover what happens at the intersection of nature and computation, where we're creating something unprecedented. Our team combines world-class researchers and innovative engineers united by a shared fascination with emergence and open-ended discovery. Here, your expertise contributes to projects that grow organically, surprising even their creators.
</p> </div> <!-- Dynamic Support Sections --> ${supportMembersByCategory.map((category) => renderTemplate`${renderComponent($$result2, "SupporterSection", SupporterSection, { "title": category.title, "members": category.members, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/chimitshering/Desktop/alife-web/src/components/SupporterSection.tsx", "client:component-export": "default" })}`)} </div> </main>  ${renderScript($$result2, "/Users/chimitshering/Desktop/alife-web/src/pages/people.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/chimitshering/Desktop/alife-web/src/pages/people.astro", void 0);

const $$file = "/Users/chimitshering/Desktop/alife-web/src/pages/people.astro";
const $$url = "/people";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$People,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
