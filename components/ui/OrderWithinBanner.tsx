"use client";

import { formatCountdown, useCountdown } from "@/lib/hooks/useCountdown";

export interface OrderWithinBannerProps {
  durationMs?: number;
  deliveryDate?: string;
  className?: string;
}

export function OrderWithinBanner({
  durationMs = 5 * 60 * 60 * 1000,
  deliveryDate = "Tuesday, 21 July",
  className = "",
}: OrderWithinBannerProps) {
  const parts = useCountdown(durationMs);
  const formatted = formatCountdown(parts);
  const timeLabel = `${formatted.hours}:${formatted.minutes}:${formatted.seconds}`;

  return (
    <div
      className={`rounded-card border border-dashed border-white/40 px-4 py-3 text-body-lg leading-relaxed text-text-inverse sm:text-lg ${className}`}
      aria-live="polite"
      aria-label={`Order within ${timeLabel} and get it delivered FREE as early as ${deliveryDate}`}
    >
      Order within{" "}
      <span className="font-bold font-countdown tabular-nums">{timeLabel}</span>{" "}
      and get it delivered FREE as early as{" "}
      <span className="font-bold">{deliveryDate}</span>
    </div>
  );
}
