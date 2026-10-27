"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolioData";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { GithubIcon } from "@/components/common/Icons";
import {
  ExternalLink,
  Cpu,
  Trophy,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          activeTab === "ai"
            ? p.id === "systemlens" || p.id === "invox"
            : p.id === "vault-armor"
        );

  return (
    <section id="projects" aria-label="Selected Projects" className="scroll-mt-28">
      <SectionHeader
        number="01"
        tagline="Production & Systems Engineering"
        title="Selected Projects"
        subtitle="Full-stack architectures, high-precision retrieval engines, and cryptographic security systems engineered with verifiable technical benchmarks."
      />

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab("all")}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer",
            activeTab === "all"
              ? "bg-[#FF713B] text-white font-semibold"
              : "bg-[#1E1D1B] text-[#9E9A95] hover:text-white border border-[#2A2826]"
          )}
        >
          All Projects ({PROJECTS.length})
        </button>
        <button
          onClick={() => setActiveTab("ai")}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer",
            activeTab === "ai"
              ? "bg-[#FF713B] text-white font-semibold"
              : "bg-[#1E1D1B] text-[#9E9A95] hover:text-white border border-[#2A2826]"
          )}
        >
          AI &amp; RAG Pipelines (2)
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer",
            activeTab === "security"
              ? "bg-[#FF713B] text-white font-semibold"
              : "bg-[#1E1D1B] text-[#9E9A95] hover:text-white border border-[#2A2826]"
          )}
        >
          Security &amp; Full-Stack (1)
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {filteredProjects.map((project) => {
          const isSystemLens = project.id === "systemlens";
          const isInvox = project.id === "invox";
          const isVault = project.id === "vault-armor";

          return (
            <article
              key={project.id}
              className="rounded-3xl bg-[#1A1918] border border-[#2A2826] overflow-hidden hover:border-[#3E3B38] transition-all duration-300 shadow-2xl relative group"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-[#FF713B]/20 via-[#FF713B] to-[#FF713B]/20" />

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-[#FF713B] bg-[#FF713B]/10 px-3 py-1 rounded-full border border-[#FF713B]/20">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-[#9E9A95]">
                      {project.date}
                    </span>
                  </div>

                  {project.achievementBadge && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{project.achievementBadge}</span>
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div className="mb-6">
                  <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#FF713B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-[#FF713B] mt-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9E9A95] font-mono mt-1">
                    Role: {project.role}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-sm sm:text-base text-[#9E9A95] leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Project-Specific Media Showcase */}
                <div className="mb-8 rounded-2xl overflow-hidden border border-[#2E2C2A] bg-[#121110]">
                  {isSystemLens && (
                    <div className="p-5 sm:p-6 bg-gradient-to-br from-[#161514] to-[#121110] relative">
                      <div className="flex items-center justify-between pb-4 border-b border-[#2A2826] text-xs font-mono text-[#9E9A95]">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#FF713B]" />
                          <span>SystemLens Architecture &amp; Execution Pipeline</span>
                        </div>
                        <span className="text-[#FF713B]">FastEmbed ONNX + Qdrant</span>
                      </div>

                      {/* Architecture Diagram Visualization */}
                      <div className="py-6 font-mono text-[11px] sm:text-xs text-zinc-300 overflow-x-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                          <div className="p-3 rounded-xl bg-[#1E1D1B] border border-[#2A2826]">
                            <div className="text-[#FF713B] font-bold text-xs uppercase mb-1">
                              1. Ingestion
                            </div>
                            <div className="text-[11px] text-[#9E9A95]">
                              Context-Enriched Chunker
                            </div>
                            <div className="text-[10px] text-zinc-500 mt-1">
                              Imports &bull; Symbols &bull; Scope
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-[#1E1D1B] border border-[#2A2826]">
                            <div className="text-[#FF713B] font-bold text-xs uppercase mb-1">
                              2. Embeddings
                            </div>
                            <div className="text-[11px] text-[#9E9A95]">
                              FastEmbed (ONNX)
                            </div>
                            <div className="text-[10px] text-zinc-500 mt-1">
                              &gt;700 chunks/s SIMD
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-[#1E1D1B] border border-[#2A2826]">
                            <div className="text-[#FF713B] font-bold text-xs uppercase mb-1">
                              3. Hybrid Rerank
                            </div>
                            <div className="text-[11px] text-[#9E9A95]">
                              Qdrant + Lexical AST
                            </div>
                            <div className="text-[10px] text-zinc-500 mt-1">
                              55% Dense &bull; 45% Lexical
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-[#1E1D1B] border border-[#2A2826]">
                            <div className="text-[#FF713B] font-bold text-xs uppercase mb-1">
                              4. Intelligence
                            </div>
                            <div className="text-[11px] text-[#9E9A95]">
                              Groq LLM + Git Parser
                            </div>
                            <div className="text-[10px] text-zinc-500 mt-1">
                              Token Budget Capped
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Measured Benchmark Badges Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#2A2826]">
                        <div className="p-3 rounded-xl bg-[#1E1D1B]/80 text-center">
                          <div className="font-editorial text-lg sm:text-xl font-bold text-[#FF713B]">
                            40x Faster
                          </div>
                          <div className="text-[11px] font-mono text-[#9E9A95] mt-0.5">
                            Ingestion Indexing
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#1E1D1B]/80 text-center">
                          <div className="font-editorial text-lg sm:text-xl font-bold text-white">
                            75%
                          </div>
                          <div className="text-[11px] font-mono text-[#9E9A95] mt-0.5">
                            Hit@1 (vs 70%)
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#1E1D1B]/80 text-center">
                          <div className="font-editorial text-lg sm:text-xl font-bold text-white">
                            67.5%
                          </div>
                          <div className="text-[11px] font-mono text-[#9E9A95] mt-0.5">
                            Recall@1 (vs 62.5%)
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#1E1D1B]/80 text-center">
                          <div className="font-editorial text-lg sm:text-xl font-bold text-[#FF713B]">
                            0.75
                          </div>
                          <div className="text-[11px] font-mono text-[#9E9A95] mt-0.5">
                            MRR@1 Benchmark
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isInvox && (
                    <div className="relative group/img overflow-hidden">
                      <Image
                        src="/assets/invox-upload.png"
                        alt="INVOX AI Invoice Pipeline UI Interface"
                        width={900}
                        height={500}
                        className="w-full h-auto object-cover max-h-[380px] hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 bg-[#121110]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-[#EDEDED] border border-[#2A2826]">
                        Authentic INVOX Dashboard &bull; CodeUtsava 9.0
                      </div>
                    </div>
                  )}

                  {isVault && (
                    <div className="relative group/img overflow-hidden">
                      <Image
                        src="/assets/vault-architecture.png"
                        alt="VAULT-Armor Cryptographic System Architecture"
                        width={900}
                        height={600}
                        className="w-full h-auto object-cover max-h-[420px] hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 bg-[#121110]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-[#EDEDED] border border-[#2A2826]">
                        VAULT-Armor Decryption Flow &bull; AES-256-GCM + Argon2id
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Engineering Contributions */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF713B]" />
                    <span>Key Engineering Contributions</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {project.keyContributions.map((contrib, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-[#9E9A95] flex items-start gap-2.5"
                      >
                        <span className="text-[#FF713B] font-mono mt-1">&gt;</span>
                        <span className="leading-relaxed">{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Highlights (if present) */}
                {project.architectureHighlights && (
                  <div className="mb-8 p-4 rounded-2xl bg-[#141312] border border-[#242220]">
                    <div className="text-xs font-mono text-[#FF713B] font-semibold mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architectural Highlights</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#9E9A95]">
                      {project.architectureHighlights.map((arch, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF713B]/60 mt-1.5 shrink-0" />
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Badges */}
                <div className="pt-6 border-t border-[#2A2826] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="neutral" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions / GitHub Link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1D1B] hover:bg-[#FF713B] text-white text-xs font-mono font-medium border border-[#2A2826] hover:border-[#FF713B] transition-all duration-200"
                    >
                      <GithubIcon size={16} />
                      <span>View Repository</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
