import React, { useRef } from 'react';

const testimonials = [
  {
    quote:
      'Great job done. Extremely good in what they do and knowledgeable as well. We are very happy with how they do the follow ups and maintenance, no reminder required.',
    author: 'Jitha Sreenath',
    role: 'Founder, DoStudie.com',
    initials: 'JS',
  },
  {
    quote:
      'I recently worked with the incredible team at Symmify for our web application, and it was an absolute delight. Their technical execution and passion for their craft were evident from day one.',
    author: 'Muhammed Suhail',
    role: 'Director, Graphbea',
    initials: 'MS',
  },
  {
    quote:
      'Great job delivering a professional and clean website that aligns perfectly with our business goals and converts high-intent leads.',
    author: 'Jasna Muhammed',
    role: 'CEO, Rapel Solutions',
    initials: 'JM',
  },
  {
    quote:
      'Thank you Symmify — amazing job for our platform and custom tools. Very helpful and always proactive with recommendations and fast support.',
    author: 'Arjun Maniprasad',
    role: 'Founder, Stain Code',
    initials: 'AM',
  },
  {
    quote:
      'I am particularly pleased with the design and responsiveness of the software. Their inclusion of thoughtful details, even beyond the initial scope, has significantly enhanced the product appeal.',
    author: 'Saleem Nadaf',
    role: 'CEO, Skyupex',
    initials: 'SN',
  },
];

export default function Testimonials() {
  const fullList = [...testimonials, ...testimonials];
  const trackRef = useRef(null);

  const scrollBy = (direction) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    });
  };

  return (
    <section
      data-screen-label="Testimonials"
      className="sec-pad py-10 sm:py-16 px-4 sm:px-6 md:px-8 max-w-[1300px] mx-auto w-full overflow-hidden"
    >
      <div className="flex items-end justify-between mb-6 sm:mb-8">
        <div>
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#512ae5] bg-[#efeafd] px-3 py-1 rounded-full">
            Client Feedback
          </span>
          <h2
            data-reveal
            className="mt-2.5 m-0 max-w-[820px] text-[26px] sm:text-[34px] md:text-[42px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#17122e]"
          >
            What it's like to work with{' '}
            <span className="font-serif italic font-normal text-[#512ae5]">
              us.
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-2 self-end">
          <button
            onClick={() => scrollBy('left')}
            aria-label="Previous review"
            className="w-9 h-9 rounded-full border border-[#e0d8f3] bg-white flex items-center justify-center text-[#17122e] hover:bg-[#f7f5ff] transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy('right')}
            aria-label="Next review"
            className="w-9 h-9 rounded-full border border-[#e0d8f3] bg-white flex items-center justify-center text-[#17122e] hover:bg-[#f7f5ff] transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      <div
        id="testi-rail"
        ref={trackRef}
        className="overflow-x-auto py-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="testi-track flex gap-3.5 sm:gap-4 w-max items-stretch">
          {fullList.map((t, idx) => (
            <div
              key={idx}
              className="testi-card card-hov flex-none w-[82vw] xs:w-[290px] sm:w-[350px] md:w-[390px] max-w-[390px] relative overflow-hidden bg-white border border-[#e6e0f6] rounded-[18px] sm:rounded-[20px] p-5 sm:p-7 flex flex-col justify-between shadow-sm select-none"
            >
              {/* Radial glow background on hover */}
              <div
                aria-hidden="true"
                className="card-glow absolute -top-20 -right-16 w-52 h-52 rounded-full pointer-events-none filter blur-xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(81,42,229,0.18) 0%, rgba(81,42,229,0) 70%)',
                }}
              />

              {/* Quote mark */}
              <div
                aria-hidden="true"
                className="font-serif italic text-[42px] sm:text-[54px] leading-[0.7] text-[#d9cffb] mb-3 select-none"
              >
                “
              </div>

              {/* Quote text */}
              <p className="testi-quote relative m-0 text-[13px] sm:text-[15px] md:text-[16px] leading-[1.55] text-[#17122e] tracking-[-0.005em]">
                {t.quote}
              </p>

              {/* Author footer */}
              <div className="flex items-center gap-2.5 sm:gap-3 mt-auto pt-5 sm:pt-7">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#efeafd] text-[#512ae5] flex items-center justify-center text-[12px] sm:text-[14px] font-bold flex-none shadow-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] sm:text-[15px] font-semibold text-[#17122e]">
                    {t.author}
                  </div>
                  <div className="text-[11px] sm:text-[13px] text-[#7b7494]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
