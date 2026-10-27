"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Monitor,
  BookOpen,
  Sparkles,
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 text-[#FF713B]" />;
      case 1:
        return <Layout className="w-4 h-4 text-[#FF713B]" />;
      case 2:
        return <Server className="w-4 h-4 text-[#FF713B]" />;
      case 3:
        return <Database className="w-4 h-4 text-[#FF713B]" />;
      case 4:
        return <Wrench className="w-4 h-4 text-[#FF713B]" />;
      case 5:
        return <Monitor className="w-4 h-4 text-[#FF713B]" />;
      case 6:
        return <BookOpen className="w-4 h-4 text-[#FF713B]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#FF713B]" />;
    }
  };

  return (
    <section id="skills" aria-label="Technical Skills" className="scroll-mt-28">
      <SectionHeader
        number="03"
        tagline="Core Competencies"
        title="Technical Skills"
        subtitle="Comprehensive technical stack covering system software, full-stack web engineering, database architecture, and computer science foundations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-7 hover:border-[#3E3B38] transition-all duration-300 shadow-lg group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#2A2826]">
              <div className="p-2 rounded-xl bg-[#262422] group-hover:bg-[#FF713B]/10 transition-colors">
                {getCategoryIcon(idx)}
              </div>
              <h3 className="font-editorial text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#FF713B] transition-colors">
                {cat.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-2.5">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#141312]/70 border border-[#242220] hover:border-[#33302C] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-medium text-white font-mono">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-[11px] font-mono text-[#9E9A95] px-2 py-0.5 rounded bg-[#1E1D1B] border border-[#2A2826]">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
