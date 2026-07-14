export interface StarRatingProps {
  rating?: number;
  max?: number;
  className?: string;
  showValue?: boolean;
}

export function StarRating({
  rating = 5,
  max = 5,
  className = "",
  showValue = false,
}: StarRatingProps) {
  const filled = Math.round(Math.min(Math.max(rating, 0), max));

  return (
    <span
      className={`inline-flex items-center gap-0.5 text-rating-star ${className}`}
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {showValue ? (
        <span className="ml-1 text-body font-normal text-text-primary">
          {rating}
        </span>
      ) : null}
    </span>
  );
}
