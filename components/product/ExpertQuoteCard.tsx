import Image from "next/image";
import { IconWrapper } from "@/components/ui/IconWrapper";
import type { ExpertQuote } from "@/lib/types";

export interface ExpertQuoteCardProps {
  expert: ExpertQuote;
}

export function ExpertQuoteCard({ expert }: ExpertQuoteCardProps) {
  return (
    <article className="rounded-xl border border-brand-primary/30 bg-surface-page p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-surface-placeholder">
          <Image
            src={expert.imageSrc ?? "/images/placeholder.svg"}
            alt={expert.imageAlt}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="text-subhead font-bold text-text-primary">
              {expert.name}
            </h3>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
              <IconWrapper name="check" size={12} strokeWidth={3} />
            </span>
          </div>
          <p className="mt-0.5 text-body font-medium text-brand-primary">
            {expert.title}
          </p>
        </div>
      </div>

      <blockquote className="text-sm italic leading-relaxed text-text-primary">
        &ldquo;{expert.quote}&rdquo;
      </blockquote>
    </article>
  );
}
