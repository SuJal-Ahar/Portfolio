import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "neutral" | "outline" | "white" | "success";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "sm",
  className,
  icon,
}) => {
  const variantStyles = {
    orange:
      "bg-[#FF713B]/10 text-[#FF713B] border border-[#FF713B]/30 hover:border-[#FF713B]/60",
    neutral:
      "bg-[#1E1D1B] text-[#9E9A95] border border-[#2A2826] hover:text-[#FFFFFF] hover:border-[#3E3B38]",
    outline:
      "bg-transparent text-[#9E9A95] border border-[#2A2826] hover:border-[#FF713B]/40 hover:text-[#FFFFFF]",
    white:
      "bg-white text-zinc-900 border border-zinc-200 font-medium",
    success:
      "bg-emerald-950/40 text-emerald-400 border border-emerald-800/40",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1 tracking-wide",
    md: "text-sm px-3.5 py-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-mono transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
