"use client";

import { TestimonialCard } from "@/components/product/TestimonialCard";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";
import { StarRating } from "@/components/ui/StarRating";
import { socialProofTestimonials } from "@/lib/data/testimonials";

export function SocialProofCarousel() {
  return (
    <section className="bg-surface-page">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-title font-bold  text-brand-secondary">
            Over 2,400 With Breathing Problems{" "}
            <span className="text-text-primary">
              Can Breathe Easy Again Thanks To Pulmoria
            </span>
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-body-lg sm:text-lg text-text-muted">
            <StarRating rating={5} className="text-brand-primary" />
            <p>
              Trusted by{" "}
              <span className="font-bold text-text-primary">100,000+</span>{" "}
              customers
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Carousel
            loop
            align="start"
            showArrows={false}
            showDots
          >
            {socialProofTestimonials.map((t) => (
              <CarouselSlide
                key={t.id}
                className="basis-[85%] pr-4 sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={t} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
