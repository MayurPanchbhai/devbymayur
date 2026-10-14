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
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: themeColors.textMain }}>
              Let's Build Something Amazing Together
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: themeColors.textMuted }}>
              Have a project in mind, need technical consultation, or want professional services? Connect instantly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-sm" style={{ color: themeColors.textMain }}>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Fast Response Times</span>
              </div>
              <div className="flex items-center space-x-3 text-sm" style={{ color: themeColors.textMain }}>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Dedicated Support & Consultation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border rounded-3xl p-8 shadow-2xl relative" style={{ backgroundColor: themeColors.bgSecondary, borderColor: '#1F2937' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email (optional)"
                    className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>Your Message / Project Details</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project or requirement..."
                    className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2 transition-all"
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
