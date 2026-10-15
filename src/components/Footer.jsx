import React from 'react';
import { Code2, ArrowUpRight } from 'lucide-react';

export default function Footer({ themeColors }) {
  return (
    <footer className="border-t py-12" style={{ backgroundColor: themeColors.bgPrimary, borderColor: themeColors.border }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: themeColors.accentBlue }}>M</span>
              <span className="text-lg font-bold" style={{ color: themeColors.textMain }}>Mayur.dev</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>
              Websites, custom software and 3D web experiences designed and built to help your business move forward.
            </p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: themeColors.accentBlue }}>
              Discuss a project <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold" style={{ color: themeColors.textMain }}>Explore</h3>
            <nav className="mt-4 flex flex-col items-start gap-3 text-sm" style={{ color: themeColors.textMuted }}>
              <a href="#about" className="hover:opacity-75">About</a>
              <a href="#services" className="hover:opacity-75">Services</a>
              <a href="#projects" className="hover:opacity-75">Projects</a>
              <a href="#contact" className="hover:opacity-75">Contact</a>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold" style={{ color: themeColors.textMain }}>Our services</h3>
            <nav className="mt-4 flex flex-col items-start gap-3 text-sm" style={{ color: themeColors.textMuted }}>
              <a href="#services" className="hover:opacity-75">Business websites</a>
              <a href="#services" className="hover:opacity-75">Custom software</a>
              <a href="#services" className="hover:opacity-75">Online stores & booking</a>
              <a href="#contact" className="hover:opacity-75">Request a consultation</a>
            </nav>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left" style={{ borderColor: themeColors.border, color: themeColors.textMuted }}>
          <span>(c) {new Date().getFullYear()} Mayur Panchbhai. All rights reserved.</span>
          <span className="inline-flex items-center gap-1"><Code2 className="w-3.5 h-3.5" /> Thoughtfully designed for the web.</span>
        </div>
      </div>
    </footer>
  );
}
