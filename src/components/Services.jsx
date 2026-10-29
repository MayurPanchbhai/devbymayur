/** @format */

import React from "react";

const services = [
  {
    num: "01",
    title: "Business Websites & E-Commerce",
    desc: "High-converting marketing sites, stores, and headless web builds engineered to turn visitors into customers.",
  },
  {
    num: "02",
    title: "Custom Software & Web Apps",
    desc: "Tailored SaaS dashboards, internal tools, and database systems built around your specific workflow.",
  },

  {
    num: "04",
    title: "UI/UX & Design Systems",
    desc: "Modern, intuitive interfaces crafted for clarity, brand credibility, and frictionless conversions.",
  },
  {
    num: "03",
    title: "Business Automation & Workflows",
    desc: "Automated outreach, data pipelines, and tool integrations that eliminate manual repetitive tasks.",
  },
];

export default function Services({ onOpenContact }) {
  return (
    <section
      id="services"
      data-screen-label="Services"
      className="sec-pad py-10 sm:py-14 px-4 sm:px-6 md:px-8 max-w-[1340px] mx-auto w-full">
      <div className="mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#512ae5] bg-[#efeafd] px-3 py-1 rounded-full">
          Capabilities
        </span>
        <h2
          data-reveal
          className="mt-2.5 m-0 max-w-[820px] text-[26px] sm:text-[34px] md:text-[42px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#17122e]">
          What we do, and do{" "}
          <span className="font-serif italic font-normal text-[#512ae5]">
            well.
          </span>
        </h2>
      </div>

      <div
        id="services-grid"
        className="mt-4 sm:mt-8 border-t border-[#e2dcf3] divide-y divide-[#e2dcf3]">
        {services.map((svc) => (
          <div
            key={svc.num}
            data-reveal
            onClick={onOpenContact}
            className="svc-row group relative grid grid-cols-[34px_1fr] md:grid-cols-[56px_1.1fr_1fr] gap-3 sm:gap-6 items-center py-5 sm:py-7 px-2 sm:px-4 cursor-pointer rounded-xl transition-colors hover:bg-white">
            <span className="text-[13px] sm:text-[15px] font-bold text-[#9a92b5]">
              {svc.num}
            </span>
            <h3 className="m-0 text-[17px] sm:text-[22px] md:text-[26px] font-bold tracking-[-0.015em] text-[#17122e] group-hover:text-[#512ae5] transition-colors leading-snug">
              {svc.title}
            </h3>
            <p className="col-start-2 md:col-start-3 m-0 text-[13px] sm:text-[15px] leading-[1.55] text-[#5b5573] mt-1 md:mt-0">
              {svc.desc}
            </p>

            {/* Hover arrow button */}
            <span
              className="svc-arrow hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-3 w-9 h-9 rounded-full bg-[#512ae5] items-center justify-center transition-all duration-300 shadow-md"
              aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 11L11 3M11 3H4.5M11 3V9.5"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
