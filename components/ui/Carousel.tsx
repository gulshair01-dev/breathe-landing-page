"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { IconWrapper } from "@/components/ui/IconWrapper";

export interface CarouselProps {
  children: ReactNode;
  className?: string;
  viewportClassName?: string;
  containerClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  loop?: boolean;
  align?: "start" | "center" | "end";
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function Carousel({
  children,
  className = "",
  viewportClassName = "",
  containerClassName = "",
  showArrows = true,
  showDots = false,
  loop = true,
  align = "start",
  autoplay = false,
  autoplayDelay = 4500,
}: CarouselProps) {
  const plugins = useMemo(
    () =>
      autoplay
        ? [
            Autoplay({
              delay: autoplayDelay,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]
        : [],
    [autoplay, autoplayDelay],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align }, plugins);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative min-w-0 ${className}`}>
      <div className={`min-w-0 overflow-hidden ${viewportClassName}`} ref={emblaRef}>
        <div className={`flex ${containerClassName}`}>{children}</div>
      </div>

      {showArrows ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            disabled={!canPrev && !loop}
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface-page/90 text-brand-forest shadow-bundle disabled:opacity-40"
          >
            <IconWrapper name="chevron-down" className="rotate-90" size={18} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            disabled={!canNext && !loop}
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface-page/90 text-brand-forest shadow-bundle disabled:opacity-40"
          >
            <IconWrapper name="chevron-down" className="-rotate-90" size={18} />
          </button>
        </>
      ) : null}

      {showDots && scrollSnaps.length > 1 ? (
        <div
          className="mt-6 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Carousel pagination"
        >
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === selectedIndex}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === selectedIndex
                  ? "bg-brand-primary"
                  : "bg-brand-primary/30"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export interface CarouselSlideProps {
  children: ReactNode;
  className?: string;
}

export function CarouselSlide({ children, className = "" }: CarouselSlideProps) {
  return (
    <div className={`min-w-0 shrink-0 grow-0 basis-full ${className}`}>
      {children}
    </div>
  );
}
