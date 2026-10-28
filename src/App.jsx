/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Capabilities from "./components/Capabilities";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Closing from "./components/Closing";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    document.documentElement.classList.add("js-motion");

    // Scroll reveal observer
    const groups = new Map();
    function reveal(el) {
      if (el.classList.contains("in")) return;
      let delay = 0;
      if (el.hasAttribute("data-stagger")) {
        const i = groups.get(el.parentElement) || 0;
        groups.set(el.parentElement, i + 1);
        delay = Math.min(i, 4) * 90;
      }
      el.style.animationDelay = `${delay}ms`;
      el.classList.add("in");
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const vh = window.innerHeight || 800;
        document.querySelectorAll("[data-reveal]:not(.in)").forEach((node) => {
          const r = node.getBoundingClientRect();
          if (r.top < vh * 0.92 && r.bottom > -80) {
            reveal(node);
          }
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    // Attach card hover tracks
    const attachCardTracks = () => {
      if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches)
        return;
      document.querySelectorAll(".card-hov:not([data-ptr])").forEach((card) => {
        card.setAttribute("data-ptr", "1");
        const track = document.createElement("div");
        track.className = "card-track";
        track.setAttribute("aria-hidden", "true");
        card.appendChild(track);
        card.addEventListener(
          "pointermove",
          (e) => {
            const r = card.getBoundingClientRect();
            track.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0)`;
          },
          { passive: true },
        );
      });
    };

    attachCardTracks();
    const interval = setInterval(onScroll, 300);
    const trackInterval = setInterval(attachCardTracks, 500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearInterval(interval);
      clearInterval(trackInterval);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#f2f0f6] text-[#17122e] overflow-x-hidden">
      {/* Ambient background glowing orbs */}
      <div
        aria-hidden="true"
        className="orb fixed top-[1100px] -left-[180px] w-[520px] h-[520px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(143,117,242,0.15) 0%, rgba(143,117,242,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="orb fixed top-[2400px] -right-[220px] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(81,42,229,0.12) 0%, rgba(81,42,229,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="orb fixed top-[3900px] -left-[120px] w-[460px] h-[460px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(143,117,242,0.14) 0%, rgba(143,117,242,0) 70%)",
        }}
      />

      {/* Main page content container */}
      <div className="relative z-10 w-full flex flex-col">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
        <main>
          <Hero onOpenContact={() => setIsContactOpen(true)} />
          <Trust />
          <Capabilities />
          <Services onOpenContact={() => setIsContactOpen(true)} />
          <Work onOpenContact={() => setIsContactOpen(true)} />
          <Process />
          {/* <Testimonials /> */}
          <Closing onOpenContact={() => setIsContactOpen(true)} />
        </main>
      </div>

      {/* Project inquiry / Contact modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
