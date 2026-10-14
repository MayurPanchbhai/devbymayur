import React from 'react';
import { MessageSquare, FileText, Rocket, Sparkles } from 'lucide-react';

export default function HowToStart({ themeColors }) {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Reach out via WhatsApp or contact form to share requirements.",
      icon: <MessageSquare className="w-6 h-6" style={{ color: themeColors.accentBlue }} />
    },
    {
      step: "02",
      title: "Strategy & Scope",
      description: "We outline the technical stack, timelines, and deliverable scope.",
      icon: <FileText className="w-6 h-6" style={{ color: themeColors.accentPurple }} />
    },
    {
      step: "03",
      title: "Execution & Delivery",
      description: "Development commences with regular progress updates until deployment.",
      icon: <Rocket className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <section className="py-20 border-y relative" style={{ backgroundColor: `${themeColors.bgSecondary}50`, borderColor: '#1F2937' }}>
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
            Collaborating is quick and straightforward. Follow these three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, index) => (
            <div key={index} className="border rounded-3xl p-8 relative group transition-all" style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}>
              <div className="absolute top-6 right-6 text-2xl font-black text-gray-800">
                {s.step}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-6">
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
