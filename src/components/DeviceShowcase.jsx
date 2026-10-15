import React, { useState } from 'react';
import { Smartphone, Laptop, Sparkles } from 'lucide-react';

export default function DeviceShowcase({ themeColors }) {
  const [activeDevice, setActiveDevice] = useState('laptop');

  return (
    <section id="devices" className="py-20 border-y" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}>
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
            Preview how a carefully designed experience adapts to phones and laptops.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['mobile', 'laptop'].map((dev) => (
              <button
                key={dev}
                onClick={() => setActiveDevice(dev)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all border ${
                  activeDevice === dev ? 'text-white shadow-lg' : 'hover:opacity-75'
                }`}
                style={{
                  backgroundColor: activeDevice === dev ? themeColors.accentBlue : themeColors.bgSecondary,
                  borderColor: activeDevice === dev ? themeColors.accentBlue : themeColors.border,
                  color: activeDevice === dev ? '#FFFFFF' : themeColors.textMuted
                }}
              >
                {dev === 'mobile' && <Smartphone className="w-4 h-4" />}
                {dev === 'laptop' && <Laptop className="w-4 h-4" />}
                <span className="capitalize">{dev} View</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center transition-all duration-500">
          {activeDevice === 'mobile' && (
            <div className="w-[min(300px,calc(100vw-2rem))] h-[min(580px,calc(100vw*1.72))] min-h-[420px] rounded-[40px] border-4 p-4 relative flex flex-col justify-between animate-float shadow-xl" style={{ backgroundColor: themeColors.bgPrimary, borderColor: themeColors.border }}>
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 rounded-full" style={{ backgroundColor: themeColors.border }}></div>
              <div className="mt-6 rounded-2xl p-4 flex-1 flex flex-col justify-between border" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}>
                <div>
                  <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-white font-bold" style={{ backgroundColor: themeColors.accentBlue }}>M</div>
                  <h4 className="font-bold text-sm" style={{ color: themeColors.textMain }}>A website on mobile</h4>
                  <p className="text-xs mt-1" style={{ color: themeColors.textMuted }}>Easy to read, navigate and contact you from.</p>
                </div>
                <div className="border rounded-xl p-3 text-center" style={{ backgroundColor: `${themeColors.accentBlue}12`, borderColor: `${themeColors.accentBlue}40` }}>
                  <span className="text-xs font-semibold" style={{ color: themeColors.accentBlue }}>100% Mobile Friendly</span>
                </div>
              </div>
              <div className="w-32 h-1 bg-gray-700 rounded-full mx-auto mt-2"></div>
            </div>
          )}

          {activeDevice === 'laptop' && (
            <div className="w-full max-w-3xl rounded-2xl border-4 p-4 relative animate-float shadow-xl" style={{ backgroundColor: themeColors.bgPrimary, borderColor: themeColors.border }}>
              <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: themeColors.border }}>
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="px-4 py-1 rounded-lg text-xs border truncate" style={{ backgroundColor: themeColors.bgSecondary, color: themeColors.textMuted, borderColor: themeColors.border }}>Your website</div>
                <div className="w-6"></div>
              </div>
              <div className="py-8 px-4 text-center">
                <h3 className="text-xl font-bold" style={{ color: themeColors.textMain }}>A clear experience on every screen</h3>
                <p className="text-sm mt-2 max-w-lg mx-auto" style={{ color: themeColors.textMuted }}>Your customers can find what they need whether they’re on a phone or laptop.</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
