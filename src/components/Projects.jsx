/** @format */

import React from "react";
import { Sparkles } from "lucide-react";

export default function Projects({ themeColors }) {
  const projects = [
    {
      title: "Blox Hive",
      image: "/projects/bloxhive.png",
      imageAlt: "Screenshot of the Blox Hive gaming character store",
      category: "Online platform",
      description:
        "A gaming character store where players can browse and buy characters and other in-game products.",
      tech: ["Gaming store", "Digital products"],
    },
    {
      title: "Job Application Automation Tool",
      image: "/projects/job-automation.png",
      imageAlt: "Screenshot of the job application automation tool",
      category: "Business automation",
      description:
        "A tool designed to make repetitive email outreach faster and easier to manage.",
      tech: ["Email workflow", "Automation"],
    },
    {
      title: "Manufacturing Inventory Management System",
      image: "/projects/manufacturing-inventory.png",
      imageAlt: "Screenshot of the manufacturing inventory management system",
      category: "Manufacturing software",
      description:
        "An inventory management system for manufacturers to track raw materials, monitor stock levels, and keep production organized.",
      tech: ["Inventory tracking", "Production management"],
    },
  ];

  return (
    <section id="projects" className=" py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold mb-3"
            style={{
              backgroundColor: `${themeColors.accentBlue}15`,
              borderColor: `${themeColors.accentBlue}30`,
              color: themeColors.accentBlue,
            }}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: themeColors.textMain }}>
            Recent Projects & Creations
          </h2>
          <p
            className="mt-3 text-sm sm:text-base"
            style={{ color: themeColors.textMuted }}>
            Examples of websites and software designed to solve practical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border process-card rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: themeColors.bgSecondary,
                borderColor: themeColors.border,
                "--process-accent": themeColors.accentBlue,
                "--process-glow": themeColors.borderGlow,
              }}>
              <div
                className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border"
                style={{
                  borderColor: themeColors.border,
                  background: `linear-gradient(135deg, ${themeColors.accentBlue}25, ${themeColors.accentPurple}25, ${themeColors.bgPrimary})`,
                }}>
                <div
                  className="absolute inset-0 flex items-center justify-center text-sm font-semibold"
                  style={{ color: themeColors.textMuted }}>
                  Add image:{" "}
                  <span className="ml-1">{project.image.split("/").pop()}</span>
                </div>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${themeColors.accentBlue}20`,
                      borderColor: `${themeColors.accentBlue}40`,
                      color: themeColors.accentBlue,
                    }}>
                    {project.category}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold group-hover:opacity-80 transition-opacity"
                  style={{ color: themeColors.textMain }}>
                  {project.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: themeColors.textMuted }}>
                  {project.description}
                </p>
              </div>

              <div
                className="mt-6 border-t pt-6"
                style={{ borderColor: themeColors.border }}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-lg border px-2.5 py-1 text-xs"
                      style={{
                        backgroundColor: themeColors.bgPrimary,
                        color: themeColors.textMuted,
                        borderColor: themeColors.border,
                      }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
