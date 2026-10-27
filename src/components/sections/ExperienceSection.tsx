"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" aria-label="Work Experience" className="scroll-mt-28 w-full">
      <SectionHeader
        number="03"
        tagline="Industry Internship"
        title="Work Experience"
        subtitle="Practical engineering experience developing full-stack web platforms, responsive user interfaces, and REST API services."
      />

      <div className="relative border-l-2 border-[#2A2826] ml-4 sm:ml-6 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#121110] border-2 border-[#FF713B] flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF713B]" />
            </div>

            <div className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-8 hover:border-[#3E3B38] transition-all duration-300 shadow-xl w-full">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-editorial text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#FF713B] transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-base font-semibold text-[#FF713B] mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#9E9A95]">
                  <span className="inline-flex items-center gap-1.5 bg-[#1E1D1B] px-3 py-1 rounded-full border border-[#2A2826]">
                    <Calendar className="w-3.5 h-3.5 text-[#FF713B]" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#1E1D1B] px-3 py-1 rounded-full border border-[#2A2826]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF713B]" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#9E9A95] font-semibold">
                  Engineering Contributions:
                </div>
                <ul className="space-y-2.5">
                  {exp.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-[#9E9A95] flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF713B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-[#2A2826] flex flex-wrap items-center gap-1.5">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="neutral" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
