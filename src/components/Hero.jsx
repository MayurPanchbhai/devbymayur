/** @format */

import React from "react";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function Hero({ themeColors }) {
  const handleWhatsApp = () => {
    const phone = "919325646874";
    const message = encodeURIComponent(
      "Hi Mayur, I visited your portfolio website and want to discuss a project.",
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
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
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium mb-6"
          style={{
            backgroundColor: `${themeColors.accentBlue}15`,
            borderColor: `${themeColors.accentBlue}40`,
            color: themeColors.accentBlue,
          }}>
          <Sparkles className="w-4 h-4" />
          <span>Digital solutions for growing businesses</span>
        </div>

        <h1
          className="hero-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight"
          style={{ color: themeColors.textMain }}>
          Need a better way to{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${themeColors.accentBlue}, ${themeColors.accentPurple})`,
            }}>
            grow your business?
          </span>
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto font-normal"
          style={{ color: themeColors.textMuted }}>
          We build professional websites and practical software that help you
          reach customers, simplify daily work and move your business forward.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex w-full items-center justify-center space-x-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            style={{
              backgroundImage: `linear-gradient(to right, ${themeColors.accentBlue}, ${themeColors.accentPurple})`,
            }}>
            <span>Tell Us About Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleWhatsApp}
            className="flex w-full items-center justify-center space-x-2 rounded-full border px-8 py-4 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
            style={{
              backgroundColor: themeColors.bgSecondary,
              borderColor: themeColors.border,
              color: themeColors.textMain,
            }}>
            <MessageCircle
              className="w-5 h-5"
              style={{ color: themeColors.accentBlue }}
            />
            <span>Chat About Your Business</span>
          </button>
        </div>

        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto  pt-10"
          style={{ borderColor: themeColors.border }}>
          <div
            className="hero-benefit  text-center rounded-2xl px-2 py-3 sm:px-4 sm:py-5"
            tabIndex="0"
            style={{
              "--hover-tint": `${themeColors.accentBlue}10`,
              "--process-accent": themeColors.accentBlue,
              "--process-glow": themeColors.borderGlow,
            }}>
            <div
              className="text-xl sm:text-3xl font-bold"
              style={{ color: themeColors.textMain }}>
              Websites
            </div>
            <div
              className="text-xs sm:text-sm mt-1"
              style={{ color: themeColors.textMuted }}>
              Made for your customers
            </div>
          </div>
          <div
            className="hero-benefit text-center rounded-2xl px-2 py-3 sm:px-4 sm:py-5"
            tabIndex="0"
            style={{ "--hover-tint": `${themeColors.accentBlue}10` }}>
            <div
              className="text-xl sm:text-3xl font-bold"
              style={{ color: themeColors.textMain }}>
              Software
            </div>
            <div
              className="text-xs sm:text-sm mt-1"
              style={{ color: themeColors.textMuted }}>
              Built around your needs
            </div>
          </div>
          <div
            className="hero-benefit text-center rounded-2xl px-2 py-3 sm:px-4 sm:py-5"
            tabIndex="0"
            style={{ "--hover-tint": `${themeColors.accentBlue}10` }}>
            <div
              className="text-xl sm:text-3xl font-bold"
              style={{ color: themeColors.textMain }}>
              Business-first
            </div>
            <div
              className="text-xs sm:text-sm mt-1"
              style={{ color: themeColors.textMuted }}>
              Focused on real problems
            </div>
          </div>
          <div
            className="hero-benefit text-center rounded-2xl px-2 py-3 sm:px-4 sm:py-5"
            tabIndex="0"
            style={{ "--hover-tint": `${themeColors.accentBlue}10` }}>
            <div
              className="text-xl sm:text-3xl font-bold"
              style={{ color: themeColors.textMain }}>
              Personal
            </div>
            <div
              className="text-xs sm:text-sm mt-1"
              style={{ color: themeColors.textMuted }}>
              Clear, direct communication
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
