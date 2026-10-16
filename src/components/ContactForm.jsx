import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactForm({ themeColors }) {
  const [state, handleSubmit] = useForm('mrperdoy');

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
            <div className="process-card border rounded-3xl p-8 shadow-xl relative" style={{ backgroundColor: themeColors.bgSecondary, borderColor: themeColors.border, '--process-accent': themeColors.accentBlue, '--process-glow': themeColors.borderGlow }}>
              {state.succeeded ? (
                <p className="rounded-xl border p-4 text-sm font-medium" style={{ color: themeColors.textMain, borderColor: themeColors.border, backgroundColor: themeColors.bgPrimary }} role="status">
                  Thanks for reaching out! Your message has been sent.
                </p>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {state.errors && <p className="text-sm" style={{ color: themeColors.error || '#ef4444' }} role="alert">There was a problem sending your message. Please check the fields and try again.</p>}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>Your Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    style={{ backgroundColor: themeColors.bgPrimary, color: themeColors.textMain, borderColor: themeColors.border, '--tw-ring-color': themeColors.accentBlue }}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>Email Address</label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    style={{ backgroundColor: themeColors.bgPrimary, color: themeColors.textMain, borderColor: themeColors.border, '--tw-ring-color': themeColors.accentBlue }}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textMain }}>What would you like help with?</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    placeholder="Tell us about your business and what you want to improve..."
                    className="w-full resize-none rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2"
                    style={{ backgroundColor: themeColors.bgPrimary, color: themeColors.textMain, borderColor: themeColors.border, '--tw-ring-color': themeColors.accentBlue }}
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-full py-4 text-white font-semibold shadow-lg flex items-center justify-center space-x-2 transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ backgroundColor: themeColors.accentBlue, opacity: state.submitting ? 0.7 : 1, cursor: state.submitting ? 'wait' : 'pointer' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
