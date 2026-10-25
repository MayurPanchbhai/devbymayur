/** @format */

import React, { useEffect, useState } from "react";
import { theme, themes } from "./utils/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeviceShowcase from "./components/DeviceShowcase";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import HowToStart from "./components/HowToStart";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";

export default function App() {
  const themeList = Object.values(themes);
  const initialThemeIndex = Math.max(
    0,
    themeList.findIndex((availableTheme) => availableTheme.name === theme.name),
  );
  const [currentThemeIndex, setCurrentThemeIndex] = useState(initialThemeIndex);
  const currentTheme = themeList[currentThemeIndex];
  const currentColors = currentTheme.colors;
  const isProjectsPage = window.location.pathname.replace(/\/$/, "") === "/projects";

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return undefined;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.14, rootMargin: "0px 0px -48px 0px" },
    );
    document.querySelectorAll("main section, footer").forEach((section) => {
      section.classList.add("motion-reveal");
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, [isProjectsPage]);

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setCurrentThemeIndex((index) => (index + 1) % themeList.length);
  //   }, 5000);

  //   return () => window.clearInterval(timer);
  // }, [themeList.length]);

  return (
    <div
      className="min-h-screen selection:bg-blue-600 selection:text-white"
      data-theme={currentTheme.name}
      style={{
        backgroundColor: "#f2f2f5",
        color: "#181820",
        transition: "background-color 900ms ease, color 900ms ease",
      }}>
      <Navbar themeColors={currentColors} />
      <main>
        {isProjectsPage ? (
          <ProjectsPage themeColors={currentColors} />
        ) : (
          <>
            <Hero themeColors={currentColors} />
            <About themeColors={currentColors} />
            <Services themeColors={currentColors} />
            <DeviceShowcase themeColors={currentColors} />
            <Projects themeColors={currentColors} />
            <HowToStart themeColors={currentColors} />
          </>
        )}
        <ContactForm themeColors={currentColors} />
      </main>
      <Footer themeColors={currentColors} />
    </div>
  );
}
