/** @format */

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  BarChart3,
  CircleCheck,
  Globe2,
} from "lucide-react";

export default function Hero({ themeColors }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 180);
    return () => window.clearTimeout(timer);
  }, []);
  const handleWhatsApp = () => {
    const phone = "919325646874";
    const message = encodeURIComponent(
      "Hi Mayur, I visited your portfolio website and want to discuss a project.",
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div
      className={`hero-scene relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 ${ready ? "hero-ready" : "hero-loading"}`}
      style={{ "--hero-accent": themeColors.accentBlue }}>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none opacity-30"
        style={{ backgroundColor: themeColors.accentBlue }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] blur-[120px] rounded-full pointer-events-none opacity-20"
        style={{ backgroundColor: themeColors.accentPurple }}
      />

      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-editorial-grid grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-4">
          <div className="hero-copy relative z-10 max-w-xl py-8 lg:py-16">
            <div
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-xs font-medium mb-6"
              style={{
                backgroundColor: `${themeColors.accentBlue}15`,
                borderColor: `${themeColors.accentBlue}40`,
                color: themeColors.accentBlue,
              }}>
              <Sparkles className="w-4 h-4" />
              <span>Digital solutions for growing businesses</span>
            </div>

            <h1
              className="hero-headline text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold tracking-[-0.065em] max-w-4xl leading-[.98]"
              style={{ color: themeColors.textMain }}>
              Grow your business with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${themeColors.accentBlue}, ${themeColors.accentPurple})`,
                }}>
                smart digital solutions.
              </span>
            </h1>

            <p
              className="mt-6 text-base sm:text-lg max-w-md font-normal leading-relaxed"
              style={{ color: themeColors.textMuted }}>
              Websites and practical software designed around your customers,
              your workflow, and the next stage of your growth.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group flex w-full items-center justify-center space-x-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
                style={{
                  backgroundImage: `linear-gradient(to right, ${themeColors.accentBlue}, ${themeColors.accentPurple})`,
                }}>
                <span>Tell Us About Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleWhatsApp}
                className="flex w-full items-center justify-center space-x-2 rounded-full border px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
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
              className="mt-10 flex items-center gap-5 text-xs"
              style={{ color: themeColors.textMuted }}>
              <span className="flex -space-x-2">
                <i
                  className="h-7 w-7 rounded-full border-2"
                  style={{
                    background: themeColors.accentPurple,
                    borderColor: themeColors.bgPrimary,
                  }}
                />
                <i
                  className="h-7 w-7 rounded-full border-2"
                  style={{
                    background: themeColors.accentBlue,
                    borderColor: themeColors.bgPrimary,
                  }}
                />
                <i
                  className="h-7 w-7 rounded-full border-2 bg-white"
                  style={{ borderColor: themeColors.bgPrimary }}
                />
              </span>
              <span>
                <b style={{ color: themeColors.textMain }}>Built with you</b>
                <br />
                From first idea to launch
              </span>
            </div>
          </div>
          <div className="hero-visual relative mx-auto w-full max-w-2xl lg:-mr-10">
            <div
              className="hero-platform"
              style={{
                background: `linear-gradient(145deg, ${themeColors.bgSecondary}, ${themeColors.bgPrimary})`,
                borderColor: themeColors.border,
              }}
            />
            <div
              className="hero-dashboard"
              style={{
                backgroundColor: themeColors.bgSecondary,
                borderColor: themeColors.border,
              }}>
              <div
                className="flex items-center justify-between border-b px-4 py-3"
                style={{ borderColor: themeColors.border }}>
                <span
                  className="flex items-center gap-2 text-xs font-semibold"
                  style={{ color: themeColors.textMain }}>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: themeColors.accentBlue }}
                  />{" "}
                  Your business, online
                </span>
                <span
                  className="text-[10px]"
                  style={{ color: themeColors.textMuted }}>
                  LIVE PREVIEW
                </span>
              </div>
              <div className="grid grid-cols-[1.2fr_.8fr] gap-3 p-3 sm:gap-4 sm:p-5">
                <div
                  className="rounded-2xl p-4 sm:p-5"
                  style={{ backgroundColor: themeColors.bgPrimary }}>
                  <span
                    className="text-[10px] uppercase tracking-[.18em]"
                    style={{ color: themeColors.textMuted }}>
                    Growth overview
                  </span>
                  <div
                    className="mt-4 text-2xl font-semibold"
                    style={{ color: themeColors.textMain }}>
                    More room
                    <br />
                    to grow.
                  </div>
                  <div className="mt-6 flex h-20 items-end gap-2">
                    {[35, 48, 39, 62, 56, 78, 68, 100].map((height, index) => (
                      <i
                        key={index}
                        className="chart-bar flex-1 rounded-t-md"
                        style={{
                          height: `${height}%`,
                          background: `linear-gradient(to top, ${themeColors.accentBlue}, ${themeColors.accentPurple})`,
                          animationDelay: `${index * 70}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="hero-float-card rounded-2xl border p-3 sm:p-4"
                    style={{
                      borderColor: themeColors.border,
                      backgroundColor: themeColors.bgPrimary,
                    }}>
                    <div className="flex items-center justify-between">
                      <Globe2
                        className="h-4 w-4"
                        style={{ color: themeColors.accentBlue }}
                      />
                      <CircleCheck className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <p
                      className="mt-5 text-xs font-semibold"
                      style={{ color: themeColors.textMain }}>
                      Website ready
                    </p>
                    <p
                      className="mt-1 text-[10px]"
                      style={{ color: themeColors.textMuted }}>
                      Made for every screen
                    </p>
                  </div>
                  <div
                    className="hero-float-card rounded-2xl p-3 sm:p-4"
                    style={{
                      background: `linear-gradient(145deg, ${themeColors.accentBlue}, ${themeColors.accentPurple})`,
                    }}>
                    <BarChart3 className="h-4 w-4 text-white" />
                    <p className="mt-4 text-xs font-semibold text-white">
                      Built to move you forward
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hero-float-chip hero-chip-one"
              style={{
                backgroundColor: themeColors.bgSecondary,
                color: themeColors.textMain,
                borderColor: themeColors.border,
              }}>
              <CircleCheck className="h-4 w-4 text-emerald-400" /> Simple.
              Useful. Yours.
            </div>
            <div
              className="hero-float-chip hero-chip-two"
              style={{
                backgroundColor: themeColors.accentBlue,
                color: "#fff",
              }}>
              <Sparkles className="h-4 w-4" /> Made to grow
            </div>
          </div>
        </div>
        {/* <div
          className="mt-16 hidden grid-cols-2 gap-3 sm:grid md:grid-cols-4 sm:gap-6 max-w-4xl mx-auto pt-10"
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
        </div> */}
      </div>
    </div>
  );
}
