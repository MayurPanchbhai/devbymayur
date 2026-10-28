import React from 'react';
import HeroShader from './HeroShader';

export default function Hero({ onOpenContact }) {
  const words = [
    { text: "We", delay: "0.12s" },
    { text: "build", delay: "0.20s" },
    { text: "websites", delay: "0.29s" },
    { text: "and", delay: "0.37s" },
    { text: "software", delay: "0.46s" },
    { text: "that", delay: "0.54s" },
    { text: "actually", delay: "0.63s", isSerif: true },
    { text: "grow", delay: "0.71s" },
    { text: "your", delay: "0.80s" },
    { text: "business.", delay: "0.88s" },
  ];

  return (
    <section
      data-screen-label="Hero"
      className="hero-sec relative w-full overflow-hidden text-white flex flex-col justify-between"
      style={{
        background:
          'radial-gradient(130% 120% at 82% 6%, #cbbdf8 0%, #8f75f2 22%, #6440ee 42%, #512ae5 58%, #2c1791 82%, #1a0d63 100%)',
        minHeight: '620px',
        paddingTop: '96px',
        paddingBottom: '48px',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      {/* Aurora glow orbs behind shader */}
      <div
        aria-hidden="true"
        className="hero-aurora absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div
          className="aur aur-a absolute -top-[18%] -left-[12%] w-[70%] h-[70%] rounded-full blur-[60px] sm:blur-[70px] opacity-85"
          style={{
            background:
              'radial-gradient(circle, #8f75f2 0%, rgba(143,117,242,0) 68%)',
          }}
        />
        <div
          className="aur aur-b absolute -bottom-[22%] -right-[14%] w-[78%] h-[78%] rounded-full blur-[70px] sm:blur-[80px] opacity-90"
          style={{
            background:
              'radial-gradient(circle, #512ae5 0%, rgba(81,42,229,0) 68%)',
          }}
        />
        <div
          className="aur aur-c absolute top-[12%] right-[4%] w-[52%] h-[52%] rounded-full blur-[60px] sm:blur-[72px] opacity-60"
          style={{
            background:
              'radial-gradient(circle, #d6cbfe 0%, rgba(214,203,254,0) 68%)',
          }}
        />
      </div>

      {/* Interactive WebGL Shader Canvas */}
      <HeroShader />

      {/* Dark Vignette Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,13,99,0.2) 0%, rgba(26,13,99,0) 35%, rgba(26,13,99,0.45) 100%)',
        }}
      />

      {/* Centered Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-8 sm:py-14 md:py-20">
        <div className="max-w-[860px] text-center mx-auto w-full">
          {/* Subtle Pill Tag */}
          <div
            className="reveal inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs md:text-sm font-medium text-white mb-5 sm:mb-7 shadow-sm"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for new projects &amp; consultations</span>
          </div>

          <h1 className="m-0 text-[30px] xs:text-[36px] sm:text-[48px] md:text-[62px] lg:text-[72px] leading-[1.06] font-semibold tracking-[-0.03em] drop-shadow-sm px-1">
            {words.map((w, index) => (
              <span
                key={index}
                className={`hw mr-1.5 sm:mr-3 inline-block ${
                  w.isSerif ? 'font-serif italic font-normal text-[#f3f0ff]' : ''
                }`}
                style={{ animationDelay: w.delay }}
              >
                {w.text}
              </span>
            ))}
          </h1>

          <div
            className="reveal hero-ctas flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-10 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto"
            style={{ animationDelay: '1.05s' }}
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto group cursor-pointer inline-flex items-center justify-center gap-2.5 h-[48px] sm:h-[52px] bg-white text-[#17122e] rounded-full pl-6 pr-2.5 text-[14px] sm:text-[15px] font-semibold hover:bg-white/95 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
            >
              <span>Start a project</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#512ae5] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center h-[48px] sm:h-[52px] px-6 sm:px-7 rounded-full text-[14px] sm:text-[15px] font-medium bg-white/10 hover:bg-white/15 text-white border border-white/25 transition-all backdrop-blur-sm"
            >
              See our work
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919325646874"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Symmify on WhatsApp"
        className="wa-fab fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="#fff"
          aria-hidden="true"
          className="sm:w-[30px] sm:h-[30px]"
        >
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.24 5.02 4.42 2.95 1.18 2.95.79 3.48.74.53-.05 1.73-.71 1.98-1.39.25-.68.25-1.26.17-1.39-.07-.12-.27-.19-.57-.34Z" />
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.27-1.38a9.87 9.87 0 0 0 4.77 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.08a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.05-.19-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.23-8.23a8.18 8.18 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22Z" />
        </svg>
      </a>
    </section>
  );
}
