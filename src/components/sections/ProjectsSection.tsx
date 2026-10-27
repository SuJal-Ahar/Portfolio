"use client";

import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolioData";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { GithubIcon } from "@/components/common/Icons";
import { ExternalLink, Trophy, ShieldCheck, Cpu } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" aria-label="Selected Projects" className="scroll-mt-28 w-full">
      <SectionHeader
        number="01"
        tagline="Featured Work"
        title="Selected Projects"
        subtitle="Focused engineering projects spanning AI codebase exploration, invoice processing pipelines, and cryptographic security."
      />

      {/* Spacious 3-Column Full-Width Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {PROJECTS.map((project) => {
          const isSystemLens = project.id === "systemlens";
          const isInvox = project.id === "invox";
          const isVault = project.id === "vault-armor";

          return (
            <article
              key={project.id}
              className="rounded-3xl bg-[#1A1918] border border-[#2A2826] overflow-hidden hover:border-[#FF713B]/50 hover:bg-[#1E1D1B] transition-all duration-300 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Media Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121110] border-b border-[#2A2826]">
                  {isSystemLens && (
                    <div className="w-full h-full p-6 bg-gradient-to-br from-[#1E1D1B] via-[#161514] to-[#121110] flex flex-col justify-between relative group-hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center justify-between text-xs font-mono text-[#9E9A95]">
                        <span className="flex items-center gap-1.5 text-[#FF713B]">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>Codebase Engine</span>
                        </span>
                        <span className="text-zinc-500">FastEmbed + Qdrant</span>
                      </div>

                      <div className="space-y-2 py-4">
                        <div className="text-xs font-mono text-zinc-400">
                          Execution Path &amp; Retrieval
                        </div>
                        <div className="font-editorial text-2xl font-black text-white tracking-wide">
                          SystemLens
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-800/40">
                          <span>40x Faster Ingestion (4.91s)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/60">
                        <span>Hit@1: 75%</span>
                        <span>MRR: 0.75</span>
                      </div>
                    </div>
                  )}

                  {isInvox && (
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/assets/invox-upload.png"
                        alt="INVOX AI Invoice Pipeline"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute top-3 left-3 bg-[#121110]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                        <Trophy className="w-3 h-3" />
                        <span>CodeUtsava 9.0 Runner-Up</span>
                      </div>
                    </div>
                  )}

                  {isVault && (
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/assets/vault-architecture.png"
                        alt="VAULT Armor Cryptographic Architecture"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute top-3 left-3 bg-[#121110]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-[#FF713B] border border-[#FF713B]/30 flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3" />
                        <span>AES-256-GCM + Argon2id</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Area: Title + 1 Sentence + Tech Badges */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-editorial text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#FF713B] transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-[#9E9A95]">
                      {project.date}
                    </span>
                  </div>

                  {/* 1 Short Overview Sentence */}
                  <p className="text-sm text-[#9E9A95] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="neutral" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#2A2826]/40 mt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#141312] hover:bg-[#FF713B] text-white text-xs font-mono font-medium border border-[#2A2826] hover:border-[#FF713B] transition-all duration-200"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
