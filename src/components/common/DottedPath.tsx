import React from "react";
import { cn } from "@/lib/utils";

interface DottedPathProps {
  variant?: "horizontal" | "curve" | "corner" | "grid";
  className?: string;
}

export const DottedPath: React.FC<DottedPathProps> = ({
  variant = "horizontal",
  className,
}) => {
  if (variant === "curve") {
    return (
      <svg
        className={cn("w-32 h-16 pointer-events-none opacity-40", className)}
        viewBox="0 0 128 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 32 C 32 4, 96 60, 126 32"
          stroke="#FF713B"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
        <circle cx="2" cy="32" r="3" fill="#FF713B" />
        <circle cx="126" cy="32" r="3" fill="#FF713B" />
      </svg>
    );
  }

  if (variant === "corner") {
    return (
      <svg
        className={cn("w-20 h-20 pointer-events-none opacity-50", className)}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 80 V 20 Q 20 10 40 10 H 80"
          stroke="#FF713B"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          fill="none"
        />
        <circle cx="10" cy="80" r="2.5" fill="#FF713B" />
        <circle cx="80" cy="10" r="2.5" fill="#FF713B" />
      </svg>
    );
  }

  if (variant === "grid") {
    return (
      <div
        className={cn(
          "w-24 h-16 bg-orange-dots opacity-40 rounded-lg pointer-events-none",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-2 py-4 pointer-events-none", className)} aria-hidden="true">
      <div className="w-2 h-2 rounded-full bg-[#FF713B]" />
      <div className="h-0.5 flex-1 border-b border-dashed border-[#FF713B]/40" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#FF713B]/60" />
    </div>
  );
};
