"use client";

import { formatCountdown, useCountdown } from "@/lib/hooks/useCountdown";

export interface CountdownTimerProps {
  durationMs?: number;
  className?: string;
  digitClassName?: string;
  labelClassName?: string;
}

export function CountdownTimer({
  durationMs = 5 * 60 * 60 * 1000,
  className = "",
  digitClassName = "",
  labelClassName = "",
}: CountdownTimerProps) {
  const parts = useCountdown(durationMs);
  const formatted = formatCountdown(parts);

  const blocks = [
    { value: formatted.hours, label: "HRS" },
    { value: formatted.minutes, label: "MIN" },
    { value: formatted.seconds, label: "SEC" },
  ];

  return (
    <div
      className={`inline-flex items-center gap-2 font-countdown ${className}`}
      aria-live="polite"
      aria-label={`Offer ends in ${formatted.hours} hours ${formatted.minutes} minutes ${formatted.seconds} seconds`}
    >
      {blocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center rounded-md bg-white p-2">
          <span
            className={`text-body-lg font-bold leading-none text-brand-primary ${digitClassName}`}
          >
            {block.value}
          </span>
          <span
            className={`mt-0.5 text-label font-normal text-brand-primary ${labelClassName}`}
          >
            {block.label}
          </span>
        </div>
      ))}

    </div>
  );
}
