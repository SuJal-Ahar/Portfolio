"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { DottedPath } from "@/components/common/DottedPath";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import {
  ArrowDownRight,
  Send,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative pt-2 pb-8 scroll-mt-28"
    >
      {/* Subtle geometric background motif */}
      <div className="absolute -top-12 -right-8 w-64 h-64 bg-radial-gradient from-[#FF713B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Intro Pill Tag */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Badge variant="orange" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Full-Stack &amp; AI Systems
        </Badge>
        <span className="font-mono text-xs text-[#9E9A95]">
          NIT Raipur • IT 2023–2027
        </span>
      </div>

      {/* Main Editorial Headline */}
      <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.08] mb-8">
        BUILDING SOFTWARE{" "}
        <span className="text-[#FF713B] inline-block hover:scale-[1.02] transition-transform">
          THAT SOLVES
        </span>{" "}
        <span className="text-[#9E9A95]">REAL PROBLEMS.</span>
      </h1>

      {/* Introduction paragraph */}
      <div className="space-y-4 text-base sm:text-lg text-[#9E9A95] leading-relaxed max-w-2xl mb-10">
        <p>
          I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a software developer focusing on{" "}
          <span className="text-white">full-stack architecture</span>,{" "}
          <span className="text-white">high-throughput backends</span>, and{" "}
          <span className="text-white">AI-powered applications</span>.
        </p>
        <p>
          Currently in my 3rd year of Information Technology at{" "}
          <span className="text-[#EDEDED]">National Institute of Technology Raipur</span> (CGPA 7.66). Passionate about competitive programming with{" "}
          <span className="text-[#FF713B] font-mono font-medium">1,400+ problems solved</span> and real-world system design.
        </p>
      </div>

      {/* Call to Actions & Social Connect */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <Button
          href="#projects"
          variant="primary"
          size="lg"
          icon={<ArrowDownRight className="w-4 h-4" />}
        >
          Explore Projects
        </Button>

        <Button
          href="#contact"
          variant="dark"
          size="lg"
          icon={<Send className="w-4 h-4 text-[#FF713B]" />}
        >
          Get in Touch
        </Button>

        <div className="flex items-center gap-2 ml-auto sm:ml-2 pt-2 sm:pt-0">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sujal Ahar GitHub"
            className="p-3 rounded-full bg-[#1E1D1B] border border-[#2A2826] text-[#9E9A95] hover:text-white hover:border-[#FF713B] transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sujal Ahar LinkedIn"
            className="p-3 rounded-full bg-[#1E1D1B] border border-[#2A2826] text-[#9E9A95] hover:text-[#0077B5] hover:border-[#0077B5] transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>

      {/* Quick Core Pillars Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#1A1918] border border-[#2A2826] relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-[#262422] text-[#FF713B] shrink-0">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white font-editorial uppercase">
              AI Intelligence
            </div>
            <div className="text-xs text-[#9E9A95] mt-0.5">
              RAG, FastEmbed &amp; Qdrant vector search
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-[#2A2826] pt-3 sm:pt-0 sm:pl-4">
          <div className="p-2 rounded-xl bg-[#262422] text-[#FF713B] shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white font-editorial uppercase">
              Full-Stack Systems
            </div>
            <div className="text-xs text-[#9E9A95] mt-0.5">
              Next.js, React, Node.js &amp; FastAPI
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-[#2A2826] pt-3 sm:pt-0 sm:pl-4">
          <div className="p-2 rounded-xl bg-[#262422] text-[#FF713B] shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white font-editorial uppercase">
              Algorithmic Depth
            </div>
            <div className="text-xs text-[#9E9A95] mt-0.5">
              1,400+ CP problems &amp; Knight rating
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Dotted Path */}
      <DottedPath className="mt-8" />
    </section>
  );
};
