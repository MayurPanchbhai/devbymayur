/** @format */

import React, { useRef, useState } from "react";

// Only Symmify's actual projects
// CHANGED: shorter categories and descriptions, and 2 tags per project (less content)
const myProjects = [
  {
    id: "job-automation",
    category: "Automation · Workflow",
    title: "Outreach & Application Automator",
    desc: "A tool that makes email outreach and application follow-ups faster.",
    tags: ["Automation", "Productivity"],
    image: "/projects/OutreachFlow Automation Dashboard.png",
    mobileImage: "",
    link: "",
  },
  {
    id: "symmify-jewellery-2",
    category: "E-commerce · Showcase",
    title: "Symmify Jewellery Showcase",
    desc: "A jewellery showcase site with seasonal collections and a simple enquiry flow.",
    tags: ["E-commerce", "Responsive"],
    image:
      "/projects/Gold Crystal Leaf Bracelet - Adjustable Dainty Gift Jewelry.jfif", // laptop / desktop image (square crop works best)
    mobileImage: "", // phone image (wide crop works best)
    link: "https://symmifyjewellery2.vercel.app/",
  },
  {
    id: "bloxhive",
    category: "Marketplace · Gaming",
    title: "Blox Hive Marketplace",
    desc: "An online store for gaming characters and digital products with fast delivery.",
    tags: ["Digital store", "Web platform"],
    image: "/projects/b_make_this_img_make_s.webp",
    mobileImage: "",
    link: "",
  },
  {
    id: "manufacturing-inventory",
    category: "Software · Inventory",
    title: "Manufacturing Inventory System",
    desc: "Inventory tracking for manufacturers, from raw materials to stock alerts.",
    tags: ["Operations", "React"],
    image: "/projects/manufacturing-inventory-lp.webp",
    mobileImage: "",
    link: "",
  },

  // {
  //   id: "personal-brand",
  //   category: "Portfolio · Creative",
  //   title: "Personal Brand Experience",
  //   desc: "A personal brand site with smooth motion and a clear call to action.",
  //   tags: ["Creative web", "Motion"],
  //   image: "/projects/personal-brand.png",
  //   mobileImage: "/projects/personal-brand-mobile.png",
  //   link: "",
  // },
  {
    id: "symmify-jewellery-1",
    category: "E-commerce · Store",
    title: "Symmify Fine Jewellery",
    desc: "A React storefront for a luxury jewellery brand with mobile-first product pages.",
    tags: ["E-commerce", "React"],
    image: "/projects/b_generate_high_qulity.webp",
    mobileImage: "",
    link: "https://symmifyjewellery.vercel.app/",
  },
];

export default function Work({ onOpenContact }) {
  const [isPaused, setIsPaused] = useState(false);
  const CAROUSEL_SECONDS = 85;

  const renderCard = (proj, key) => (
    <div
      key={key}
      // REFINED: Adjusted width classes for a more balanced look relative to screen width
      className="work-card card-hov flex-none w-[85vw] sm:w-[450px] md:w-[580px] lg:w-[660px] max-w-[660px] bg-white border border-[#e6e0f6] rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 sm:gap-6 items-center shadow-sm select-none">
      {/* Project Image Preview */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-auto md:aspect-[1/1.08] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#eee8fb] border border-[#e6e0f6]/60">
        <picture>
          {proj.mobileImage && (
            <source media="(max-width: 767px)" srcSet={proj.mobileImage} />
          )}
          <img
            src={proj.image}
            alt={proj.title}
            className="work-shot absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              const sources = img.parentElement.querySelectorAll("source");
              if (sources.length) {
                sources.forEach((s) => s.remove());
              } else {
                img.style.display = "none";
              }
            }}
          />
        </picture>
      </div>

      {/* Project Details */}
      <div className="flex flex-col self-stretch justify-between px-1 pb-1 sm:pr-3 md:py-2">
        <div className="flex flex-col gap-3 sm:gap-4 py-2">
          <span className="text-[13px] sm:text-[14px] text-[#7b7494]">
            {proj.category}
          </span>
          <h3 className="work-title mt-1.5 mb-2 text-[20px] sm:text-[23px] md:text-[26px] font-bold tracking-[-0.02em] text-[#17122e] leading-[1.08]">
            {proj.title}
          </h3>
          <p className="m-0 text-[14px] sm:text-[15px] leading-[1.5] text-[#4a4460]">
            {proj.desc}
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mt-2 sm:mt-3">
            {proj.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[12px] sm:text-[13px] font-medium text-[#512ae5] bg-[#efeafd] rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Link / Action */}
        <div className="pt-3 sm:pt-4 mt-auto">
          {proj.link ? (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[14px] sm:text-[16px] font-medium text-[#512ae5] hover:text-[#3f1ec7] transition-colors">
              <span>View project</span>
              <span className="arrow-move w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#d9d0f2] inline-flex items-center justify-center bg-white group-hover:bg-[#efeafd]">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H4.5M11 3V9.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ) : (
            <button
              type="button"
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 text-[14px] sm:text-[16px] font-medium text-[#512ae5] hover:text-[#3f1ec7] transition-colors cursor-pointer">
              <span>View project</span>
              <span className="arrow-move w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#d9d0f2] inline-flex items-center justify-center bg-white group-hover:bg-[#efeafd]">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H4.5M11 3V9.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="work"
      data-screen-label="Work"
      className="sec-pad py-10 sm:py-16 px-4 sm:px-6 md:px-8 w-full max-w-[1390px] mx-auto overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#512ae5] bg-[#efeafd] px-3 py-1 rounded-full">
            Our Work
          </span>
          <h2
            data-reveal
            className="mt-2.5 m-0 max-w-[820px] text-[26px] sm:text-[34px] md:text-[42px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#17122e]">
            A few projects we're{" "}
            <span className="font-serif italic font-normal text-[#512ae5]">
              proud of.
            </span>
          </h2>
        </div>

        <span className="text-xs sm:text-sm font-medium text-[#7b7494] hidden sm:inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Auto-rotating · Hover to pause
        </span>
      </div>

      {/* Automatic Rotating Rail */}
      <div
        id="work-rail"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="overflow-hidden py-3 px-1"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)",
        }}>
        <div
          // REFINED: Adjusted track gap for better spacing between consecutive cards
          className="work-track flex gap-5 sm:gap-6 w-max"
          style={{
            animationDuration: `${CAROUSEL_SECONDS}s`,
            animationPlayState: isPaused ? "paused" : "running",
          }}>
          {myProjects.map((proj, idx) =>
            renderCard(proj, `symmify-work-a-${idx}`),
          )}
          {myProjects.map((proj, idx) =>
            renderCard(proj, `symmify-work-b-${idx}`),
          )}
        </div>
      </div>

      {/* Call to action button */}
      <div
        data-reveal
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 sm:mt-12">
        <button
          onClick={onOpenContact}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#17122e] hover:bg-[#2c1791] text-white rounded-full pl-6 pr-2.5 py-2.5 text-[14px] sm:text-[15px] font-medium transition-all shadow-md hover:shadow-lg cursor-pointer">
          <span>Discuss your project with us</span>
          <span className="w-8 h-8 rounded-full bg-white text-[#17122e] flex items-center justify-center transition-transform group-hover:rotate-45">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H4.5M11 3V9.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
