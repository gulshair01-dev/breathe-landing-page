import Image from "next/image";

export interface ProductGalleryThumbProps {
  alt: string;
  src: string;
  selected?: boolean;
  onClick?: () => void;
}

export function ProductGalleryThumb({
  alt,
  src,
  selected = false,
  onClick,
}: ProductGalleryThumbProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative h-20 w-20 shrink-0 overflow-hidden border rounded-card border-border-subtle transition-shadow sm:h-24 sm:w-24 md:h-28 md:w-28 ${selected ? "shadow-bundle-selected" : "shadow-bundle opacity-80"
        }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
        className="object-contain p-1"
      />
    </button>
  );
}
