import { PLACEHOLDER_IMAGE } from "@/lib/data/placeholders";

export interface PlaceholderImageProps {
  alt: string;
  src?: string;
  aspectRatio?: string;
  className?: string;
  label?: string;
}

export function PlaceholderImage({
  alt,
  src = PLACEHOLDER_IMAGE,
  aspectRatio = "1 / 1",
  className = "",
  label,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-card bg-surface-placeholder ${className}`}
      style={{ aspectRatio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
      {label ? (
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-surface-dark/60 px-2 py-1 text-center text-label text-text-inverse">
          {label}
        </span>
      ) : null}
    </div>
  );
}
