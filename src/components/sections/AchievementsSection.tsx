"use client";

import React from "react";
import Image from "next/image";
import { ACHIEVEMENTS, LEADERSHIP } from "@/data/portfolioData";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { Trophy, Users, Calendar, CheckCircle2, Award } from "lucide-react";

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" aria-label="Achievements & Leadership" className="scroll-mt-28">
      <SectionHeader
        number="05"
        tagline="Honors & Responsibility"
        title="Achievements & Leadership"
        subtitle="National hackathon recognition, algorithmic milestones, and leadership in institute sports administration."
      />

      <div className="space-y-12">
        {/* National Hackathon Feature Card */}
        <div className="rounded-3xl bg-[#1A1918] border border-[#2A2826] overflow-hidden shadow-2xl hover:border-[#3E3B38] transition-all duration-300">
          <div className="h-1 bg-gradient-to-r from-amber-500 via-[#FF713B] to-amber-500" />

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <Trophy className="w-5 h-5" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  National Hackathon Honor
                </span>
              </div>
              <span className="font-mono text-xs text-[#9E9A95]">
                November 6–7, 2025
              </span>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="lg:col-span-7 mb-8 lg:mb-0 space-y-4">
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white">
                  Overall 1st Runner-Up • CodeUtsava 9.0
                </h3>
                <div className="text-sm font-semibold text-[#FF713B]">
                  Organized by Turing Club of Programmers (TCP), NIT Raipur &amp; Smart India Hackathon
                </div>
                <p className="text-sm sm:text-base text-[#9E9A95] leading-relaxed">
                  Competed against teams from universities nationwide with team{" "}
                  <strong className="text-white">Vibe Coders</strong>. Engineered INVOX, an automated AI invoice ingestion and OCR/NLP extraction pipeline, solving real-world enterprise accounting challenges under intense 24-hour hackathon conditions.
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  <Badge variant="orange" size="sm">Team Vibe Coders</Badge>
                  <Badge variant="neutral" size="sm">National-Level</Badge>
                  <Badge variant="neutral" size="sm">INVOX Pipeline</Badge>
                  <Badge variant="neutral" size="sm">NIT Raipur</Badge>
                </div>
              </div>

              {/* Certificate Preview */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#2E2C2A] bg-black shadow-lg relative group/cert">
                  <Image
                    src="/assets/codeutsava-certificate.png"
                    alt="CodeUtsava 9.0 Certificate of Achievement - Sujal Ahar"
                    width={600}
                    height={420}
                    className="w-full h-auto object-cover group-hover/cert:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#121110]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-mono text-[#EDEDED] text-center border border-[#2A2826]">
                    Official Certificate of Achievement &bull; 1st Runner-Up
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Milestone Card: 1400+ Problems */}
        {ACHIEVEMENTS.length > 1 && (
          <div className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-8 hover:border-[#3E3B38] transition-all duration-300 shadow-xl flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#FF713B]/10 text-[#FF713B] border border-[#FF713B]/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#FF713B] uppercase tracking-wider font-semibold">
                  {ACHIEVEMENTS[1].badge}
                </span>
                <h4 className="font-editorial text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                  {ACHIEVEMENTS[1].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#9E9A95] mt-1 max-w-xl">
                  {ACHIEVEMENTS[1].description}
                </p>
              </div>
            </div>

            <div className="font-mono text-xs text-[#9E9A95] bg-[#141312] px-4 py-2 rounded-xl border border-[#242220]">
              {ACHIEVEMENTS[1].organization}
            </div>
          </div>
        )}

        {/* Leadership Cards */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#9E9A95] font-semibold mb-6 flex items-center gap-2">
            <Users className="w-4 h-4 text-[#FF713B]" />
            <span>Institute Leadership &amp; Positions of Responsibility</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP.map((lead, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-7 hover:border-[#3E3B38] transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold text-[#FF713B] bg-[#FF713B]/10 px-3 py-1 rounded-full border border-[#FF713B]/20">
                    {lead.badge}
                  </span>
                  <span className="font-mono text-xs text-[#9E9A95] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{lead.date}</span>
                  </span>
                </div>

                <h4 className="font-editorial text-xl font-bold uppercase text-white mt-2">
                  {lead.title}
                </h4>
                <div className="text-sm font-semibold text-[#9E9A95] mt-0.5">
                  {lead.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-[#9E9A95] leading-relaxed mt-4">
                  {lead.description}
                </p>

                <div className="mt-5 pt-4 border-t border-[#2A2826] space-y-2 text-xs text-[#9E9A95]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF713B] shrink-0 mt-0.5" />
                    <span>Tournament logistics, registration systems, and fixture operations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF713B] shrink-0 mt-0.5" />
                    <span>Inter-branch &amp; inter-college team coordination and ceremonies</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
