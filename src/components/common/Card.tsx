import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "accent" | "interactive";
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  glow = false,
}) => {
  const variantStyles = {
    default:
      "bg-[#1A1918] border border-[#2A2826] text-white",
    elevated:
      "bg-[#1E1D1B] border border-[#2E2C2A] text-white shadow-xl shadow-black/40",
    accent:
      "bg-[#1E1D1B] border border-[#FF713B]/30 text-white shadow-lg shadow-[#FF713B]/5",
    interactive:
      "bg-[#1A1918] border border-[#2A2826] text-white transition-all duration-300 hover:border-[#FF713B]/50 hover:bg-[#201F1D] hover:shadow-xl hover:shadow-black/50 group",
  };

  return (
    <div
      className={cn(
        "rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden",
        variantStyles[variant],
        glow && "before:absolute before:inset-0 before:bg-radial-gradient before:from-[#FF713B]/10 before:to-transparent before:pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
};
