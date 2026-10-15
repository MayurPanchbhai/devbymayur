import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';

export default function Navbar({ themeColors }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = (serviceName = "General Inquiry") => {
    const phone = "919000000000";
    const message = encodeURIComponent(`Hi, I'm interested in your services regarding ${serviceName}. Let's connect!`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <nav 
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: `${themeColors.bgPrimary}F2`, borderColor: themeColors.border }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-2 group">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
              style={{ background: `linear-gradient(to top right, ${themeColors.accentBlue}, ${themeColors.accentPurple})` }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span 
              className="text-xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${themeColors.accentBlue}, ${themeColors.accentPurple})` }}
            >
              Mayur.dev
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium" style={{ color: themeColors.textMuted }}>
            <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
            <a href="#devices" className="hover:opacity-80 transition-opacity">For every screen</a>
            <a href="#projects" className="hover:opacity-80 transition-opacity">Projects</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleWhatsApp("Navbar Direct Inquiry")}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white font-medium shadow-lg transform hover:-translate-y-0.5 transition-all"
              style={{ backgroundColor: themeColors.accentBlue }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss a project</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none" style={{ color: themeColors.textMain }}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-b px-4 pt-2 pb-6 space-y-3" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2" style={{ color: themeColors.textMuted }}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2" style={{ color: themeColors.textMuted }}>Services</a>
          <a href="#devices" onClick={() => setIsOpen(false)} className="block py-2" style={{ color: themeColors.textMuted }}>Showcase</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block py-2" style={{ color: themeColors.textMuted }}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2" style={{ color: themeColors.textMuted }}>Contact</a>
          <button
            onClick={() => handleWhatsApp("Mobile Menu Inquiry")}
            className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-white font-medium"
            style={{ backgroundColor: themeColors.accentBlue }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss a project</span>
          </button>
        </div>
      )}
    </nav>
  );
}
