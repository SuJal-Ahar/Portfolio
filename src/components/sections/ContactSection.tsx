"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeader } from "@/components/common/SectionHeader";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Pre-fill and open mailto link
      const emailSubject = encodeURIComponent(
        formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
      );
      const emailBody = encodeURIComponent(
        `Hi Sujal,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );

      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
      setIsSubmitted(true);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" aria-label="Contact Information" className="scroll-mt-28">
      <SectionHeader
        number="07"
        tagline="Get In Touch"
        title="Let's Build Something"
        subtitle="Have an interesting problem to solve, an architectural discussion, or a software opportunity? Feel free to reach out directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels (Col 1-5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-7 shadow-xl">
            <h3 className="font-editorial text-xl font-bold uppercase text-white mb-6">
              Direct Channels
            </h3>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#141312] border border-[#242220] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#262422] text-[#FF713B] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E9A95]">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#FF713B] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-[#1E1D1B] hover:bg-[#262422] text-[#9E9A95] hover:text-white transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#141312] border border-[#242220] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#262422] text-[#FF713B] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E9A95]">
                      Phone
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#FF713B] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  aria-label="Call phone number"
                  className="p-2 rounded-lg bg-[#1E1D1B] hover:bg-[#262422] text-[#9E9A95] hover:text-white transition-colors shrink-0"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#141312] border border-[#242220] flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#262422] text-[#FF713B] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E9A95]">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 mt-6 border-t border-[#2A2826]">
              <div className="text-xs font-mono text-[#9E9A95] mb-3 uppercase tracking-wider">
                Professional Networks
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#141312] border border-[#242220] text-xs font-mono text-white hover:border-[#FF713B] hover:text-[#FF713B] transition-all"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#141312] border border-[#242220] text-xs font-mono text-white hover:border-[#0077B5] hover:text-[#0077B5] transition-all"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with client-side verification & mailto launcher (Col 6-12) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-8 lg:p-10 shadow-xl space-y-5"
          >
            <div className="flex items-center justify-between border-b border-[#2A2826] pb-4">
              <h3 className="font-editorial text-xl font-bold uppercase text-white">
                Send a Direct Message
              </h3>
              <span className="text-[11px] font-mono text-[#9E9A95]">
                Direct Mail Dispatch
              </span>
            </div>

            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-[#9E9A95] mb-2"
              >
                Your Name <span className="text-[#FF713B]">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                placeholder="e.g. Alex Henderson"
                className="w-full px-4 py-3 rounded-xl bg-[#121110] border border-[#2A2826] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#FF713B] transition-colors"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-[#9E9A95] mb-2"
              >
                Your Email <span className="text-[#FF713B]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="alex@domain.com"
                className="w-full px-4 py-3 rounded-xl bg-[#121110] border border-[#2A2826] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#FF713B] transition-colors"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-mono uppercase tracking-wider text-[#9E9A95] mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Project collaboration / Tech discussion"
                className="w-full px-4 py-3 rounded-xl bg-[#121110] border border-[#2A2826] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#FF713B] transition-colors"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider text-[#9E9A95] mb-2"
              >
                Message <span className="text-[#FF713B]">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                placeholder="Write your note or project description here..."
                className="w-full px-4 py-3 rounded-xl bg-[#121110] border border-[#2A2826] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#FF713B] transition-colors resize-y"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Feedback alert after submit */}
            {isSubmitted && (
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Opening your default mail client with your prefilled message to sujalahar@gmail.com!
                </span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#FF713B] hover:bg-[#FF8554] text-white font-semibold text-sm transition-all duration-200 active:scale-[0.99] shadow-lg shadow-[#FF713B]/20 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Launch Email Client</span>
            </button>

            <p className="text-[11px] text-zinc-500 font-mono text-center">
              Direct connection via mailto protocol &bull; No third-party data tracking
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
