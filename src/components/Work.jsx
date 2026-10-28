import React, { useRef, useState } from 'react';

// Only Symmify's actual projects
const myProjects = [
  {
    id: 'symmify-jewellery-1',
    category: 'Luxury E-Commerce · Store',
    title: 'Symmify Fine Jewellery',
    desc: 'React storefront for a luxury jewellery brand featuring high-resolution collection showcases, mobile-first product detail pages, and seamless inquiry flow.',
    tags: ['E-Commerce', 'React', 'Tailwind CSS', 'Mobile First'],
    image: '/projects/symmifyjewellery.vercel.app_dfd.png',
    link: 'https://symmifyjewellery.vercel.app/',
  },
  {
    id: 'symmify-jewellery-2',
    category: 'E-Commerce · Collection',
    title: 'Symmify Jewellery Showcase',
    desc: 'Responsive jewellery showcase website built around seasonal collections, brand storytelling, and a friction-free purchase enquiry flow.',
    tags: ['E-Commerce', 'Responsive Design', 'Brand Story'],
    image: '/projects/fdjfdf.png',
    link: 'https://symmifyjewellery2.vercel.app/',
  },
  {
    id: 'bloxhive',
    category: 'Digital Marketplace · Gaming',
    title: 'Blox Hive Marketplace',
    desc: 'An online gaming character store where players can browse, buy in-game characters and digital products with fast automated delivery.',
    tags: ['Digital Store', 'Gaming Assets', 'Web Platform'],
    image: '/projects/bloxhive.png',
    link: '',
  },
  {
    id: 'manufacturing-inventory',
    category: 'Manufacturing Software · Operations',
    title: 'Manufacturing Inventory System',
    desc: 'An end-to-end inventory management system for manufacturers to track raw materials, monitor stock thresholds, and keep production organized.',
    tags: ['Operations Software', 'Inventory Tracking', 'React'],
    image: '/projects/manufacturing-inventory.png',
    link: '',
  },
  {
    id: 'job-automation',
    category: 'Business Automation · Workflow',
    title: 'Outreach & Application Automator',
    desc: 'A business productivity automation tool engineered to make repetitive email outreach and multi-stage application workflows faster and easier to manage.',
    tags: ['Workflow Automation', 'Email Engine', 'Productivity'],
    image: '/projects/job-automation.png',
    link: '',
  },
  {
    id: 'personal-brand',
    category: 'Creative Web · Portfolio',
    title: 'Personal Brand Experience',
    desc: 'High-impact personal branding platform engineered with modern motion design, smooth micro-interactions, and conversion-centered messaging.',
    tags: ['Creative Web', 'UI/UX Design', 'Motion'],
    image: '/projects/personal-brand.png',
    link: '',
  },
];

export default function Work({ onOpenContact }) {
  const [isPaused, setIsPaused] = useState(false);

  const renderCard = (proj, key) => (
    <div
      key={key}
      className="work-card card-hov flex-none w-[84vw] sm:w-[440px] md:w-[520px] lg:w-[560px] max-w-[560px] bg-white border border-[#e6e0f6] rounded-[20px] sm:rounded-[22px] p-3 sm:p-4 grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-3 sm:gap-4 items-stretch shadow-sm select-none"
    >
      {/* Project Image Preview */}
      <div className="relative w-full h-[190px] sm:h-[220px] md:h-auto md:min-h-[290px] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-[#eee8fb] border border-[#e6e0f6]/60">
        <img
          src={proj.image}
          alt={proj.title}
          className="work-shot absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col p-2 sm:p-3 md:p-4 justify-between">
        <div>
          <span className="text-[12px] sm:text-[13px] font-semibold tracking-wide text-[#7b7494] uppercase">
            {proj.category}
          </span>
          <h3 className="work-title mt-1.5 sm:mt-2 mb-2 sm:mb-2.5 text-[18px] sm:text-[22px] md:text-[24px] font-bold tracking-[-0.02em] text-[#17122e] leading-snug">
            {proj.title}
          </h3>
          <p className="m-0 text-[13px] sm:text-[14px] leading-[1.5] text-[#4a4460]">
            {proj.desc}
          </p>

          {/* Tags */}
          <div className="flex gap-1.5 sm:gap-2 flex-wrap mt-3 sm:mt-4">
            {proj.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] sm:text-[12px] font-medium text-[#512ae5] bg-[#efeafd] rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View Link / Action */}
        <div className="pt-4 sm:pt-6 mt-auto">
          {proj.link ? (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-[#512ae5] hover:text-[#3f1ec7] transition-colors"
            >
              <span>Visit live website</span>
              <span className="arrow-move w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d9d0f2] inline-flex items-center justify-center bg-white group-hover:bg-[#efeafd]">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
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
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-[#512ae5] hover:text-[#3f1ec7] transition-colors cursor-pointer"
            >
              <span>Case study &amp; details</span>
              <span className="arrow-move w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d9d0f2] inline-flex items-center justify-center bg-white group-hover:bg-[#efeafd]">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
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
      className="sec-pad py-10 sm:py-16 px-4 sm:px-6 md:px-8 w-full max-w-[1300px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#512ae5] bg-[#efeafd] px-3 py-1 rounded-full">
            Our Work
          </span>
          <h2
            data-reveal
            className="mt-2.5 m-0 max-w-[820px] text-[26px] sm:text-[34px] md:text-[42px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#17122e]"
          >
            A few projects we're{' '}
            <span className="font-serif italic font-normal text-[#512ae5]">
              proud of.
            </span>
          </h2>
        </div>

        {/* Hover to pause info / indicator */}
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
        className="overflow-hidden py-3"
        style={{
          maskImage:
            'linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)',
        }}
      >
        <div
          className="work-track flex gap-4 sm:gap-5 w-max"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {/* First set of projects */}
          {myProjects.map((proj, idx) =>
            renderCard(proj, `symmify-work-a-${idx}`)
          )}
          {/* Second set for continuous infinite loop */}
          {myProjects.map((proj, idx) =>
            renderCard(proj, `symmify-work-b-${idx}`)
          )}
        </div>
      </div>

      {/* Call to action button */}
      <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 sm:mt-12">
        <button
          onClick={onOpenContact}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#17122e] hover:bg-[#2c1791] text-white rounded-full pl-6 pr-2.5 py-2.5 text-[14px] sm:text-[15px] font-medium transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
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
