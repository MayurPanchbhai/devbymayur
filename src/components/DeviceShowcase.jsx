import React, { useState } from 'react';
import { Smartphone, Laptop, Monitor, Sparkles } from 'lucide-react';

export default function DeviceShowcase({ themeColors }) {
  const [activeDevice, setActiveDevice] = useState('laptop');

  return (
    <section id="devices" className="py-20 border-y" style={{ backgroundColor: `${themeColors.bgSecondary}50`, borderColor: '#1F2937' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold mb-3"
            style={{ backgroundColor: `${themeColors.accentBlue}15`, borderColor: `${themeColors.accentBlue}30`, color: themeColors.accentBlue }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Responsive Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: themeColors.textMain }}>
            Seamless Experience Across All Devices
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: themeColors.textMuted }}>
            Click below to preview how digital solutions seamlessly adapt from Mobile to Laptop and Desktop screens.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['mobile', 'laptop', 'desktop'].map((dev) => (
              <button
                key={dev}
                onClick={() => setActiveDevice(dev)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all border ${
                  activeDevice === dev ? 'text-white shadow-lg' : 'text-gray-400 hover:text-white'
                }`}
                style={{
                  backgroundColor: activeDevice === dev ? themeColors.accentBlue : themeColors.bgSecondary,
                  borderColor: activeDevice === dev ? themeColors.accentBlue : '#1F2937'
                }}
              >
                {dev === 'mobile' && <Smartphone className="w-4 h-4" />}
                {dev === 'laptop' && <Laptop className="w-4 h-4" />}
                {dev === 'desktop' && <Monitor className="w-4 h-4" />}
                <span className="capitalize">{dev} View</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center transition-all duration-500">
          {activeDevice === 'mobile' && (
            <div className="w-[300px] h-[580px] bg-gray-950 rounded-[40px] border-4 border-gray-700 shadow-2xl p-4 relative flex flex-col justify-between animate-float">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-gray-700 rounded-full"></div>
              <div className="mt-6 bg-gray-900 rounded-2xl p-4 flex-1 flex flex-col justify-between border border-gray-800">
                <div>
                  <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-white font-bold" style={{ backgroundColor: themeColors.accentBlue }}>M</div>
                  <h4 className="text-white font-bold text-sm">Mobile UI Preview</h4>
                  <p className="text-gray-400 text-xs mt-1">Optimized touch interactions & fast loading speeds.</p>
                </div>
                <div className="border rounded-xl p-3 text-center" style={{ backgroundColor: `${themeColors.accentBlue}20`, borderColor: `${themeColors.accentBlue}40` }}>
                  <span className="text-xs font-semibold" style={{ color: themeColors.accentBlue }}>100% Mobile Friendly</span>
                </div>
              </div>
              <div className="w-32 h-1 bg-gray-700 rounded-full mx-auto mt-2"></div>
            </div>
          )}

          {activeDevice === 'laptop' && (
            <div className="w-full max-w-3xl bg-gray-950 rounded-2xl border-4 border-gray-700 shadow-2xl p-4 relative animate-float">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-900 px-4 py-1 rounded-lg text-xs text-gray-400 border border-gray-800">https://mayur.dev</div>
                <div className="w-6"></div>
              </div>
              <div className="py-8 px-4 text-center">
                <h3 className="text-xl font-bold text-white">Laptop & Tablet Optimized</h3>
                <p className="text-gray-400 text-sm mt-2 max-w-lg mx-auto">Providing expansive layout designs and grid systems.</p>
              </div>
            </div>
          )}

          {activeDevice === 'desktop' && (
            <div className="w-full max-w-5xl bg-gray-950 rounded-2xl border-4 border-gray-700 shadow-2xl p-4 relative animate-float">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-900 px-6 py-1 rounded-lg text-xs text-gray-400 border border-gray-800">https://mayur.dev/dashboard</div>
                <div className="w-6"></div>
              </div>
              <div className="py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                  <h4 className="text-white font-semibold text-sm">Full-Stack Arch</h4>
                  <p className="text-gray-400 text-xs mt-1">Robust Node.js & React ecosystem.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                  <h4 className="text-white font-semibold text-sm">Motion Graphics</h4>
                  <p className="text-gray-400 text-xs mt-1">High retention video editing.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                  <h4 className="text-white font-semibold text-sm">Instant Connect</h4>
                  <p className="text-gray-400 text-xs mt-1">Direct WhatsApp lead generation.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
