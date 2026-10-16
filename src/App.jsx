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

export default function App() {
  const themeList = Object.values(themes);
  const initialThemeIndex = Math.max(
    0,
    themeList.findIndex((availableTheme) => availableTheme.name === theme.name),
  );
  const [currentThemeIndex, setCurrentThemeIndex] = useState(initialThemeIndex);
  const currentTheme = themeList[currentThemeIndex];
  const currentColors = currentTheme.colors;

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setCurrentThemeIndex((index) => (index + 1) % themeList.length);
  //   }, 5000);

  //   return () => window.clearInterval(timer);
  // }, [themeList.length]);

  return (
    <div
      className="min-h-screen selection:bg-blue-600 selection:text-white"
      style={{
        backgroundColor: currentColors.bgPrimary,
        color: currentColors.textMain,
        transition: "background-color 900ms ease, color 900ms ease",
      }}>
      <Navbar themeColors={currentColors} />
      <main>
        <Hero themeColors={currentColors} />
        <About themeColors={currentColors} />
        <Services themeColors={currentColors} />
        <DeviceShowcase themeColors={currentColors} />
        <Projects themeColors={currentColors} />
        <HowToStart themeColors={currentColors} />
        <ContactForm themeColors={currentColors} />
      </main>
      <Footer themeColors={currentColors} />
    </div>
  );
}
