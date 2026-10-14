import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer({ themeColors }) {
  return (
    <footer className="border-t py-12" style={{ backgroundColor: themeColors.bgPrimary, borderColor: '#1F2937' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: themeColors.accentBlue }}>M</div>
            <span className="text-lg font-bold" style={{ color: themeColors.textMain }}>Mayur.dev</span>
          </div>

          <div className="text-xs sm:text-sm text-center" style={{ color: themeColors.textMuted }}>
            © {new Date().getFullYear()} Mayur Panchbhai. All rights reserved. Built with React & Tailwind CSS.
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-xl border text-xs font-medium" style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937', color: themeColors.textMain }}>
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-xl border text-xs font-medium" style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937', color: themeColors.textMain }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
