import { Badge } from "@/components/ui/Badge";
import { Price } from "@/components/ui/Price";
import { PLACEHOLDER_IMAGE } from "@/lib/data/placeholders";
import type { BundleOption } from "@/lib/types";

export interface BundleOptionCardProps {
  option: BundleOption;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function BundleOptionCard({
  option,
  selected,
  onSelect,
}: BundleOptionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={`relative w-full cursor-pointer rounded-card text-left transition-shadow ${selected
        ? "bg-surface-warm shadow-bundle-selected"
        : "bg-surface-page shadow-bundle"
        }`}
    >
      {option.badge === "most-popular" ? (
        <Badge variant="popular" className="absolute -top-2.5 right-3">
          MOST POPULAR
        </Badge>
      ) : null}
      {option.badge === "best-value" ? (
        <Badge variant="value" className="absolute -top-2.5 right-3">
          BEST VALUE
        </Badge>
      ) : null}

      <div className="flex items-start justify-between gap-3 p-3 pt-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-body-lg font-bold text-text-primary">
              {option.title}
            </span>
            <Badge variant="sale">{option.discountLabel}</Badge>
          </div>
          <p className="mt-1 text-body text-text-muted">{option.shippingNote}</p>
        </div>
        <Price amount={option.price} size="sm" />
      </div>

      {option.freeGift ? (
        <div className="flex w-full items-center gap-2 rounded-b-card bg-brand-forest px-3 py-2">
          <span className="text-body font-bold text-text-inverse">
            {option.freeGift.label}
          </span>
        </div>
      ) : null}
    </button>
  );
}
