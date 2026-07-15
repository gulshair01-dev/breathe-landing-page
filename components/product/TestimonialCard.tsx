import Image from "next/image";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/lib/types";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
  activeIndex?: number;
  dotCount?: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  compact = false,
  activeIndex = 0,
  dotCount,
  onDotClick,
  className = "",
}: TestimonialCardProps) {
  if (compact) {
    return (
      <article
        className={`flex h-full gap-3 rounded-card border border-border-primary bg-brand-primary/5 p-4 ${className}`}
      >
        <div className="relative h-16 w-16 shrink-0 self-start overflow-hidden rounded-full bg-brand-primary/10 sm:h-[72px] sm:w-[72px]">
          {testimonial.imageSrc ? (
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.imageAlt}
              fill
              sizes="72px"
              className="object-cover"
            />
          ) : (
            <PlaceholderImage
              alt={testimonial.imageAlt}
              aspectRatio="1 / 1"
              className="h-full w-full"
            />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <StarRating rating={5} className="mb-2 text-brand-primary" />
          <blockquote className="flex-1 text-body-lg leading-relaxed text-text-primary">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <p className="text-body font-bold text-text-primary">
                {testimonial.name}
                {testimonial.age ? `, ${testimonial.age}` : null}
              </p>
              {testimonial.verified ? (
                <span className="inline-flex items-center gap-1 text-body text-text-primary">
                  <IconWrapper
                    name="badge-check"
                    size={16}
                    className="text-brand-primary"
                  />
                  Verified Buyer
                </span>
              ) : null}
            </div>

            {dotCount && dotCount > 1 ? (
              <div
                className="flex shrink-0 items-center gap-1.5"
                role="tablist"
                aria-label="Testimonial pagination"
              >
                {Array.from({ length: dotCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-selected={index === activeIndex}
                    onClick={() => onDotClick?.(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === activeIndex
                        ? "bg-brand-primary"
                        : "bg-brand-primary/30"
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-brand-primary/25 bg-surface-page p-4 ${className}`}
    >
      <PlaceholderImage
        alt={testimonial.imageAlt}
        src={testimonial.imageSrc}
        aspectRatio="16 / 10"
        className="w-full rounded-xl"
      />

      <StarRating rating={5} className="mt-4 text-brand-primary" />

      <blockquote className="mt-3 flex-1 text-body-lg italic leading-relaxed text-text-primary">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <p className="text-body font-bold text-text-primary">
          {testimonial.name}
          {testimonial.age ? `, ${testimonial.age}` : null}
        </p>
        {testimonial.verified ? (
          <span className="inline-flex items-center gap-1.5 text-body text-text-primary">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
              <IconWrapper name="check" size={10} strokeWidth={3} />
            </span>
            Verified Buyer
          </span>
        ) : null}
      </div>

      {testimonial.chips && testimonial.chips.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {testimonial.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-pill border border-brand-primary/30 px-3 py-1 text-label font-medium text-text-primary"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
