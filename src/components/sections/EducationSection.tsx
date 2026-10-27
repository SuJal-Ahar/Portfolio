"use client";

import React from "react";
import { EDUCATION_LIST } from "@/data/portfolioData";
import { SectionHeader } from "@/components/common/SectionHeader";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" aria-label="Academic Background" className="scroll-mt-28">
      <SectionHeader
        number="06"
        tagline="Academic Qualifications"
        title="Education"
        subtitle="Formal education in Information Technology at an Institute of National Importance and school foundations in Raipur."
      />

      <div className="space-y-6">
        {EDUCATION_LIST.map((edu, idx) => {
          const isCollege = idx === 0;

          return (
            <div
              key={idx}
              className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-8 hover:border-[#3E3B38] transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {isCollege && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-[#FF713B]/10 to-transparent pointer-events-none" />
              )}

              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-[#262422] text-[#FF713B]">
                      <GraduationCap className="w-5 h-5" />
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                      {edu.institution}
                    </h3>
                  </div>
                  <div className="text-base sm:text-lg font-medium text-[#FF713B] pl-11">
                    {edu.degree} {edu.field && `• ${edu.field}`}
                  </div>
                </div>

                {/* Score Pill */}
                <div className="px-4 py-2 rounded-2xl bg-[#141312] border border-[#242220] text-right">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E9A95]">
                    {edu.scoreLabel}
                  </div>
                  <div className="font-editorial text-xl font-extrabold text-white">
                    {edu.score}
                  </div>
                </div>
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9E9A95] pl-11 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FF713B]" />
                  <span>{edu.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF713B]" />
                  <span>{edu.location}</span>
                </span>
              </div>

              {/* Highlights */}
              {edu.highlights && (
                <div className="pl-11 pt-2 space-y-1.5">
                  {edu.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="text-xs sm:text-sm text-[#9E9A95] flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF713B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
