"use client";

import { useEffect, useState } from "react";

export interface CountdownParts {
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function formatCountdown(parts: CountdownParts): {
  hours: string;
  minutes: string;
  seconds: string;
} {
  return {
    hours: pad(parts.hours),
    minutes: pad(parts.minutes),
    seconds: pad(parts.seconds),
  };
}

/**
 * Counts down from `durationMs` and loops when it hits zero
 * (matches urgency-timer marketing pattern).
 */
export function useCountdown(durationMs: number = 5 * 60 * 60 * 1000): CountdownParts {
  const [remaining, setRemaining] = useState(durationMs);

  useEffect(() => {
    const started = Date.now();
    const id = window.setInterval(() => {
      const elapsed = Date.now() - started;
      const left = durationMs - (elapsed % durationMs);
      setRemaining(left);
    }, 250);
    return () => window.clearInterval(id);
  }, [durationMs]);

  const totalSec = Math.floor(remaining / 1000);
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  return { hours, minutes, seconds, totalMs: remaining };
}
