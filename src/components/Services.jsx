import React, { useState } from 'react';
import { Code, Video, Globe, Smartphone, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Services({ themeColors }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Custom web applications built with React, Node.js, and MongoDB.",
      icon: <Code className="w-6 h-6" style={{ color: themeColors.accentBlue }} />,
      tag: "Development"
    },
    {
      title: "Video Editing & Motion Graphics",
      description: "High-retention shorts, reels, and long-form video editing.",
      icon: <Video className="w-6 h-6" style={{ color: themeColors.accentPurple }} />,
      tag: "Media"
    },
    {
      title: "UI/UX & Frontend Design",
      description: "Modern, responsive user interfaces crafted with Tailwind CSS.",
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      tag: "Design"
    },
    {
      title: "Brand Strategy & Growth",
      description: "Comprehensive digital branding and engagement optimisation.",
      icon: <Smartphone className="w-6 h-6 text-amber-400" />,
      tag: "Branding"
    }
  ];

  const handleWhatsApp = (serviceTitle) => {
    const phone = "919000000000";
    const message = encodeURIComponent(`Hi, I'm interested in your service: "${serviceTitle}". Let's discuss details.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 border-y relative" style={{ backgroundColor: `${themeColors.bgSecondary}50`, borderColor: '#1F2937' }}>
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

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)}
              className="p-3 rounded-xl border text-gray-300 hover:text-white"
              style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % services.length)}
              className="p-3 rounded-xl border text-gray-300 hover:text-white"
              style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundColor: themeColors.bgSecondary,
                borderColor: index === currentIndex ? themeColors.accentBlue : '#1F2937',
                boxShadow: index === currentIndex ? `0 10px 25px -5px ${themeColors.borderGlow}` : 'none'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-900 text-gray-400 border border-gray-800">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:opacity-80 transition-opacity" style={{ color: themeColors.textMain }}>
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-900">
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white font-medium text-sm border border-emerald-500/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
