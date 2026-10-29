/** @format */

import React, { useState, useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    country: "",
    message: "",
  });

  // Lock body scroll on mobile when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xbggkjnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-[540px] max-h-[92vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-9 shadow-2xl border border-[#e6e0f6] animate-in fade-in zoom-in-95 duration-200">
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f2f0f6] hover:bg-[#e0d8f3] text-[#17122e] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 13L13 1M1 1l12 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8 sm:py-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#efeafd] text-[#512ae5] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#17122e] mb-2">
              Message received!
            </h3>
            <p className="text-[#5b5573] max-w-sm mx-auto text-[14px] sm:text-[15px] mb-6">
              Thank you for reaching out to Symmify. We will review your project
              details and get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#512ae5] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#3f1ec7] transition-colors cursor-pointer">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider text-[#512ae5] bg-[#efeafd] px-3 py-1 rounded-full">
                Start a Conversation
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#17122e] mt-2 tracking-tight leading-snug">
                Start your project with{" "}
                <span className="font-serif italic font-normal text-[#512ae5]">
                  Symmify.
                </span>
              </h2>
              <p className="text-[#7b7494] text-xs sm:text-sm mt-1">
                Tell us about your business, timeline, and goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-medium border border-red-200">
                  There was an issue sending your message. Please reach out
                  directly on WhatsApp or try again.
                </div>
              )}

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#7b7494] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-[#e6e0f6] bg-[#faf9fc] text-[#17122e] text-[16px] focus:outline-none focus:border-[#512ae5] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#7b7494] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-[#e6e0f6] bg-[#faf9fc] text-[#17122e] text-[16px] focus:outline-none focus:border-[#512ae5] focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#7b7494] mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-[#e6e0f6] bg-[#faf9fc] text-[#17122e] text-[16px] focus:outline-none focus:border-[#512ae5] focus:bg-white transition-all">
                    <option value="Website Development">
                      Business Website / E-Commerce
                    </option>
                    <option value="Custom Software">
                      Custom Software / Web App
                    </option>
                    <option value="Business Automation">
                      Workflow &amp; Automation
                    </option>
                    <option value="UI/UX Design">
                      UI/UX &amp; Product Design
                    </option>
                    <option value="Full Digital Solution">
                      Full Digital Solution
                    </option>
                    <option value="Not available in the list">
                      Not available in the list
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#7b7494] mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, India"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-[#e6e0f6] bg-[#faf9fc] text-[#17122e] text-[16px] focus:outline-none focus:border-[#512ae5] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#7b7494] mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about what you're looking to build or automate..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-[#e6e0f6] bg-[#faf9fc] text-[#17122e] text-[16px] focus:outline-none focus:border-[#512ae5] focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-[#512ae5] hover:bg-[#3f1ec7] text-white rounded-full font-medium text-[15px] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60">
                  <span>{submitting ? "Sending..." : "Submit Inquiry"}</span>
                  <span>→</span>
                </button>
              </div>

              <div className="text-center pt-1.5">
                <span className="text-xs text-[#7b7494]">
                  Or chat instantly via{" "}
                </span>
                <a
                  href="https://wa.me/919325646874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#25D366] hover:underline inline-flex items-center gap-1">
                  WhatsApp (+91 93256 46874) ↗
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
