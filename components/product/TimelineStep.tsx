import { IconWrapper } from "@/components/ui/IconWrapper";
import type { TimelineStep } from "@/lib/types";

export interface TimelineStepProps {
  step: TimelineStep;
}

export function TimelineStepCard({ step }: TimelineStepProps) {
  return (
    <article className="space-y-3">
      <div className="flex items-center gap-2.5 rounded-card bg-surface-mint px-3 py-2.5 sm:px-4">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
          <IconWrapper name="arrow-up" size={14} strokeWidth={3} />
        </span>
        <h3 className="text-body-lg font-bold text-brand-forest sm:text-subhead">
          {step.dayLabel} {step.title}
        </h3>
      </div>

      <ul className="space-y-2 px-1">
        {step.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-center gap-2.5 text-body-lg text-text-inverse"
          >
            <span >
              <IconWrapper name="badge-check" size={18} className="text-brand-accent" />
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-card border border-white/15 bg-white/10 px-3 py-3 ">
        <p className="text-body-lg leading-snug text-text-inverse ">
          <span className="font-bold text-brand-accent">
            {step.percentHighlight}
          </span>{" "}
          {step.percentRest}
        </p>
      </div>
    </article>
  );
}
