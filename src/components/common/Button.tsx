import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  href,
  external = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF713B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121110]";

  const variantStyles = {
    primary:
      "bg-[#FF713B] text-white hover:bg-[#FF8554] shadow-lg shadow-[#FF713B]/20 active:scale-[0.98]",
    secondary:
      "bg-white text-zinc-900 hover:bg-zinc-100 shadow-sm active:scale-[0.98]",
    outline:
      "bg-transparent text-white border border-[#2A2826] hover:border-[#FF713B] hover:text-[#FF713B] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#9E9A95] hover:text-white hover:bg-[#1E1D1B] active:scale-[0.98]",
    dark:
      "bg-[#1E1D1B] text-white border border-[#2A2826] hover:border-[#3E3B38] hover:bg-[#262422] active:scale-[0.98]",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
