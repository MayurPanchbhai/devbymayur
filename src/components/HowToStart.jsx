import React from 'react';
import { MessageSquare, FileText, Rocket, Sparkles } from 'lucide-react';

export default function HowToStart({ themeColors }) {
  const steps = [
    {
      step: "01",
      title: "Tell us what you need",
      description: "Tell us what your business does and what you want a website or software to help you achieve.",
      icon: <MessageSquare className="w-6 h-6" style={{ color: themeColors.accentBlue }} />
    },
    {
      step: "02",
      title: "Get a clear proposal",
      description: "We’ll recommend an approach, outline what’s included and agree on timing before any work begins.",
      icon: <FileText className="w-6 h-6" style={{ color: themeColors.accentPurple }} />
    },
    {
      step: "03",
      title: "Review and launch",
      description: "We build your solution, keep you updated, make agreed refinements and help you get ready to launch.",
      icon: <Rocket className="w-6 h-6" style={{ color: themeColors.accentBlue }} />
    }
  ];

  return (
    <section id="how-to-start" className="py-20 border-y relative" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold mb-3"
            style={{ backgroundColor: `${themeColors.accentBlue}15`, borderColor: `${themeColors.accentBlue}30`, color: themeColors.accentBlue }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: themeColors.textMain }}>
            How to Get Started
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: themeColors.textMuted }}>
            Three straightforward steps. We’ll guide you through each one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, index) => (
            <div
              key={index}
              className="process-card relative rounded-3xl border p-8"
              style={{
                backgroundColor: themeColors.bgPrimary,
                borderColor: themeColors.border,
                '--process-accent': themeColors.accentBlue,
                '--process-glow': themeColors.borderGlow
              }}
            >
              <div className="absolute top-6 right-6 text-2xl font-black" style={{ color: `${themeColors.accentBlue}35` }}>
                {s.step}
              </div>
              <div className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-6" style={{ backgroundColor: `${themeColors.accentBlue}12`, borderColor: `${themeColors.accentBlue}30` }}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: themeColors.textMain }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
