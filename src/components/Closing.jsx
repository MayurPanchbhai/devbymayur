import React from 'react';

export default function Closing({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      data-screen-label="Closing"
      className="closing-sec relative rounded-[22px] sm:rounded-[28px] overflow-hidden text-white mt-8 sm:mt-12 mb-6 sm:mb-10 mx-3 sm:mx-auto max-w-[1240px] px-5 sm:px-10 md:px-16 pt-14 sm:pt-20 pb-8 sm:pb-12 shadow-2xl"
      style={{
        background:
          'radial-gradient(120% 140% at 15% 90%, #cbbdf8 0%, #8f75f2 20%, #6440ee 40%, #512ae5 56%, #2c1791 82%, #1a0d63 100%)',
      }}
    >
      <div className="closing-inner flex flex-col items-center text-center gap-8 sm:gap-12 max-w-[840px] mx-auto">
        <h2 className="m-0 text-[32px] xs:text-[38px] sm:text-[56px] md:text-[80px] lg:text-[96px] leading-[1.0] font-semibold tracking-[-0.03em] drop-shadow-sm">
          Let's build{' '}
          <span className="font-serif italic font-normal text-[#f5f1ff]">
            something.
          </span>
        </h2>

        <button
          onClick={onOpenContact}
          className="group inline-flex items-center gap-3 bg-white text-[#17122e] rounded-full pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 text-[15px] sm:text-[16px] font-semibold hover:bg-white/95 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Let's talk</span>
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#512ae5] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H4.5M11 3V9.5"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Footer bar */}
      <div className="footer-row flex flex-col sm:flex-row items-center justify-between mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 text-[12px] sm:text-[13px] text-white/75 gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Symmify"
            className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
          />
          <span className="text-[17px] font-bold text-white tracking-tight">
            Symmify<span className="text-[#cbbdf8]">.</span>
          </span>
        </div>

        <div className="text-center sm:text-left text-white/60 text-xs sm:text-[13px]">
          © {new Date().getFullYear()} Symmify. All rights reserved. · Crafted for high-growth businesses
        </div>

        <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center text-xs sm:text-[13px]">
          <a
            href="https://wa.me/919325646874"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/symmify"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:symmify@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer ml-1"
          >
            <span>Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}
