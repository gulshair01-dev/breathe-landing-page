import { IconWrapper } from "@/components/ui/IconWrapper";
import type { ComparisonRow } from "@/lib/types";

export interface ComparisonRowProps {
  row: ComparisonRow;
  isLast?: boolean;
}

export function ComparisonRowCard({ row, isLast = false }: ComparisonRowProps) {
  return (
    <div
      className={`grid grid-cols-[minmax(0,1fr)_96px_80px] items-center sm:grid-cols-[minmax(0,1fr)_120px_96px] ${
        isLast ? "" : "border-b border-dashed border-brand-primary/35"
      }`}
    >
      <span className="px-4 py-3.5 text-body-lg text-text-primary ">
        {row.feature}
      </span>

      <span
        className="flex justify-center bg-brand-forest py-3.5"
        aria-label={row.pulmoria ? "Yes" : "No"}
      >
        {row.pulmoria ? (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-brand-forest">
            <IconWrapper name="check" size={14} strokeWidth={3} />
          </span>
        ) : (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brand-accent text-brand-accent">
            <IconWrapper name="x" size={14} strokeWidth={3} />
          </span>
        )}
      </span>

      <span
        className="flex justify-center py-3.5"
        aria-label={row.others ? "Yes" : "No"}
      >
        {row.others ? (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
            <IconWrapper name="check" size={14} strokeWidth={3} />
          </span>
        ) : (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-sale-danger text-sale-danger">
            <IconWrapper name="x" size={14} strokeWidth={3} />
          </span>
        )}
      </span>
    </div>
  );
}
