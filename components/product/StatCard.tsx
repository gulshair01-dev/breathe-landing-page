import { IconWrapper } from "@/components/ui/IconWrapper";
import type { StatItem } from "@/lib/types";

export interface StatCardProps {
  stat: StatItem;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="rounded-card border border-dashed border-brand-primary bg-surface-mint px-4 py-5 text-left">
      <div className="flex items-start gap-2">
        <p className="text-title font-bold text-brand-primary">{stat.value}</p>
        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
          <IconWrapper name="arrow-up" size={12} strokeWidth={3} />
        </span>
      </div>
      <p className="mt-2 text-body-lg leading-snug text-text-primary">
        {stat.caption}
      </p>
    </div>
  );
}
