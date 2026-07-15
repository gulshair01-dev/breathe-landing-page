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
      className={`relative size-16 shrink-0 overflow-hidden rounded-card border border-border-subtle transition-shadow sm:size-20 md:size-[72px] lg:size-20 ${
          selected ? "shadow-bundle-selected" : "shadow-bundle opacity-80"
        }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="80px"
        className="object-contain p-1"
      />
    </button>
  );
}
