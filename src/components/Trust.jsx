/** @format */

import React from "react";

/* ===== EDIT HERE: only write things that are true ===== */

// Real projects (add real client names only if you have them)
const projects = [
  "HRM System",
  "Inventory Management System",
  "Blox Hive",
  "Jewellery Store Website",
];

// Three promises in the grid. "title" is the big text, "label" the small text.
const promises = [
  { title: "Listen first", label: "We start with your problem" },
  { title: "Built to fit", label: "Around the way you work" },
  { title: "Clear updates", label: "At every step of the project" },
];

export default function Trust() {
  return (
    <section
      id="about"
      data-screen-label="Trust"
      className="sec-pad pt-12 sm:pt-16 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto">
        <h2
          data-reveal
          className="m-0 max-w-[820px] text-[26px] sm:text-[34px] md:text-[42px] leading-[1.12] font-semibold tracking-[-0.02em] text-[#17122e]">
          Software built around your{" "}
          <span className="text-[#512ae5] font-serif italic font-normal">
            real problems
          </span>
        </h2>

        <p
          data-reveal
          className="mt-3.5 sm:mt-5 max-w-[640px] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#5b5573] px-2">
          We build custom software and websites shaped by hands-on project work
          in HR management, inventory and online stores. Every project starts by
          listening to your problem, then delivering something that works.
        </p>

        <div
          data-reveal
          className="mt-6 sm:mt-8 text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.09em] uppercase font-semibold text-[#7b7494]">
          Recent projects
        </div>

        {/* Project pills */}
        <div
          data-reveal
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-5 max-w-[940px] px-2">
          {projects.map((project, idx) => (
            <span
              key={idx}
              className="client-chip border border-[#e0d8f3] bg-white rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 text-[12px] sm:text-[14px] font-medium text-[#3b3552] shadow-sm hover:border-[#512ae5] hover:text-[#512ae5] hover:bg-[#f7f5ff] transition-all cursor-default">
              {project}
            </span>
          ))}
          <span className="client-chip border border-dashed border-[#cdbff8] bg-transparent rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 text-[12px] sm:text-[14px] text-[#7b7494]">
            more coming
          </span>
        </div>

        {/* 3-column promise grid */}
        <div
          id="trust-stats"
          data-reveal
          className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-[940px] mt-8 sm:mt-12 bg-white border border-[#e6e0f6] rounded-2xl overflow-hidden shadow-sm">
          {promises.map((p, idx) => (
            <div
              key={idx}
              className={`trust-cell py-6 sm:py-8 px-4 sm:px-6 flex flex-col items-center justify-center gap-1.5 ${
                idx < promises.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-[#eee9f8]"
                  : ""
              }`}>
              <div className="text-[24px] sm:text-[26px] md:text-[30px] font-semibold leading-tight tracking-[-0.02em] text-[#512ae5]">
                {p.title}
              </div>
              <div className="text-[11px] sm:text-[12px] tracking-[0.09em] uppercase font-semibold text-[#7b7494]">
                {p.label}
              </div>
            </div>
          ))}
        </div>

        {/* Availability badge */}
        <div data-reveal className="flex justify-center mt-7 sm:mt-9">
          <div className="inline-flex items-center gap-2.5 border border-[#e0d8f3] bg-white rounded-2xl py-2.5 px-5 sm:py-3.5 sm:px-7 shadow-sm hover:shadow-md transition-shadow text-[13px] sm:text-[15px] font-medium text-[#3b3552]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Open for new projects
          </div>
        </div>
      </div>
    </section>
  );
}
