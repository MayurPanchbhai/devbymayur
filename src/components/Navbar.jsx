/** @format */

import React, { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

export default function Navbar({ themeColors }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = (serviceName = "General Inquiry") => {
    const phone = "9325646874";
    const message = encodeURIComponent(
      `Hi, I'm interested in your services regarding ${serviceName}. Let's connect!`,
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        backgroundColor: `${themeColors.bgPrimary}F2`,
        borderColor: themeColors.border,
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between gap-4">
          <a href="#" className="flex items-center group" aria-label="Symmify home">
            <img
              src="/logo.png"
              alt="Symmify"
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
            />
            <span
              className="ml-2 text-lg font-semibold tracking-tight"
              style={{ color: themeColors.textMain }}>
              Symmify
            </span>
          </a>

          <div
            className="hidden lg:flex items-center gap-1 rounded-full border p-1.5 text-sm font-medium"
            style={{
              backgroundColor: themeColors.bgSecondary,
              borderColor: themeColors.border,
            }}>
            <a
              href="#about"
              className="rounded-full px-4 py-2 transition-colors hover:opacity-70"
              style={{ color: themeColors.textMuted }}>
              About
            </a>
            <a
              href="#services"
              className="rounded-full px-4 py-2 transition-colors hover:opacity-70"
              style={{ color: themeColors.textMuted }}>
              Services
            </a>
            <a
              href="#devices"
              className="rounded-full px-4 py-2 transition-colors hover:opacity-70"
              style={{ color: themeColors.textMuted }}>
              For every screen
            </a>
            <a
              href="#projects"
              className="rounded-full px-4 py-2 transition-colors hover:opacity-70"
              style={{ color: themeColors.textMuted }}>
              Projects
            </a>
          </div>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleWhatsApp("Navbar Direct Inquiry")}
              className="group flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: themeColors.accentBlue,
                boxShadow: `0 8px 24px -12px ${themeColors.borderGlow}`,
              }}>
              <span>Discuss your project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: themeColors.accentBlue }}>
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform active:scale-95"
              style={{
                color: themeColors.textMain,
                borderColor: themeColors.border,
                backgroundColor: themeColors.bgSecondary,
              }}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu-shell lg:hidden ${isOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!isOpen}>
        <div
          className="mobile-menu-panel"
          style={{ backgroundColor: themeColors.accentBlue }}>
          <div className="mb-8 flex items-center justify-between border-b border-white/25 pb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Explore Symmify
            </span>
            <span className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80">
              Menu
            </span>
          </div>
          <nav className="mobile-menu-links">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["How it works", "#how-to-start"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href], index) => (
              <a
                key={href}
                href={href}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className="mobile-menu-link"
                style={{ color: "#FFFFFF", "--menu-index": index }}>
                <span>{label}</span>
                <span className="mobile-menu-arrow">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setIsOpen(false);
              handleWhatsApp("Mobile Menu Inquiry");
            }}
            className="mobile-menu-cta mt-8 flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 font-semibold"
            style={{
              backgroundColor: themeColors.bgPrimary,
              color: themeColors.accentBlue,
              "--menu-index": 5,
            }}>
            <MessageCircle className="h-5 w-5" />
            Let’s discuss your project
          </button>
          <p className="mt-6 text-center text-xs text-white/75">
            Websites and software to help your business move forward.
          </p>
        </div>
      </div>
    </nav>
  );
}
