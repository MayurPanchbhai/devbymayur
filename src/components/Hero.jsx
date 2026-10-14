import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export default function Hero({ themeColors }) {
  const handleWhatsApp = () => {
    const phone = "919000000000";
    const message = encodeURIComponent("Hi Mayur, I visited your portfolio website and want to discuss a project.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none opacity-30"
        style={{ backgroundColor: themeColors.accentBlue }}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] blur-[120px] rounded-full pointer-events-none opacity-20"
        style={{ backgroundColor: themeColors.accentPurple }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div 
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium mb-6 animate-float"
          style={{ backgroundColor: `${themeColors.accentBlue}15`, borderColor: `${themeColors.accentBlue}40`, color: themeColors.accentBlue }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Full-Stack Engineer & Pro Video Editor</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight" style={{ color: themeColors.textMain }}>
          Crafting Scalable <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${themeColors.accentBlue}, ${themeColors.accentPurple})` }}>Digital Solutions</span> & Visual Stories
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto font-normal" style={{ color: themeColors.textMuted }}>
          Building high-performance web applications with MERN stack, crafting immersive motion graphics, and delivering professional digital experiences.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 group"
            style={{ backgroundImage: `linear-gradient(to right, ${themeColors.accentBlue}, ${themeColors.accentPurple})` }}
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border hover:border-emerald-500/50 text-gray-200 hover:text-emerald-400 font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
            style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Connect on WhatsApp</span>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t pt-10" style={{ borderColor: '#1F2937' }}>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: themeColors.textMain }}>Full-Stack</div>
            <div className="text-xs sm:text-sm mt-1" style={{ color: themeColors.textMuted }}>MERN & JavaScript</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: themeColors.textMain }}>Pro Editor</div>
            <div className="text-xs sm:text-sm mt-1" style={{ color: themeColors.textMuted }}>Shorts & Motion Graphics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: themeColors.textMain }}>Scalable</div>
            <div className="text-xs sm:text-sm mt-1" style={{ color: themeColors.textMuted }}>Enterprise Web Architectures</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: themeColors.textMain }}>24/7 Support</div>
            <div className="text-xs sm:text-sm mt-1" style={{ color: themeColors.textMuted }}>Direct WhatsApp Access</div>
          </div>
        </div>
      </div>
    </div>
  );
}
