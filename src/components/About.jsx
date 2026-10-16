import React from 'react';
import { Globe2, Workflow, Cpu, CheckCircle2 } from 'lucide-react';

export default function About({ themeColors }) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div 
                className="absolute -inset-1 rounded-3xl blur-lg opacity-30"
                style={{ backgroundImage: `linear-gradient(to right, ${themeColors.accentBlue}, ${themeColors.accentPurple})` }}
              ></div>
              <div className="process-card relative border rounded-3xl p-8 shadow-xl" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border, '--process-accent': themeColors.accentBlue, '--process-glow': themeColors.borderGlow }}>
                <div 
                  className="w-16 h-16 rounded-2xl border flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${themeColors.accentBlue}20`, borderColor: `${themeColors.accentBlue}40` }}
                >
                  <Cpu className="w-8 h-8" style={{ color: themeColors.accentBlue }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: themeColors.textMain }}>Business-first solutions</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>
                  You know your business best. We listen first, understand the problem and create a digital solution that fits the way you work.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3 text-sm" style={{ color: themeColors.textMain }}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>Websites that turn visits into enquiries</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm" style={{ color: themeColors.textMain }}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>Software that makes work easier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: themeColors.textMain }}>
              Practical digital solutions for real business needs
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: themeColors.textMuted }}>
              Whether you need a first website, a better online presence or software to solve a day-to-day challenge, we make the process clear and focused on your goals.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border p-6 rounded-2xl" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}>
                <div className="flex items-center space-x-3 mb-3">
                  <Globe2 className="w-6 h-6" style={{ color: themeColors.accentBlue }} />
                  <h4 className="text-lg font-bold" style={{ color: themeColors.textMain }}>Business websites</h4>
                </div>
                <p className="text-sm" style={{ color: themeColors.textMuted }}>
                  Professional, mobile-friendly websites that explain what you do and help customers get in touch.
                </p>
              </div>

              <div className="border p-6 rounded-2xl" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}>
                <div className="flex items-center space-x-3 mb-3">
                  <Workflow className="w-6 h-6" style={{ color: themeColors.accentPurple }} />
                  <h4 className="text-lg font-bold" style={{ color: themeColors.textMain }}>Custom software</h4>
                </div>
                <p className="text-sm" style={{ color: themeColors.textMuted }}>
                  Useful digital tools tailored to your process, customers and business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
