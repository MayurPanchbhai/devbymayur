import React, { useEffect, useState } from 'react';
import { Code, Layers3, Globe, Smartphone, MessageCircle, ChevronLeft, ChevronRight, Sparkles, Pause, Play } from 'lucide-react';

export default function Services({ themeColors }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      title: "Business Websites",
      description: "A clear, professional website that builds trust and helps the right customers contact you.",
      icon: <Code className="w-6 h-6" style={{ color: themeColors.accentBlue }} />,
      tag: "Get online"
    },
    {
      title: "Custom Business Software",
      description: "Simple tools and applications that reduce repetitive work and support the way your business runs.",
      icon: <Layers3 className="w-6 h-6" style={{ color: themeColors.accentPurple }} />,
      tag: "Work smarter"
    },
    {
      title: "Online Stores & Booking",
      description: "Let customers browse, book or buy online with a smooth experience on any device.",
      icon: <Globe className="w-6 h-6" style={{ color: themeColors.accentPurple }} />,
      tag: "Serve customers"
    },
    {
      title: "Website Improvements",
      description: "Refresh an outdated website, improve its mobile experience or make key information easier to find.",
      icon: <Smartphone className="w-6 h-6 text-amber-400" />,
      tag: "Improve & grow"
    }
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % services.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [services.length]);

  const handleWhatsApp = (serviceTitle) => {
    const phone = "919000000000";
    const message = encodeURIComponent(`Hi, I'm interested in your service: "${serviceTitle}". Let's discuss details.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 border-y relative" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div 
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold mb-3"
              style={{ backgroundColor: `${themeColors.accentBlue}15`, borderColor: `${themeColors.accentBlue}30`, color: themeColors.accentBlue }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>What I Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: themeColors.textMain }}>
              Professional Services
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={isPaused ? 'Resume service rotation' : 'Pause service rotation'}
              className="p-3 rounded-xl border transition-colors hover:opacity-75"
              style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border, color: themeColors.textMain }}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
            <button aria-label="Previous service"
              onClick={() => {
                setIsPaused(true);
                setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
              }}
              className="p-3 rounded-xl border hover:opacity-75"
              style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border, color: themeColors.textMain }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button aria-label="Next service"
              onClick={() => {
                setIsPaused(true);
                setCurrentIndex((prev) => (prev + 1) % services.length);
              }}
              className="p-3 rounded-xl border hover:opacity-75"
              style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border, color: themeColors.textMain }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className={`service-marquee relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-3 ${isPaused ? 'is-paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
          aria-label="Our services, continuously scrolling"
        >
          <div className="service-marquee-track flex w-max items-stretch">
            {[...services, ...services].map((service, index) => (
              <div key={`${service.title}-${index}`} className="w-[min(88vw,360px)] flex-shrink-0 px-3 sm:w-[400px] lg:w-[440px]">
                <article
                  className="group flex h-full min-h-[260px] flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8"
                  style={{
                    backgroundColor: themeColors.bgSecondary,
                    borderColor: index % services.length === currentIndex ? themeColors.accentBlue : themeColors.border,
                    boxShadow: index % services.length === currentIndex ? `0 10px 35px -15px ${themeColors.borderGlow}` : 'none'
                  }}
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border transition-transform group-hover:scale-110" style={{ borderColor: themeColors.border, backgroundColor: themeColors.bgPrimary }}>
                        {service.icon}
                      </div>
                      <span className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: themeColors.border, backgroundColor: themeColors.bgPrimary, color: themeColors.textMuted }}>{service.tag}</span>
                    </div>
                    <h3 className="text-xl font-bold sm:text-2xl" style={{ color: themeColors.textMain }}>{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: themeColors.textMuted }}>{service.description}</p>
                  </div>
                  <div className="mt-6 border-t pt-5" style={{ borderColor: themeColors.border }}>
                    <button
                      onClick={() => handleWhatsApp(service.title)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:opacity-85"
                      style={{ borderColor: `${themeColors.accentBlue}55`, backgroundColor: `${themeColors.accentBlue}12`, color: themeColors.accentBlue }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Enquire via WhatsApp</span>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-xs" style={{ color: themeColors.textMuted }}>
          {isPaused ? 'Scrolling paused' : 'Services scroll continuously'}
        </p>
      </div>
    </section>
  );
}
