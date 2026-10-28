import React from 'react';

const items = [
  { text: 'Websites', dark: true },
  { text: 'Custom Software', dark: false },
  { text: 'Business Automation', dark: true },
  { text: 'UI/UX Design', dark: false },
  { text: 'E-commerce', dark: true },
  { text: 'Web Applications', dark: false },
  { text: 'Cloud & APIs', dark: true },
  { text: 'Digital Stores', dark: false },
  { text: 'Process Optimization', dark: true },
];

export default function Capabilities() {
  const fullList = [...items, ...items];

  return (
    <section
      data-screen-label="Capabilities"
      aria-hidden="true"
      className="marquee-strip my-6 sm:my-10 overflow-hidden border-y border-[#e2dcf3] py-3.5 sm:py-5 select-none w-full"
      style={{
        maskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div className="marquee-track flex items-center">
        {fullList.map((item, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center gap-5 sm:gap-8 pr-5 sm:pr-8 text-[17px] sm:text-[24px] md:text-[30px] font-semibold tracking-[-0.02em] whitespace-nowrap ${
              item.dark ? 'text-[#17122e]' : 'text-[#9a92b5]'
            }`}
          >
            {item.text}
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#c3b5f4] flex-none" />
          </span>
        ))}
      </div>
    </section>
  );
}
