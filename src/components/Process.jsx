import React, { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Understand',
    headline: 'We learn your business, your users, and your growth goals.',
    detail:
      'A short, focused discovery phase: what you offer, where customers get stuck, and the highest-leverage digital solution to solve it.',
  },
  {
    num: '02',
    title: 'Build',
    headline: 'Design and development happen together, not in isolated silos.',
    detail:
      'Designers and engineers work on the same live codebase from week one. Interactive prototypes, regular check-ins, zero surprises.',
  },
  {
    num: '03',
    title: 'Launch',
    headline: 'Every project ships production-ready, fast, and stress-tested.',
    detail:
      'Tested across modern browsers and screen sizes, wired with conversion analytics, and handed over with complete control.',
  },
  {
    num: '04',
    title: 'Grow',
    headline: 'We keep optimising after launch, not just walk away.',
    detail:
      'We monitor how real users interact with the system, helping you iterate, maintain, and expand the parts that drive revenue.',
  },
];

export default function Process() {
  const railRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!railRef.current || !fillRef.current) return;
      const rect = railRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const progress = Math.max(
        0,
        Math.min(1, (vh * 0.72 - rect.top) / (rect.height || 1))
      );
      fillRef.current.style.height = `${progress * rect.height}px`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      id="process"
      data-screen-label="How we work"
      className="sec-pad py-10 sm:py-16 px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto w-full"
    >
      <div className="mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#512ae5] bg-[#efeafd] px-3 py-1 rounded-full">
          Workflow
        </span>
        <h2
          data-reveal
          className="mt-2.5 m-0 max-w-[820px] text-[26px] sm:text-[34px] md:text-[42px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#17122e]"
        >
          Four steps, no{' '}
          <span className="font-serif italic font-normal text-[#512ae5]">
            handoffs.
          </span>
        </h2>
      </div>

      <div
        id="process-rail"
        ref={railRef}
        className="relative mt-6 sm:mt-10 border-t border-[#ddd5f0]"
      >
        {/* Background track line */}
        <div
          aria-hidden="true"
          className="absolute left-[11px] sm:left-[17px] top-0 bottom-0 w-[2px] bg-[#e6e0f6]"
        />

        {/* Animated fill line */}
        <div
          id="process-fill"
          ref={fillRef}
          aria-hidden="true"
          className="absolute left-[11px] sm:left-[17px] top-0 w-[2px] h-0 bg-gradient-to-b from-[#8f75f2] to-[#512ae5] rounded-full transition-[height] duration-75"
        />

        {/* Steps */}
        <div className="divide-y divide-[#ddd5f0]">
          {steps.map((step) => (
            <div
              key={step.num}
              data-reveal
              className="step-row group relative grid grid-cols-[38px_1fr] md:grid-cols-[56px_1fr_1.1fr] gap-3.5 sm:gap-6 md:gap-8 items-start py-6 sm:py-8 px-1.5 sm:px-4 rounded-xl transition-colors hover:bg-white/60"
            >
              <span className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] font-bold text-[#9a92b5] pt-0.5 sm:pt-1">
                <span className="step-dot w-2.5 h-2.5 rounded-full bg-[#c3b5f4] flex-none -ml-0.5" />
                {step.num}
              </span>

              <h3 className="m-0 text-[18px] sm:text-[22px] md:text-[26px] font-bold tracking-[-0.015em] text-[#17122e] group-hover:text-[#512ae5] transition-colors leading-snug">
                {step.title}
              </h3>

              <div className="col-start-2 md:col-start-3 mt-1 md:mt-0">
                <p className="m-0 text-[13px] sm:text-[15px] leading-[1.55] font-medium text-[#3b3552]">
                  {step.headline}
                </p>
                <p className="mt-1.5 sm:mt-2.5 m-0 text-[12px] sm:text-[14px] leading-[1.55] text-[#7b7494]">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
