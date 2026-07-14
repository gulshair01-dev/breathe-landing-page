import { PLACEHOLDER_VIDEO_URL } from "@/lib/data/placeholders";

export interface PlaceholderVideoProps {
  alt: string;
  aspectRatio?: string;
  className?: string;
  label?: string;
}

export function PlaceholderVideo({
  alt,
  aspectRatio = "16 / 9",
  className = "",
  label = "Video placeholder",
}: PlaceholderVideoProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-card bg-surface-dark ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt}
      data-video-src={PLACEHOLDER_VIDEO_URL}
    >
      <div className="flex flex-col items-center gap-2 text-text-inverse">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-text-inverse/20 text-2xl">
          ▶
        </span>
        <span className="text-body">{label}</span>
      </div>
    </div>
  );
}
