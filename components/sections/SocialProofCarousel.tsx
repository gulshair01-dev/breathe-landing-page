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
          <p className="mb-4 inline-flex rounded-pill border border-brand-primary/20 bg-brand-primary/5 px-5 py-2 text-body font-bold text-brand-primary">
            Trusted By Over 2,000 Customers
          </p>
          <h2 className="text-title font-bold text-brand-secondary">
            What Our{" "}
            <span className="text-brand-accent">Customers</span> Are Saying
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-brand-cta" />
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-body-lg text-text-muted sm:text-lg">
            <StarRating rating={5} className="text-brand-primary" />
            <a
              href="https://www.amazon.com/Breathe-mullein-drops-for-lungs/dp/B0DLBKSB28?th=1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:underline"
            >
              Real reviews from{" "}
              <span className="font-bold text-text-primary">1593 Verified Buyers</span>
            </a>
       
          </div>
        </div>

        <div className="mt-10">
          <Carousel
            loop
            align="start"
            showArrows={false}
            showDots
            autoplay
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
