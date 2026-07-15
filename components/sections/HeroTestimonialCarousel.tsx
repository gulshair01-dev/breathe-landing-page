"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { TestimonialCard } from "@/components/product/TestimonialCard";
import { heroTestimonials } from "@/lib/data/testimonials";

export interface HeroTestimonialCarouselProps {
  className?: string;
}

export function HeroTestimonialCarousel({
  className = "",
}: HeroTestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <div className={`min-w-0 ${className}`}>
      <div className="min-w-0 overflow-hidden" ref={emblaRef}>
        <div className="flex items-stretch">
          {heroTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex min-w-0 shrink-0 grow-0 basis-full pr-2"
            >
              <TestimonialCard
                testimonial={testimonial}
                compact
                activeIndex={selectedIndex}
                dotCount={heroTestimonials.length}
                onDotClick={scrollTo}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
