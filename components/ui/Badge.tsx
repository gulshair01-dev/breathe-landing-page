import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?: "sale" | "popular" | "value" | "neutral";
  className?: string;
}

export function Badge({
  children,
  variant = "neutral",
  className = "",
}: BadgeProps) {
  const variants = {
    sale: "bg-sale-danger text-text-inverse",
    popular: "bg-brand-secondary text-brand-accent",
    value: "bg-brand-forest text-white",
    neutral: "bg-surface-dark text-text-inverse",
  };

  return (
    <span
      className={`inline-flex items-center rounded-pill px-2.5 py-1 text-label font-bold leading-none ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
