/** @format */

import React, { useEffect, useRef, useState } from "react";
import {
  Code,
  Layers3,
  Globe,
  Smartphone,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Services({ themeColors }) {
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);

  const stateRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    currentX: 0,
    isPaused: false,
  });

  const services = [
    {
      title: "Business Websites",
      description:
        "A clear, professional website that builds trust and helps the right customers contact you.",
      icon: (
        <Code className="w-6 h-6" style={{ color: themeColors.accentBlue }} />
      ),
      tag: "Get online",
    },
    {
      title: "Custom Business Software",
      description:
        "Simple tools and applications that reduce repetitive work and support the way your business runs.",
      icon: (
        <Layers3
          className="w-6 h-6"
          style={{ color: themeColors.accentPurple }}
        />
      ),
      tag: "Work smarter",
    },
    {
      title: "Online Stores & Booking",
      description:
        "Let customers browse, book or buy online with a smooth experience on any device.",
      icon: (
        <Globe
          className="w-6 h-6"
          style={{ color: themeColors.accentPurple }}
        />
      ),
      tag: "Serve customers",
    },
    {
      title: "Website Improvements",
      description:
        "Refresh an outdated website, improve its mobile experience or make key information easier to find.",
      icon: <Smartphone className="w-6 h-6 text-amber-400" />,
      tag: "Improve & grow",
    },
  ];

  // Smooth JS Animation Loop for Infinite Marquee + Dragging
  useEffect(() => {
    let animationFrameId;
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.8;

    const animate = () => {
      const state = stateRef.current;
      if (!state.isDragging && !state.isPaused) {
        state.currentX -= speed;

        const singleSetWidth = track.scrollWidth / 3;
        if (Math.abs(state.currentX) >= singleSetWidth) {
          state.currentX += singleSetWidth;
        }

        track.style.transform = `translateX(${state.currentX}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleWhatsApp = (serviceTitle) => {
    const phone = "919325646874";
    const message = encodeURIComponent(
      `Hi, I'm interested in your service: "${serviceTitle}". Let's discuss details.`,
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handlePointerDown = (event) => {
    if (event.target.closest("button")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const state = stateRef.current;
    state.isDragging = true;
    state.startX = event.clientX;
    state.scrollLeft = state.currentX;

    if (marqueeRef.current) {
      marqueeRef.current.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event) => {
    const state = stateRef.current;
    if (!state.isDragging || !trackRef.current) return;

    const deltaX = event.clientX - state.startX;
    state.currentX = state.scrollLeft + deltaX;

    const singleSetWidth = trackRef.current.scrollWidth / 3;

    if (state.currentX > 0) {
      state.currentX -= singleSetWidth;
    } else if (Math.abs(state.currentX) >= singleSetWidth * 2) {
      state.currentX += singleSetWidth;
    }

    trackRef.current.style.transform = `translateX(${state.currentX}px)`;
  };

  const handlePointerUp = (event) => {
    const state = stateRef.current;
    if (!state.isDragging) return;
    state.isDragging = false;

    if (marqueeRef.current?.hasPointerCapture(event.pointerId)) {
      marqueeRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      id="services"
      className="process-card process-card-static py-20 border-y relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold mb-3"
              style={{
                backgroundColor: `${themeColors.accentBlue}15`,
                borderColor: `${themeColors.accentBlue}30`,
                color: themeColors.accentBlue,
              }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>What I Offer</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: themeColors.textMain }}>
              Professional Services
            </h2>
          </div>
        </div>
      </div>

      {/* Draggable Marquee Container */}
      <div
        ref={marqueeRef}
        className="relative w-full overflow-hidden py-4 select-none cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => (stateRef.current.isPaused = true)}
        onMouseLeave={() => (stateRef.current.isPaused = false)}>
        <div
          ref={trackRef}
          className="flex w-max gap-6 px-3 will-change-transform">
          {[...services, ...services, ...services].map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="w-[min(88vw,360px)] sm:w-[400px] lg:w-[440px] flex-shrink-0">
              <article
                className="group/card flex h-full min-h-[280px] flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 shadow-sm pointer-events-auto"
                style={{
                  backgroundColor: themeColors.bgSecondary,
                  borderColor: themeColors.border, // Uniform border for all cards
                  boxShadow: "none", // Uniform flat shadow for all cards
                }}>
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl border transition-transform group-hover/card:scale-110"
                      style={{
                        borderColor: themeColors.border,
                        backgroundColor: themeColors.bgPrimary,
                      }}>
                      {service.icon}
                    </div>
                    <span
                      className="rounded-full border px-3 py-1 text-xs font-semibold"
                      style={{
                        borderColor: themeColors.border,
                        backgroundColor: themeColors.bgPrimary,
                        color: themeColors.textMuted,
                      }}>
                      {service.tag}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold sm:text-2xl"
                    style={{ color: themeColors.textMain }}>
                    {service.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed sm:text-base"
                    style={{ color: themeColors.textMuted }}>
                    {service.description}
                  </p>
                </div>
                <div
                  className="mt-6 border-t pt-5"
                  style={{ borderColor: themeColors.border }}>
                  <button
                    onClick={() => handleWhatsApp(service.title)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:opacity-85 cursor-pointer relative z-20 shadow-sm"
                    style={{
                      borderColor: `${themeColors.accentBlue}55`,
                      backgroundColor: `${themeColors.accentBlue}12`,
                      color: themeColors.accentBlue,
                    }}>
                    <MessageCircle className="h-4 w-4" />
                    <span>Enquire via WhatsApp</span>
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
