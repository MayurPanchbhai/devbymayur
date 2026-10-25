/** @format */

import React, { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects({ themeColors, projectList = projects, showAll = false, customerView = false }) {
  const visibleProjects = showAll ? projectList : projectList.slice(0, 3);
  const tiltCard = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
    card.style.setProperty("--tilt-y", `${(x - 0.5) * 9}deg`);
    card.style.setProperty("--shine-x", `${x * 100}%`);
    card.style.setProperty("--shine-y", `${y * 100}%`);
  };
  const resetTilt = (event) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

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
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              onPointerMove={tiltCard}
              onPointerLeave={resetTilt}
              className="depth-card border process-card rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:-translate-y-1"
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
                  {customerView ? project.customerDescription : project.description}
                </p>
              </div>

              {customerView ? (
                project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: themeColors.accentBlue }}>
                    Take a look <ArrowRight className="h-4 w-4" />
                  </a>
                )
              ) : (
                <div
                  className="mt-6 border-t pt-6"
                  style={{ borderColor: themeColors.border }}>
                  <div className="flex flex-wrap gap-2">
                    {(project.tech || []).map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="rounded-lg border px-2.5 py-1 text-xs"
                        style={{
                          backgroundColor: themeColors.bgPrimary,
                          color: themeColors.textMuted,
                          borderColor: themeColors.border,
                        }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {!customerView && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: themeColors.accentBlue }}>
                  Visit project <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="mt-10 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: themeColors.accentBlue }}>
              View all projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
