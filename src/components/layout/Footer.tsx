"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 pt-10 pb-16 border-t border-[#2A2826] text-xs font-mono text-[#9E9A95]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-white font-editorial font-bold text-sm">
            <span>SUJAL AHAR</span>
            <span className="text-[#FF713B]">&bull;</span>
            <span className="text-xs font-mono text-[#9E9A95]">
              NIT Raipur &apos;27
            </span>
          </div>
          <p className="mt-1 text-[11px] text-zinc-500">
            Engineered with Next.js 16, TypeScript, Tailwind CSS &amp; Motion.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-white transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-white transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-2 rounded-lg bg-[#1E1D1B] border border-[#2A2826] hover:border-[#FF713B] hover:text-[#FF713B] transition-colors ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
