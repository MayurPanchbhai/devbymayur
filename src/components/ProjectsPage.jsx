/** @format */

import React from "react";
import { ArrowLeft } from "lucide-react";
import Projects from "./Projects";

// Add projects for the full projects page here. This list is separate from
// the homepage projects in src/data/projects.js.
const projectsPageList = [
  // Example:
  {
    title: "Jewellery 1",
    image: "/projects/symmifyjewellery.vercel.app_dfd.png",
    imageAlt: "Screenshot of Jewellery 1",
    category: "E-commerce",
    description:
      "React storefront for a jewellery shop with product listings, product detail pages and a mobile-first layout.",
    customerDescription:
      "Helps shoppers browse jewellery easily, see each piece clearly and order from their phone.",
    link: "https://symmifyjewellery.vercel.app/", // replace with your live link
  },
  {
    title: "Jewellery 2",
    image: "/projects/fdjfdf.png", // replace with your screenshot path
    imageAlt: "Screenshot of Jewellery 2",
    category: "E-commerce",
    description:
      "Responsive jewellery showcase website built around collections, the shop's story and a simple enquiry flow.",
    customerDescription:
      "Helps visitors discover the shop's collections and contact the owner quickly to ask about or buy a piece.",
    link: "https://symmifyjewellery2.vercel.app/", // replace with your live link
  },
];

export default function ProjectsPage({ themeColors }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: themeColors.accentBlue }}>
          <ArrowLeft className="h-4 w-4" /> Back to home
        </a>
      </div>
      <Projects
        themeColors={themeColors}
        projectList={projectsPageList}
        showAll
        customerView
      />
    </>
  );
}
