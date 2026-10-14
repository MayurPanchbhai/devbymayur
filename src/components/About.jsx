import React from 'react';
import { Code, Video, Cpu, CheckCircle2 } from 'lucide-react';

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
              <div className="relative border rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}>
                <div 
                  className="w-16 h-16 rounded-2xl border flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${themeColors.accentBlue}20`, borderColor: `${themeColors.accentBlue}40` }}
                >
                  <Cpu className="w-8 h-8" style={{ color: themeColors.accentBlue }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: themeColors.textMain }}>Engineering Mindset</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>
                  Combining rigorous engineering principles with creative media production to build impactful software.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3 text-sm" style={{ color: themeColors.textMain }}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>MERN Stack Architecture & APIs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm" style={{ color: themeColors.textMain }}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>Professional Video Editing & Motion Graphics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: themeColors.textMain }}>
              Driven by Passion, Defined by Precision
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: themeColors.textMuted }}>
              I am a versatile full-stack developer and creative video editor dedicated to building seamless digital experiences.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border p-6 rounded-2xl" style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <Code className="w-6 h-6" style={{ color: themeColors.accentBlue }} />
                  <h4 className="text-lg font-bold" style={{ color: themeColors.textMain }}>Web Development</h4>
                </div>
                <p className="text-sm" style={{ color: themeColors.textMuted }}>
                  Specializing in React, Node.js, Express, and MongoDB.
                </p>
              </div>

              <div className="border p-6 rounded-2xl" style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <Video className="w-6 h-6" style={{ color: themeColors.accentPurple }} />
                  <h4 className="text-lg font-bold" style={{ color: themeColors.textMain }}>Video Editing</h4>
                </div>
                <p className="text-sm" style={{ color: themeColors.textMuted }}>
                  Creating high-retention video content and shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
