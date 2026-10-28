import React from 'react';

const flags = [
  { name: 'United Arab Emirates', src: '/images/flag-uae.png' },
  { name: 'United States', src: '/images/flag-usa.png' },
  { name: 'Saudi Arabia', src: '/images/flag-saudi.png' },
  { name: 'Germany', src: '/images/flag-germany.png' },
  { name: 'United Kingdom', src: '/images/flag-uk.png' },
  { name: 'India', src: '/images/flag-india.png' },
  { name: 'Canada', src: '/images/flag-canada.png' },
  { name: 'Rwanda', src: '/images/flag-rwanda.png' },
];

const clients = [
  'Blox Hive',
  'Symmify Jewellery',
  'Apex Manufacturing',
  'OutreachFlow',
  'Skyupex',
  'Graphbea',
  'DoStudie',
  'Rapel Solutions',
];

export default function Trust() {
  return (
    <section
      id="about"
      data-screen-label="Trust"
      className="sec-pad pt-12 sm:pt-16 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8"
    >
      <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto">
        <h2
          data-reveal
          className="m-0 max-w-[820px] text-[26px] sm:text-[34px] md:text-[42px] leading-[1.12] font-semibold tracking-[-0.02em] text-[#17122e]"
        >
          Brands that trust us with their{' '}
          <span className="text-[#512ae5] font-serif italic font-normal">
            growth
          </span>
        </h2>

        <p
          data-reveal
          className="mt-3.5 sm:mt-5 max-w-[640px] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#5b5573] px-2"
        >
          We've helped businesses scale with custom software, high-converting websites, and automated operations. Not with guesswork, but by building robust digital infrastructure that delivers measurable results.
        </p>

        {/* Overlapping Flags - Fully responsive */}
        <div data-reveal className="flex items-center justify-center mt-6 sm:mt-8 px-2 flex-wrap">
          {flags.map((flag, idx) => (
            <img
              key={idx}
              className="flag-chip w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-full object-cover bg-white border-2 border-white shadow-md -ml-2 sm:-ml-2.5 first:ml-0 cursor-pointer"
              src={flag.src}
              alt={flag.name}
              title={flag.name}
            />
          ))}
        </div>

        <div
          data-reveal
          className="mt-3.5 sm:mt-4 text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.09em] uppercase font-semibold text-[#7b7494]"
        >
          Clients and partners across 8+ countries
        </div>

        {/* Client Tag Pills */}
        <div
          data-reveal
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-7 sm:mt-9 max-w-[940px] px-2"
        >
          {clients.map((client, idx) => (
            <span
              key={idx}
              className="client-chip border border-[#e0d8f3] bg-white rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 text-[12px] sm:text-[14px] font-medium text-[#3b3552] shadow-sm hover:border-[#512ae5] hover:text-[#512ae5] hover:bg-[#f7f5ff] transition-all cursor-default"
            >
              {client}
            </span>
          ))}
          <span className="client-chip border border-dashed border-[#cdbff8] bg-transparent rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 text-[12px] sm:text-[14px] text-[#7b7494]">
            and more
          </span>
        </div>

        {/* 3-Column Stats Grid */}
        <div
          id="trust-stats"
          data-reveal
          className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-[940px] mt-8 sm:mt-12 bg-white border border-[#e6e0f6] rounded-2xl overflow-hidden shadow-sm"
        >
          <div className="trust-cell py-6 sm:py-8 px-4 sm:px-6 flex flex-col items-center justify-center gap-1.5 border-b sm:border-b-0 sm:border-r border-[#eee9f8]">
            <div className="text-[32px] sm:text-[42px] md:text-[48px] font-semibold leading-none tracking-[-0.03em] text-[#512ae5]">
              40+
            </div>
            <div className="text-[11px] sm:text-[12px] tracking-[0.09em] uppercase font-semibold text-[#7b7494]">
              Projects Shipped
            </div>
          </div>

          <div className="trust-cell py-6 sm:py-8 px-4 sm:px-6 flex flex-col items-center justify-center gap-1.5 border-b sm:border-b-0 sm:border-r border-[#eee9f8]">
            <div className="text-[32px] sm:text-[42px] md:text-[48px] font-semibold leading-none tracking-[-0.03em] text-[#512ae5]">
              6+ yrs
            </div>
            <div className="text-[11px] sm:text-[12px] tracking-[0.09em] uppercase font-semibold text-[#7b7494]">
              Engineering Exp
            </div>
          </div>

          <div className="trust-cell py-6 sm:py-8 px-4 sm:px-6 flex flex-col items-center justify-center gap-1.5">
            <div className="text-[32px] sm:text-[42px] md:text-[48px] font-semibold leading-none tracking-[-0.03em] text-[#512ae5]">
              10x
            </div>
            <div className="text-[11px] sm:text-[12px] tracking-[0.09em] uppercase font-semibold text-[#7b7494]">
              Average Client ROI
            </div>
          </div>
        </div>

        {/* Partner Badge */}
        <div data-reveal className="flex justify-center mt-7 sm:mt-9">
          <div className="inline-flex items-center border border-[#e0d8f3] bg-white rounded-2xl py-2.5 px-5 sm:py-3.5 sm:px-7 shadow-sm hover:shadow-md transition-shadow">
            <img
              src="/images/shopify-partner.png"
              alt="Shopify Partners"
              className="h-[24px] sm:h-[30px] w-auto block object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
