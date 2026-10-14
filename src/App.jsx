/** @format */

import React from "react";
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
  const currentColors = theme.colors;

  return (
    <div
      className="min-h-screen selection:bg-blue-600 selection:text-white"
      style={{
        backgroundColor: currentColors.bgPrimary,
        color: currentColors.textMain,
      }}>
      <Navbar themeColors={currentColors} />
      <main>
        <Hero themeColors={currentColors} />
        <DeviceShowcase themeColors={currentColors} />
        <About themeColors={currentColors} />
        <Services themeColors={currentColors} />
        <Projects themeColors={currentColors} />
        <HowToStart themeColors={currentColors} />
        <ContactForm themeColors={currentColors} />
      </main>
      <Footer themeColors={currentColors} />
    </div>
  );
}
