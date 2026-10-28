import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero-sec');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setIsScrolled(rect.bottom < 80);
      } else {
        setIsScrolled(window.scrollY > 40);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        id="sitenav"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'nav-solid py-2.5 sm:py-3.5'
            : 'py-3.5 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="relative flex items-center gap-2 z-10 group"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Symmify"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`text-[19px] sm:text-[22px] font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-[#17122e]' : 'text-white'
              }`}
            >
              Symmify<span className="text-[#512ae5]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            className={`hidden md:flex items-center gap-8 text-[15px] font-medium transition-colors duration-300 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
              isScrolled ? 'text-[#4a4460]' : 'text-white/85'
            }`}
          >
            <a
              href="#about"
              className="hover:text-[#512ae5] transition-colors py-1"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-[#512ae5] transition-colors py-1"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-[#512ae5] transition-colors py-1"
            >
              How it works
            </a>
            <a
              href="#work"
              className="hover:text-[#512ae5] transition-colors py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[#512ae5] transition-colors py-1"
            >
              Contact
            </a>
          </div>

          {/* Right CTA button & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenContact}
              className={`group inline-flex items-center gap-2 rounded-full pl-4 pr-1.5 sm:pl-5 sm:pr-2 py-1.5 sm:py-2 text-[13px] sm:text-[15px] font-medium transition-all duration-300 shadow-sm cursor-pointer ${
                isScrolled
                  ? 'bg-[#512ae5] text-white hover:bg-[#3f1ec7]'
                  : 'bg-white text-[#17122e] hover:bg-white/95'
              }`}
            >
              <span className="hidden xs:inline sm:inline">Start a project</span>
              <span className="xs:hidden sm:hidden">Contact</span>
              <span
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 ${
                  isScrolled ? 'bg-white text-[#512ae5]' : 'bg-[#512ae5] text-white'
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="sm:w-3.5 sm:h-3.5"
                >
                  <path
                    d="M3 11L11 3M11 3H4.5M11 3V9.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden flex items-center justify-center h-10 w-10 rounded-full border transition-transform active:scale-95 cursor-pointer ${
                isScrolled
                  ? 'text-[#17122e] border-[#e2dcf3] bg-white'
                  : 'text-white border-white/20 bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* EXPLORE SYMMIFY Mobile Menu Drawer (exact match to user image) */}
        <div
          className={`mobile-menu-shell md:hidden ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-menu-panel bg-[#2563eb] text-white shadow-2xl">
            {/* Top header row */}
            <div className="mb-6 flex items-center justify-between border-b border-white/25 pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                Explore Symmify
              </span>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-full border border-white/30 hover:bg-white/10 px-3.5 py-1 text-xs font-medium text-white transition-colors cursor-pointer"
              >
                Menu
              </button>
            </div>

            {/* Nav links with big bold text, dashed dividers, and arrow icons */}
            <nav className="mobile-menu-links">
              {[
                { label: 'About', href: '#about', index: 0 },
                { label: 'Services', href: '#services', index: 1 },
                { label: 'How it works', href: '#process', index: 2 },
                { label: 'Projects', href: '#work', index: 3 },
                { label: 'Contact', href: '#contact', index: 4 },
              ].map(({ label, href, index }) => (
                <a
                  key={href}
                  href={href}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="mobile-menu-link"
                  style={{ '--menu-index': index }}
                >
                  <span>{label}</span>
                  <span className="mobile-menu-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </nav>

            {/* Bottom Primary CTA Button */}
            <button
              onClick={() => {
                closeMenu();
                onOpenContact();
              }}
              className="mobile-menu-cta mt-7 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white text-[#2563eb] hover:bg-white/95 px-5 py-4 font-bold text-[16px] shadow-lg transition-transform active:scale-98 cursor-pointer"
              style={{ '--menu-index': 5 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#2563eb]"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Let's discuss your project</span>
            </button>

            {/* Subtitle footer */}
            <p className="mt-5 text-center text-xs text-white/80 font-normal">
              Websites and software to help your business move forward.
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
