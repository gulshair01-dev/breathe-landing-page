import { IconWrapper } from "@/components/ui/IconWrapper";
import type { TrustBadgeItem } from "@/lib/types";

export interface TrustBadgeProps {
  item: TrustBadgeItem;
  variant?: "announcement" | "grid";
  isFirst?: boolean;
}

export function TrustBadge({
  item,
  variant = "announcement",
  isFirst = false,
}: TrustBadgeProps) {
  if (variant === "announcement") {
    return (
      <div
        className={`inline-flex items-center gap-2 text-body text-text-inverse ${isFirst ? "" : "border-l border-white pl-2"
          }`}
      >
        <IconWrapper name={item.icon} size={16} />
        <span>{item.label}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 rounded-card bg-surface-dark px-3 py-5 text-center text-text-inverse">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/20 text-brand-accent">
        <IconWrapper name={item.icon} size={22} />
      </span>
      <span className="text-subhead font-bold leading-snug">{item.label}</span>
    </div>
  );
}
