import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function Projects({ themeColors }) {
  const projects = [
    {
      title: "BloxHive.gg Web Platform",
      category: "Online platform",
      description: "A connected web platform with live updates to keep information current for its users.",
      tech: ["Live updates", "Online platform"],
      link: "#"
    },
    {
      title: "Job Application Automation Tool",
      category: "Business automation",
      description: "A tool designed to make repetitive email outreach faster and easier to manage.",
      tech: ["Email workflow", "Automation"],
      link: "#"
    },
    {
      title: "Personal Brand & Media Hub",
      category: "Business website",
      description: "A modern website that presents services clearly and gives visitors an easy way to make contact.",
      tech: ["Responsive design", "Business website"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold mb-3"
            style={{ backgroundColor: `${themeColors.accentBlue}15`, borderColor: `${themeColors.accentBlue}30`, color: themeColors.accentBlue }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: themeColors.textMain }}>
            Recent Projects & Creations
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: themeColors.textMuted }}>
            Examples of websites and software designed to solve practical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{ backgroundColor: `${themeColors.accentBlue}20`, borderColor: `${themeColors.accentBlue}40`, color: themeColors.accentBlue }}
                  >
                    {project.category}
                  </span>
                  <a href={project.link} className="p-2 transition-colors" style={{ color: themeColors.textMuted }} aria-label="View Project">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold group-hover:opacity-80 transition-opacity" style={{ color: themeColors.textMain }}>
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>
                  {project.description}
                </p>
              </div>

              <div className="mt-6 border-t pt-6" style={{ borderColor: themeColors.border }}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="rounded-lg border px-2.5 py-1 text-xs" style={{ backgroundColor: themeColors.bgPrimary, color: themeColors.textMuted, borderColor: themeColors.border }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl font-medium text-sm border transition-all hover:opacity-80"
                  style={{ backgroundColor: themeColors.bgPrimary, color: themeColors.textMain, borderColor: themeColors.border }}
                >
                  <span>View Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
