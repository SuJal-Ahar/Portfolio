import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  tagline,
  className,
}) => {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs font-semibold text-[#FF713B] tracking-wider px-2 py-0.5 rounded bg-[#FF713B]/10 border border-[#FF713B]/20">
          {number}
        </span>
        <div className="h-px w-8 bg-[#FF713B]/40" />
        {tagline && (
          <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A95]">
            {tagline}
          </span>
        )}
      </div>

      <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#9E9A95] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
