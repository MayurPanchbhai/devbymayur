import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactForm({ themeColors }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    const phone = "919000000000";
    const text = encodeURIComponent(`Hi, my name is ${formData.name} (${formData.email}). Message: ${formData.message}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div 
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold mb-3"
              style={{ backgroundColor: `${themeColors.accentBlue}15`, borderColor: `${themeColors.accentBlue}30`, color: themeColors.accentBlue }}
            >
              <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: themeColors.textMain }}>
              Tell us what your business needs
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: themeColors.textMuted }}>
              Share the challenge you want to solve or the website you want to create. We’ll talk through the next steps with you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-sm" style={{ color: themeColors.textMain }}>
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: themeColors.accentBlue }} />
                <span>A clear plan before work begins</span>
              </div>
              <div className="flex items-center space-x-3 text-sm" style={{ color: themeColors.textMain }}>
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: themeColors.accentBlue }} />
                <span>Friendly, straightforward communication</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border rounded-3xl p-8 shadow-xl relative" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    style={{ backgroundColor: themeColors.bgPrimary, color: themeColors.textMain, borderColor: themeColors.border, '--tw-ring-color': themeColors.accentBlue }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email (optional)"
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    style={{ backgroundColor: themeColors.bgPrimary, color: themeColors.textMain, borderColor: themeColors.border, '--tw-ring-color': themeColors.accentBlue }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>What would you like help with?</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business and what you want to improve..."
                    className="w-full resize-none rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    style={{ backgroundColor: themeColors.bgPrimary, color: themeColors.textMain, borderColor: themeColors.border, '--tw-ring-color': themeColors.accentBlue }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full py-4 text-white font-semibold shadow-lg flex items-center justify-center space-x-2 transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ backgroundColor: themeColors.accentBlue }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
