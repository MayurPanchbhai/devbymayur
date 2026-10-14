import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function Projects({ themeColors }) {
  const projects = [
    {
      title: "BloxHive.gg Web Platform",
      category: "Full-Stack Web App",
      description: "Contributed frontend and backend development featuring WebSocket live updates.",
      tech: ["React", "Node.js", "WebSockets", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Job Application Automation Tool",
      category: "Python Automation",
      description: "Developed an automated mailer tool designed to streamline bulk job outreach.",
      tech: ["Python", "SMTP", "Automation"],
      link: "#"
    },
    {
      title: "Personal Brand & Media Hub",
      category: "Frontend Application",
      description: "High-performance portfolio platform built for personal branding.",
      tech: ["React", "Tailwind CSS", "Vite"],
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
            Explore a selection of my engineering projects and digital applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{ backgroundColor: `${themeColors.accentBlue}20`, borderColor: `${themeColors.accentBlue}40`, color: themeColors.accentBlue }}
                  >
                    {project.category}
                  </span>
                  <a href={project.link} className="text-gray-400 hover:text-white transition-colors p-2" aria-label="View Project">
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

              <div className="mt-6 pt-6 border-t border-gray-800/80">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-gray-900 text-gray-300 border border-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gray-900 hover:opacity-90 text-gray-200 font-medium text-sm border border-gray-800 transition-all"
                >
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
