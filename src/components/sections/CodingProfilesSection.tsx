"use client";

import React from "react";
import { CODING_PROFILES, PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ExternalLink, Flame, Award, Code2 } from "lucide-react";

export const CodingProfilesSection: React.FC = () => {
  return (
    <section id="coding" aria-label="Competitive Programming Profiles" className="scroll-mt-28">
      <SectionHeader
        number="04"
        tagline="Algorithmic Mastery"
        title="Coding Profiles"
        subtitle="Consistent problem-solving track record across major algorithmic platforms with over 1,400+ problems solved."
      />

      {/* Aggregate Banner */}
      <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-[#1A1918] via-[#201E1C] to-[#1A1918] border border-[#FF713B]/30 flex flex-wrap items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FF713B]/10 border border-[#FF713B]/30 flex items-center justify-center text-[#FF713B]">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-3xl font-extrabold text-white">
              {PERSONAL_INFO.totalProblemsSolved} Problems Solved
            </div>
            <div className="text-xs sm:text-sm text-[#9E9A95] font-mono mt-0.5">
              LeetCode &bull; Codeforces &bull; CodeChef
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#FF713B] bg-[#FF713B]/10 px-4 py-2 rounded-full border border-[#FF713B]/20">
          <Award className="w-4 h-4" />
          <span>Resume-Verified Platform Ratings</span>
        </div>
      </div>

      {/* Profile Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CODING_PROFILES.map((profile) => (
          <a
            key={profile.platform}
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-7 hover:border-[#FF713B]/60 hover:bg-[#201F1D] transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: profile.color }}
                  >
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="font-editorial text-lg font-bold uppercase text-white">
                    {profile.platform}
                  </span>
                </div>

                <ExternalLink className="w-4 h-4 text-[#9E9A95] group-hover:text-[#FF713B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Rating Box */}
              <div className="my-5 p-4 rounded-2xl bg-[#141312] border border-[#242220]">
                <div className="text-xs font-mono text-[#9E9A95] mb-1">
                  Max Rating / Tier
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-editorial text-3xl font-extrabold text-white">
                    {profile.rating}
                  </span>
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                    style={{
                      color: profile.color,
                      backgroundColor: profile.accentBg,
                    }}
                  >
                    {profile.tier}
                  </span>
                </div>
              </div>

              {/* Highlight / Details */}
              <p className="text-xs text-[#9E9A95] leading-relaxed mb-4">
                {profile.highlightText}
              </p>
            </div>

            {/* Handle footer */}
            <div className="pt-4 border-t border-[#2A2826] flex items-center justify-between text-xs font-mono text-[#9E9A95] group-hover:text-white transition-colors">
              <span>@{profile.username}</span>
              <span className="text-[#FF713B] group-hover:underline">Visit Profile &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
