/** @format */

import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Laptop,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Menu,
  Star,
  ShieldCheck,
  Zap,
  Layers,
  BarChart3,
  Mail,
  Globe,
  Send,
  Bell,
  Activity,
  Check,
  Clock,
  Phone,
  UserCheck,
} from "lucide-react";

export default function DeviceShowcase({ themeColors }) {
  const [activeDevice, setActiveDevice] = useState("mobile");
  const tiltDevice = (event) => {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty(
      "--device-tilt-x",
      `${(0.5 - y) * 9}deg`,
    );
    event.currentTarget.style.setProperty(
      "--device-tilt-y",
      `${(x - 0.5) * 12}deg`,
    );
    event.currentTarget.style.setProperty("--device-scale", "1.015");
  };
  const resetDeviceTilt = (event) => {
    event.currentTarget.style.setProperty("--device-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--device-tilt-y", "0deg");
    event.currentTarget.style.setProperty("--device-scale", "1");
  };

  // Interactive mockup states
  const [mobileTab, setMobileTab] = useState("features");
  const [laptopTab, setLaptopTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Selection states for internal grids
  const [selectedSolution, setSelectedSolution] = useState("cdn");
  const [selectedMetric, setSelectedMetric] = useState("traffic");
  const [selectedPlan, setSelectedPlan] = useState("pro");

  // Interactive mobile feature toggles
  const [featureToggles, setFeatureToggles] = useState({
    touchNav: true,
    offlineCache: true,
    biometric: true,
    pushNotifs: false,
  });

  // Floating Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);

  const showNotification = (msg) => {
    setToastMessage(msg);
  };

  // Auto-dismiss notification toast after 2.2 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleFeature = (key, label) => {
    setFeatureToggles((prev) => {
      const updated = !prev[key];
      showNotification(`${label} ${updated ? "Enabled" : "Disabled"}`);
      return { ...prev, [key]: updated };
    });
  };

  return (
    <section
      id="devices"
      className="py-16 sm:py-20 border-y overflow-hidden"
      style={{
        backgroundColor: "transparent",
        borderColor: themeColors.border,
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold mb-3 shadow-sm"
            style={{
              backgroundColor: `${themeColors.accentBlue}15`,
              borderColor: `${themeColors.accentBlue}30`,
              color: themeColors.accentBlue,
            }}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Responsive Architecture</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: themeColors.textMain }}>
            Seamless Experience Across All Devices
          </h2>
          <p
            className="mt-2 text-xs sm:text-base"
            style={{ color: themeColors.textMuted }}>
            Interact directly with the mockups below to test how content adapts
            and responds on every screen size.
          </p>

          <div
            className="mt-6 flex justify-center gap-3"
            role="tablist"
            aria-label="Choose device preview">
            {[
              { id: "mobile", label: "Mobile View", icon: Smartphone },
              { id: "laptop", label: "Laptop View", icon: Laptop },
            ].map(({ id, label, icon: Icon }) => {
              const selected = activeDevice === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    if (activeDevice !== id) {
                      setToastMessage(null);
                      setActiveDevice(id);
                    }
                  }}
                  className="device-tab flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all sm:text-sm"
                  style={{
                    backgroundColor: selected
                      ? themeColors.accentBlue
                      : themeColors.bgPrimary,
                    borderColor: selected
                      ? themeColors.accentBlue
                      : themeColors.border,
                    color: selected ? "#fff" : themeColors.textMuted,
                  }}>
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Canvas */}
        <div className="device-duo relative flex items-center justify-center min-h-[500px] sm:min-h-[540px] transition-all duration-500">
          {/* ================= MOBILE DEVICE MOCKUP ================= */}
          <div
            onPointerMove={tiltDevice}
            onPointerLeave={resetDeviceTilt}
            className={`device-phone-wrap bg-transparent ${activeDevice === "mobile" ? "device-active " : "device-inactive"}`}
            aria-hidden={activeDevice !== "mobile"}>
            <div
              className=" bg-transparent w-[300px] sm:w-[320px] h-[550px] rounded-[42px] border-[7px] p-2.5 relative flex flex-col justify-between shadow-2xl transition-all"
              style={{
                backgroundColor: themeColors.bgPrimary,
                borderColor: "#1f2937",
              }}>
              {/* Phone Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-3.5 rounded-full bg-gray-900 flex items-center justify-center z-20">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></div>
                <div className="w-8 h-1 rounded-full bg-gray-800"></div>
              </div>

              {/* Mobile Screen Container */}
              <div
                className="mt-5 rounded-[28px] overflow-hidden flex-1 flex flex-col border shadow-inner text-left relative"
                style={{
                  backgroundColor: themeColors.bgSecondary,
                  borderColor: themeColors.border,
                }}>
                {/* FLOATING TOAST NOTIFICATION (NO DARK OVERLAY) */}
                {toastMessage && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-[85%] transition-all duration-300">
                    <div className="bg-gray-900/95 text-white text-[11px] font-semibold px-3 py-2 rounded-xl shadow-2xl border border-gray-700 flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">{toastMessage}</span>
                    </div>
                  </div>
                )}

                {/* Mobile Header */}
                <div
                  className="px-3.5 py-2.5 border-b flex items-center justify-between"
                  style={{
                    backgroundColor: themeColors.bgPrimary,
                    borderColor: themeColors.border,
                  }}>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-white font-bold text-[10px] shadow-sm"
                      style={{ backgroundColor: themeColors.accentBlue }}>
                      UI
                    </div>
                    <span
                      className="font-bold text-xs"
                      style={{ color: themeColors.textMain }}>
                      AppFlow
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-1 rounded-md hover:opacity-70 transition-opacity">
                    <Menu
                      className="w-4 h-4"
                      style={{ color: themeColors.textMuted }}
                    />
                  </button>
                </div>

                {/* Dropdown Menu */}
                {mobileMenuOpen && (
                  <div
                    className="absolute top-11 right-2 w-36 rounded-xl border shadow-xl p-2 z-30"
                    style={{
                      backgroundColor: themeColors.bgPrimary,
                      borderColor: themeColors.border,
                    }}>
                    <div
                      className="text-[11px] font-semibold px-2 py-1.5 rounded cursor-pointer hover:opacity-75"
                      style={{ color: themeColors.textMain }}
                      onClick={() => {
                        setMobileTab("explore");
                        setMobileMenuOpen(false);
                      }}>
                      Home Feed
                    </div>
                    <div
                      className="text-[11px] font-semibold px-2 py-1.5 rounded cursor-pointer hover:opacity-75"
                      style={{ color: themeColors.textMain }}
                      onClick={() => {
                        setMobileTab("features");
                        setMobileMenuOpen(false);
                      }}>
                      App Features
                    </div>
                    <div
                      className="text-[11px] font-semibold px-2 py-1.5 rounded cursor-pointer hover:opacity-75"
                      style={{ color: themeColors.textMain }}
                      onClick={() => {
                        setMobileTab("contact");
                        setMobileMenuOpen(false);
                      }}>
                      Support
                    </div>
                  </div>
                )}

                {/* Mobile Screen Body */}
                <div className="p-3 flex-1 overflow-y-auto space-y-2.5">
                  {/* TAB 1: EXPLORE */}
                  {mobileTab === "explore" && (
                    <div className="space-y-2.5">
                      <div
                        className="rounded-xl p-3 border shadow-sm relative overflow-hidden"
                        style={{
                          backgroundColor: themeColors.bgPrimary,
                          borderColor: themeColors.border,
                        }}>
                        <span
                          className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                          style={{
                            backgroundColor: `${themeColors.accentBlue}20`,
                            color: themeColors.accentBlue,
                          }}>
                          Mobile Optimized
                        </span>
                        <h4
                          className="font-bold text-xs mt-1.5"
                          style={{ color: themeColors.textMain }}>
                          Built for On-the-Go Users
                        </h4>
                        <p
                          className="text-[10px] mt-1 leading-snug"
                          style={{ color: themeColors.textMuted }}>
                          Fast touch targets and instant actions designed
                          specifically for smartphone screens.
                        </p>

                        <button
                          onClick={() =>
                            showNotification("Mobile Action Executed!")
                          }
                          className="mt-2.5 w-full py-1.5 rounded-lg text-xs font-semibold text-white shadow-sm flex items-center justify-center space-x-1 hover:brightness-110 active:scale-95 transition-transform animate-[bounce_3s_infinite]"
                          style={{ backgroundColor: themeColors.accentBlue }}>
                          <span>Get Started</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div
                          className="p-2.5 rounded-xl border text-center cursor-pointer hover:opacity-80 transition-opacity"
                          style={{
                            backgroundColor: themeColors.bgPrimary,
                            borderColor: themeColors.border,
                          }}
                          onClick={() =>
                            showNotification("Lightning Speed Enabled!")
                          }>
                          <Zap
                            className="w-3.5 h-3.5 mx-auto mb-1"
                            style={{ color: themeColors.accentBlue }}
                          />
                          <span
                            className="text-[10px] font-bold block"
                            style={{ color: themeColors.textMain }}>
                            Fast Load
                          </span>
                        </div>
                        <div
                          className="p-2.5 rounded-xl border text-center cursor-pointer hover:opacity-80 transition-opacity"
                          style={{
                            backgroundColor: themeColors.bgPrimary,
                            borderColor: themeColors.border,
                          }}
                          onClick={() =>
                            showNotification("Encryption Active!")
                          }>
                          <ShieldCheck className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-500" />
                          <span
                            className="text-[10px] font-bold block"
                            style={{ color: themeColors.textMain }}>
                            100% Secure
                          </span>
                        </div>
                      </div>

                      <div
                        className="p-2.5 rounded-xl border space-y-2"
                        style={{
                          backgroundColor: themeColors.bgPrimary,
                          borderColor: themeColors.border,
                        }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Bell
                              className="w-3 h-3"
                              style={{ color: themeColors.accentBlue }}
                            />
                            <span
                              className="text-[10px] font-bold"
                              style={{ color: themeColors.textMain }}>
                              Recent Activity
                            </span>
                          </div>
                          <span className="text-[9px] text-emerald-500 font-semibold">
                            Live
                          </span>
                        </div>
                        <div
                          className="space-y-1.5 text-[9px]"
                          style={{ color: themeColors.textMuted }}>
                          <div
                            className="flex items-center justify-between p-1 rounded border"
                            style={{ borderColor: themeColors.border }}>
                            <span>Offline Sync v2.0</span>
                            <span className="font-semibold text-emerald-500">
                              Active
                            </span>
                          </div>
                          <div
                            className="flex items-center justify-between p-1 rounded border"
                            style={{ borderColor: themeColors.border }}>
                            <span>Biometric Auth</span>
                            <span
                              className="font-semibold"
                              style={{ color: themeColors.accentBlue }}>
                              Updated
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className="p-2 rounded-xl border flex items-center justify-between"
                        style={{
                          backgroundColor: themeColors.bgPrimary,
                          borderColor: themeColors.border,
                        }}>
                        <div className="flex items-center space-x-1.5">
                          <Activity className="w-3 h-3 text-emerald-500" />
                          <span
                            className="text-[9px] font-semibold"
                            style={{ color: themeColors.textMain }}>
                            Active Mobile Users
                          </span>
                        </div>
                        <span
                          className="text-[10px] font-extrabold"
                          style={{ color: themeColors.accentBlue }}>
                          1,420+
                        </span>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: FEATURES (FULLY FILLED) */}
                  {mobileTab === "features" && (
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center">
                        <h4
                          className="font-bold text-[10px] uppercase tracking-wider"
                          style={{ color: themeColors.accentBlue }}>
                          Core Capabilities
                        </h4>
                        <span
                          className="text-[9px] font-medium"
                          style={{ color: themeColors.textMuted }}>
                          4 Active Toggles
                        </span>
                      </div>

                      {/* Interactive Feature List */}
                      <div className="space-y-1.5">
                        {[
                          {
                            id: "touchNav",
                            label: "Adaptive Touch Navigation",
                          },
                          {
                            id: "offlineCache",
                            label: "Offline Caching Support",
                          },
                          { id: "biometric", label: "Biometric Quick Login" },
                          {
                            id: "pushNotifs",
                            label: "Push Notifications Sync",
                          },
                        ].map((item) => (
                          <div
                            key={item.id}
                            onClick={() => toggleFeature(item.id, item.label)}
                            className="p-2 rounded-xl border flex items-center justify-between cursor-pointer hover:opacity-90 transition-all"
                            style={{
                              backgroundColor: themeColors.bgPrimary,
                              borderColor: themeColors.border,
                            }}>
                            <div className="flex items-center space-x-2">
                              <CheckCircle2
                                className={`w-3.5 h-3.5 ${featureToggles[item.id] ? "text-emerald-500" : "text-gray-400"}`}
                              />
                              <span
                                className="text-[10px] font-medium"
                                style={{ color: themeColors.textMain }}>
                                {item.label}
                              </span>
                            </div>
                            <div
                              className={`w-6 h-3.5 rounded-full p-0.5 transition-colors flex items-center ${featureToggles[item.id] ? "bg-emerald-500 justify-end" : "bg-gray-300 dark:bg-gray-700 justify-start"}`}>
                              <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Performance Score Widget */}
                      <div
                        className="p-2.5 rounded-xl border space-y-1.5"
                        style={{
                          backgroundColor: themeColors.bgPrimary,
                          borderColor: themeColors.border,
                        }}>
                        <div className="flex justify-between items-center text-[10px]">
                          <span
                            className="font-bold"
                            style={{ color: themeColors.textMain }}>
                            Mobile Performance Score
                          </span>
                          <span className="font-extrabold text-emerald-500">
                            98 / 100
                          </span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                          <div className="h-full w-[98%] rounded-full bg-emerald-500"></div>
                        </div>
                      </div>

                      {/* User Testimonial Card */}
                      <div
                        className="p-2.5 rounded-xl border"
                        style={{
                          backgroundColor: themeColors.bgPrimary,
                          borderColor: themeColors.border,
                        }}>
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <p
                          className="text-[9px] italic leading-tight"
                          style={{ color: themeColors.textMuted }}>
                          "Super fast layout. Loads instantly on low bandwidth
                          network."
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          showNotification("All mobile features activated!")
                        }
                        className="w-full py-1.5 rounded-lg text-[10px] font-semibold text-white shadow-sm active:scale-95 transition-transform"
                        style={{ backgroundColor: themeColors.accentBlue }}>
                        Enable All Features
                      </button>
                    </div>
                  )}

                  {/* TAB 3: CONTACT (FULLY FILLED) */}
                  {mobileTab === "contact" && (
                    <div className="space-y-2.5 py-1">
                      <div className="text-center">
                        <div
                          className="w-8 h-8 rounded-full mx-auto flex items-center justify-center text-white mb-1 shadow-sm"
                          style={{ backgroundColor: themeColors.accentBlue }}>
                          <Mail className="w-4 h-4" />
                        </div>
                        <h4
                          className="font-bold text-xs"
                          style={{ color: themeColors.textMain }}>
                          Need Instant Help?
                        </h4>
                        <p
                          className="text-[9px]"
                          style={{ color: themeColors.textMuted }}>
                          Our support team is active 24/7 online.
                        </p>
                      </div>

                      {/* Direct Channels */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div
                          className="p-2 rounded-lg border text-center cursor-pointer hover:opacity-80"
                          style={{
                            backgroundColor: themeColors.bgPrimary,
                            borderColor: themeColors.border,
                          }}
                          onClick={() =>
                            showNotification("Email Support: Copied!")
                          }>
                          <Mail
                            className="w-3 h-3 mx-auto mb-1"
                            style={{ color: themeColors.accentBlue }}
                          />
                          <span
                            className="text-[9px] font-bold block"
                            style={{ color: themeColors.textMain }}>
                            Email Us
                          </span>
                          <span className="text-[8px] text-gray-400">
                            Response &lt; 15m
                          </span>
                        </div>
                        <div
                          className="p-2 rounded-lg border text-center cursor-pointer hover:opacity-80"
                          style={{
                            backgroundColor: themeColors.bgPrimary,
                            borderColor: themeColors.border,
                          }}
                          onClick={() =>
                            showNotification("Live Agent Connecting...")
                          }>
                          <Phone className="w-3 h-3 mx-auto mb-1 text-emerald-500" />
                          <span
                            className="text-[9px] font-bold block"
                            style={{ color: themeColors.textMain }}>
                            Live Call
                          </span>
                          <span className="text-[8px] text-emerald-500 font-semibold">
                            Agents Online
                          </span>
                        </div>
                      </div>

                      {/* Interactive Mini Contact Form */}
                      <div
                        className="p-2.5 rounded-xl border space-y-2"
                        style={{
                          backgroundColor: themeColors.bgPrimary,
                          borderColor: themeColors.border,
                        }}>
                        <div
                          className="text-[9px] font-bold uppercase tracking-wider"
                          style={{ color: themeColors.accentBlue }}>
                          Send Quick Note
                        </div>

                        <input
                          type="text"
                          placeholder="Your Name / Email"
                          className="w-full text-[10px] p-1.5 rounded-md border bg-transparent focus:outline-none"
                          style={{
                            borderColor: themeColors.border,
                            color: themeColors.textMain,
                          }}
                        />

                        <textarea
                          rows={2}
                          placeholder="How can we help you today?"
                          className="w-full text-[10px] p-1.5 rounded-md border bg-transparent focus:outline-none resize-none"
                          style={{
                            borderColor: themeColors.border,
                            color: themeColors.textMain,
                          }}></textarea>

                        {/* Slow Floating Primary Button */}
                        <button
                          onClick={() =>
                            showNotification("Message Sent! We'll reply soon.")
                          }
                          className="w-full py-1.5 rounded-md text-[10px] font-semibold text-white shadow flex items-center justify-center space-x-1 animate-[bounce_3s_infinite]"
                          style={{ backgroundColor: themeColors.accentBlue }}>
                          <Send className="w-3 h-3" />
                          <span>Submit Request</span>
                        </button>
                      </div>

                      <div
                        className="flex items-center justify-center space-x-1 text-[9px]"
                        style={{ color: themeColors.textMuted }}>
                        <UserCheck className="w-3 h-3 text-emerald-500" />
                        <span>
                          Average response time: <strong>4 mins</strong>
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Bottom Navigation */}
                <div
                  className="py-2 px-3 border-t flex justify-around text-[10px]"
                  style={{
                    backgroundColor: themeColors.bgPrimary,
                    borderColor: themeColors.border,
                  }}>
                  <button
                    onClick={() => setMobileTab("explore")}
                    className={`font-bold transition-colors ${mobileTab === "explore" ? "" : "opacity-60"}`}
                    style={{
                      color:
                        mobileTab === "explore"
                          ? themeColors.accentBlue
                          : themeColors.textMuted,
                    }}>
                    Explore
                  </button>
                  <button
                    onClick={() => setMobileTab("features")}
                    className={`font-bold transition-colors ${mobileTab === "features" ? "" : "opacity-60"}`}
                    style={{
                      color:
                        mobileTab === "features"
                          ? themeColors.accentBlue
                          : themeColors.textMuted,
                    }}>
                    Features
                  </button>
                  <button
                    onClick={() => setMobileTab("contact")}
                    className={`font-bold transition-colors ${mobileTab === "contact" ? "" : "opacity-60"}`}
                    style={{
                      color:
                        mobileTab === "contact"
                          ? themeColors.accentBlue
                          : themeColors.textMuted,
                    }}>
                    Contact
                  </button>
                </div>
              </div>

              {/* Home Bar */}
              <div className="w-28 h-1 bg-gray-500 rounded-full mx-auto mt-1.5"></div>
            </div>
          </div>

          {/* ================= LAPTOP DEVICE MOCKUP ================= */}
          <div
            onPointerMove={tiltDevice}
            onPointerLeave={resetDeviceTilt}
            className={`device-laptop-wrap ${activeDevice === "laptop" ? "device-active" : "device-inactive"}`}
            aria-hidden={activeDevice !== "laptop"}>
            <div
              className="w-full max-w-4xl rounded-2xl border-2 sm:border-4 p-2.5 sm:p-4 relative shadow-2xl transition-all"
              style={{
                backgroundColor: themeColors.bgPrimary,
                borderColor: themeColors.border,
              }}>
              {/* Laptop Browser Header */}
              <div
                className="flex items-center justify-between pb-2.5 border-b mb-3 sm:mb-4"
                style={{ borderColor: themeColors.border }}>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <div
                  className="px-3 sm:px-6 py-0.5 rounded-md text-[10px] sm:text-xs border flex items-center space-x-1 shadow-inner max-w-[200px] sm:max-w-xs justify-center truncate"
                  style={{
                    backgroundColor: themeColors.bgSecondary,
                    color: themeColors.textMuted,
                    borderColor: themeColors.border,
                  }}>
                  <span className="text-[9px] text-emerald-500 font-bold hidden sm:inline">
                    https://
                  </span>
                  <span>yourwebsite.com/{laptopTab}</span>
                </div>
                <div className="w-4"></div>
              </div>

              {/* Laptop Screen Content Container */}
              <div
                className="rounded-xl p-3 sm:p-5 border shadow-inner text-left relative overflow-hidden"
                style={{
                  backgroundColor: themeColors.bgSecondary,
                  borderColor: themeColors.border,
                }}>
                {/* FLOATING TOAST NOTIFICATION FOR LAPTOP */}
                {toastMessage && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300">
                    <div className="bg-gray-900/95 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl border border-gray-700 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{toastMessage}</span>
                    </div>
                  </div>
                )}

                {/* Laptop Navbar */}
                <div
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-4 border-b"
                  style={{ borderColor: themeColors.border }}>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow"
                      style={{ backgroundColor: themeColors.accentBlue }}>
                      S
                    </div>
                    <span
                      className="font-extrabold text-sm sm:text-base"
                      style={{ color: themeColors.textMain }}>
                      SaaSify Pro
                    </span>
                  </div>

                  {/* Tab Navigation links */}
                  <div
                    className="flex items-center space-x-3 sm:space-x-6 text-[11px] sm:text-xs font-medium overflow-x-auto w-full sm:w-auto py-1"
                    style={{ color: themeColors.textMuted }}>
                    {["overview", "solutions", "analytics", "pricing"].map(
                      (tab) => (
                        <span
                          key={tab}
                          onClick={() => setLaptopTab(tab)}
                          className={`capitalize cursor-pointer transition-colors pb-0.5 border-b-2 shrink-0 ${laptopTab === tab ? "font-bold" : "border-transparent"}`}
                          style={{
                            borderColor:
                              laptopTab === tab
                                ? themeColors.accentBlue
                                : "transparent",
                            color:
                              laptopTab === tab
                                ? themeColors.textMain
                                : themeColors.textMuted,
                          }}>
                          {tab}
                        </span>
                      ),
                    )}
                  </div>

                  {/* Standard Static Action Button */}
                  <button
                    onClick={() =>
                      showNotification(
                        `Desktop ${laptopTab.toUpperCase()} View Updated!`,
                      )
                    }
                    className="hidden sm:inline-flex px-3 py-1 rounded-lg text-xs font-semibold text-white shadow hover:brightness-110 active:scale-95 transition-transform"
                    style={{ backgroundColor: themeColors.accentBlue }}>
                    Action Button
                  </button>
                </div>

                {/* Laptop Tab Content Grid */}
                {laptopTab === "overview" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-2">
                    <div>
                      <div
                        className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-semibold mb-2"
                        style={{
                          backgroundColor: `${themeColors.accentBlue}20`,
                          color: themeColors.accentBlue,
                        }}>
                        <Star className="w-3 h-3 fill-current" />
                        <span>Overview Dashboard</span>
                      </div>
                      <h3
                        className="text-lg sm:text-2xl font-black tracking-tight"
                        style={{ color: themeColors.textMain }}>
                        Manage everything from one screen.
                      </h3>
                      <p
                        className="text-[11px] sm:text-xs mt-1.5 leading-relaxed"
                        style={{ color: themeColors.textMuted }}>
                        Multi-column workspace layout optimized for maximum
                        desktop productivity and control.
                      </p>
                    </div>

                    <div
                      className="p-3 sm:p-4 rounded-xl border shadow-sm space-y-2.5"
                      style={{
                        backgroundColor: themeColors.bgPrimary,
                        borderColor: themeColors.border,
                      }}>
                      <div
                        className="flex items-center justify-between text-xs font-bold"
                        style={{ color: themeColors.textMain }}>
                        <span>System Load</span>
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: `${themeColors.accentBlue}15`,
                            color: themeColors.accentBlue,
                          }}>
                          Live
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-full w-4/5 rounded-full"
                          style={{
                            backgroundColor: themeColors.accentBlue,
                          }}></div>
                      </div>
                      <div
                        className="pt-1 flex justify-between text-[10px]"
                        style={{ color: themeColors.textMuted }}>
                        <span>Status: Stable</span>
                        <span
                          className="font-semibold"
                          style={{ color: themeColors.textMain }}>
                          100% Operational
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* SELECTABLE SOLUTIONS GRID WITH HIGHLIGHTS */}
                {laptopTab === "solutions" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2">
                    <div
                      className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all duration-200 relative ${
                        selectedSolution === "cdn"
                          ? "ring-2 shadow-md scale-[1.02]"
                          : "hover:opacity-90"
                      }`}
                      style={{
                        backgroundColor: themeColors.bgPrimary,
                        borderColor:
                          selectedSolution === "cdn"
                            ? themeColors.accentBlue
                            : themeColors.border,
                        ringColor: themeColors.accentBlue,
                      }}
                      onClick={() => {
                        setSelectedSolution("cdn");
                        showNotification("Global CDN Selected");
                      }}>
                      {selectedSolution === "cdn" && (
                        <div
                          className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px]"
                          style={{ backgroundColor: themeColors.accentBlue }}>
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <Globe
                        className="w-5 h-5 mx-auto mb-1.5"
                        style={{ color: themeColors.accentBlue }}
                      />
                      <h4
                        className="font-bold text-xs"
                        style={{ color: themeColors.textMain }}>
                        Global CDN
                      </h4>
                      <p
                        className="text-[10px] mt-0.5"
                        style={{ color: themeColors.textMuted }}>
                        Click to test edge server.
                      </p>
                    </div>

                    <div
                      className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all duration-200 relative ${
                        selectedSolution === "grid"
                          ? "ring-2 shadow-md scale-[1.02]"
                          : "hover:opacity-90"
                      }`}
                      style={{
                        backgroundColor: themeColors.bgPrimary,
                        borderColor:
                          selectedSolution === "grid"
                            ? "#10b981"
                            : themeColors.border,
                        ringColor: "#10b981",
                      }}
                      onClick={() => {
                        setSelectedSolution("grid");
                        showNotification("Modular Grid Configured");
                      }}>
                      {selectedSolution === "grid" && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[9px]">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <Layers className="w-5 h-5 mx-auto mb-1.5 text-emerald-500" />
                      <h4
                        className="font-bold text-xs"
                        style={{ color: themeColors.textMain }}>
                        Modular Grid
                      </h4>
                      <p
                        className="text-[10px] mt-0.5"
                        style={{ color: themeColors.textMuted }}>
                        Click to organize modules.
                      </p>
                    </div>

                    <div
                      className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all duration-200 relative ${
                        selectedSolution === "sync"
                          ? "ring-2 shadow-md scale-[1.02]"
                          : "hover:opacity-90"
                      }`}
                      style={{
                        backgroundColor: themeColors.bgPrimary,
                        borderColor:
                          selectedSolution === "sync"
                            ? "#f59e0b"
                            : themeColors.border,
                        ringColor: "#f59e0b",
                      }}
                      onClick={() => {
                        setSelectedSolution("sync");
                        showNotification("Database Synced!");
                      }}>
                      {selectedSolution === "sync" && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-white text-[9px]">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <Zap className="w-5 h-5 mx-auto mb-1.5 text-amber-500" />
                      <h4
                        className="font-bold text-xs"
                        style={{ color: themeColors.textMain }}>
                        Instant Sync
                      </h4>
                      <p
                        className="text-[10px] mt-0.5"
                        style={{ color: themeColors.textMuted }}>
                        Click to force sync.
                      </p>
                    </div>
                  </div>
                )}

                {/* SELECTABLE PERFORMANCE METRICS */}
                {laptopTab === "analytics" && (
                  <div className="py-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4
                        className="font-bold text-xs sm:text-sm"
                        style={{ color: themeColors.textMain }}>
                        Performance Metrics
                      </h4>
                      <BarChart3
                        className="w-4 h-4"
                        style={{ color: themeColors.accentBlue }}
                      />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                      {[
                        {
                          id: "traffic",
                          label: "Traffic",
                          value: "48.2K",
                          color: themeColors.textMain,
                          msg: "48,200 Unique Visitors",
                        },
                        {
                          id: "bounce",
                          label: "Bounce",
                          value: "12.4%",
                          color: "#10b981",
                          msg: "Bounce Rate: Ultra Low",
                        },
                        {
                          id: "conversions",
                          label: "Conversions",
                          value: "6.8%",
                          color: themeColors.accentBlue,
                          msg: "Conversions up +2.4%",
                        },
                        {
                          id: "speed",
                          label: "Speed",
                          value: "0.4s",
                          color: "#f59e0b",
                          msg: "Page Load Speed: 0.4s",
                        },
                      ].map((m) => (
                        <div
                          key={m.id}
                          className={`p-2.5 sm:p-3 rounded-lg border cursor-pointer transition-all ${
                            selectedMetric === m.id
                              ? "ring-2 scale-105 shadow-md"
                              : "hover:opacity-80"
                          }`}
                          style={{
                            backgroundColor: themeColors.bgPrimary,
                            borderColor:
                              selectedMetric === m.id
                                ? themeColors.accentBlue
                                : themeColors.border,
                            ringColor: themeColors.accentBlue,
                          }}
                          onClick={() => {
                            setSelectedMetric(m.id);
                            showNotification(m.msg);
                          }}>
                          <span className="text-[10px] text-gray-400 block">
                            {m.label}
                          </span>
                          <span
                            className="font-bold text-xs sm:text-sm"
                            style={{ color: m.color }}>
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SELECTABLE PRICING OPTIONS */}
                {laptopTab === "pricing" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
                    <div
                      className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all ${
                        selectedPlan === "starter"
                          ? "ring-2 shadow-md"
                          : "hover:opacity-90"
                      }`}
                      style={{
                        backgroundColor: themeColors.bgPrimary,
                        borderColor:
                          selectedPlan === "starter"
                            ? themeColors.accentBlue
                            : themeColors.border,
                      }}
                      onClick={() => {
                        setSelectedPlan("starter");
                        showNotification("Starter Plan Selected!");
                      }}>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        Starter
                      </span>
                      <h4
                        className="text-base sm:text-lg font-black my-0.5"
                        style={{ color: themeColors.textMain }}>
                        $19<span className="text-[10px] font-normal">/mo</span>
                      </h4>
                      <button
                        className={`mt-1.5 px-3 py-1 rounded text-[10px] font-bold border transition-colors ${
                          selectedPlan === "starter"
                            ? "text-white border-transparent"
                            : ""
                        }`}
                        style={{
                          backgroundColor:
                            selectedPlan === "starter"
                              ? themeColors.accentBlue
                              : "transparent",
                          borderColor: themeColors.border,
                          color:
                            selectedPlan === "starter"
                              ? "#fff"
                              : themeColors.textMain,
                        }}>
                        {selectedPlan === "starter"
                          ? "Active Plan"
                          : "Select Plan"}
                      </button>
                    </div>

                    <div
                      className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all relative ${
                        selectedPlan === "pro"
                          ? "ring-2 shadow-md"
                          : "hover:opacity-90"
                      }`}
                      style={{
                        backgroundColor: themeColors.bgPrimary,
                        borderColor: themeColors.accentBlue,
                      }}
                      onClick={() => {
                        setSelectedPlan("pro");
                        showNotification("Pro Business Plan Selected!");
                      }}>
                      <span
                        className="text-[10px] font-bold uppercase"
                        style={{ color: themeColors.accentBlue }}>
                        Pro Business
                      </span>
                      <h4
                        className="text-base sm:text-lg font-black my-0.5"
                        style={{ color: themeColors.textMain }}>
                        $49<span className="text-[10px] font-normal">/mo</span>
                      </h4>
                      <button
                        className="mt-1.5 px-3 py-1 rounded text-[10px] font-bold text-white shadow-sm"
                        style={{ backgroundColor: themeColors.accentBlue }}>
                        {selectedPlan === "pro" ? "Active Plan" : "Get Started"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Laptop Base Stand */}
              <div className="mt-3 mx-auto w-28 sm:w-36 h-1.5 sm:h-2 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
