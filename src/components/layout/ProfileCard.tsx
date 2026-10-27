"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Code,
  Trophy,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ProfileCard: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <aside
      aria-label="Author Profile"
      className="bg-white text-zinc-900 rounded-[28px] p-6 lg:p-7 shadow-2xl border border-zinc-200/80 flex flex-col justify-between h-full relative overflow-hidden"
    >
      {/* Decorative top orange accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF713B] via-[#FF8554] to-[#FFA116]" />

      <div>
        {/* Profile Image with Rounded Container */}
        <div className="relative mb-6 group">
          <div className="w-full aspect-square max-h-[290px] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 relative border border-zinc-200 shadow-inner flex items-center justify-center">
            {!imageError ? (
              <Image
                src={PERSONAL_INFO.portraitUrl}
                alt={PERSONAL_INFO.name}
                width={360}
                height={360}
                priority
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-white p-6 text-center">
                <span className="font-editorial text-4xl font-extrabold text-[#FF713B]">
                  SA
                </span>
                <span className="text-xs text-zinc-400 mt-2 font-mono">
                  Sujal Ahar
                </span>
              </div>
            )}

            {/* Floating status badge */}
            <div className="absolute bottom-3 left-3 bg-zinc-900/90 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-full flex items-center gap-2 border border-zinc-700/60 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#FF713B] animate-pulse" />
              <span>NIT Raipur &apos;27</span>
            </div>
          </div>
        </div>

        {/* Identity Details */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center justify-between">
            <h1 className="font-editorial text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-zinc-950">
              {PERSONAL_INFO.name}
            </h1>
            <span
              className="text-[#FF713B] p-1.5 rounded-full bg-[#FF713B]/10"
              title="Full-Stack Engineer"
            >
              <Sparkles className="w-4 h-4" />
            </span>
          </div>

          <p className="text-sm font-semibold text-zinc-700 leading-snug">
            {PERSONAL_INFO.role}
          </p>

          <p className="text-xs text-zinc-500 leading-relaxed pt-1">
            {PERSONAL_INFO.shortBio}
          </p>
        </div>

        {/* Quick Location & Education Tags */}
        <div className="space-y-1.5 mb-6 text-xs text-zinc-600 font-mono">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#FF713B] shrink-0" />
            <span className="truncate">NIT Raipur (B.Tech IT • 7.66 CGPA)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#FF713B] shrink-0" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
            <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] font-mono mb-1">
              <Code className="w-3.5 h-3.5 text-[#FFA116]" />
              <span>Problems</span>
            </div>
            <div className="font-editorial font-bold text-lg text-zinc-900">
              {PERSONAL_INFO.totalProblemsSolved}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
            <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] font-mono mb-1">
              <Trophy className="w-3.5 h-3.5 text-[#FF713B]" />
              <span>LeetCode</span>
            </div>
            <div className="font-editorial font-bold text-lg text-zinc-900">
              Knight (1890)
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Action CTAs */}
      <div className="space-y-3 pt-3 border-t border-zinc-200">
        {/* Social Icons Row */}
        <div className="flex items-center justify-between px-1">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 hover:bg-[#FF713B] hover:text-white transition-colors duration-200"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 hover:bg-[#0077B5] hover:text-white transition-colors duration-200"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email Sujal Ahar"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 hover:bg-[#FF713B] hover:text-white transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            aria-label="Call Sujal Ahar"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 hover:bg-[#FF713B] hover:text-white transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Direct Connect Button */}
        <a
          href="#contact"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-950 text-white hover:bg-[#FF713B] font-medium text-sm transition-all duration-200 active:scale-[0.98] shadow-md"
        >
          <span>Get in Touch</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
