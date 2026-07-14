import { IconWrapper } from "@/components/ui/IconWrapper";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/lib/types";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  compact = false,
  className = "",
}: TestimonialCardProps) {
  if (compact) {
    return (
      <article
        className={`rounded-card border border-border-primary bg-brand-primary/5 p-4 ${className}`}
      >
        <StarRating rating={5} className="mb-2 text-brand-primary" />
        <blockquote className="text-body-lg leading-relaxed text-text-primary">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <p className="text-body font-bold text-text-primary">
            {testimonial.name}
            {testimonial.age ? `, ${testimonial.age}` : null}
          </p>
          {testimonial.verified ? (
            <span className="inline-flex items-center gap-1 text-body text-text-muted">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
                <IconWrapper name="check" size={10} strokeWidth={3} />
              </span>
              Verified Buyer
            </span>
          ) : null}
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
