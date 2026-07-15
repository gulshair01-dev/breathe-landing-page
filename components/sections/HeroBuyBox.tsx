"use client";

import { useState } from "react";
import Image from "next/image";
import { BenefitChip } from "@/components/product/BenefitChip";
import { BundleOptionCard } from "@/components/product/BundleOptionCard";
import { AmazonApprovedBadge } from "@/components/product/AmazonApprovedBadge";
import { ProductGalleryThumb } from "@/components/product/ProductGalleryThumb";
import { HeroTestimonialCarousel } from "@/components/sections/HeroTestimonialCarousel";
import { ProductDescriptionTabs } from "@/components/sections/ProductDescriptionTabs";
import { TestimonialVideoGrid } from "@/components/sections/TestimonialVideoGrid";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { PaymentMethodIcons } from "@/components/ui/PaymentMethodIcons";
import { Price } from "@/components/ui/Price";
import { StarRating } from "@/components/ui/StarRating";
import { heroBenefits } from "@/lib/data/benefits";
import { bundleOptions, productInfo } from "@/lib/data/bundles";
import { getDeliveryEta } from "@/lib/utils/deliveryEta";

const gallerySlides = [
  {
    id: "g1",
    src: "/images/hero/bottle-breathe-2-oz-mockup.png",
    alt: "Breathe 2oz bottle",
  },
  {
    id: "g2",
    src: "/images/hero/bottleand-box-breathe-2-oz-mockup.png",
    alt: "Breathe 2oz bottle and box",
  },
  {
    id: "g3",
    src: "/images/hero/Bteathe-Box_60-ML_mockup-2oz.png",
    alt: "Breathe 60ml box mockup",
  },

  {
    id: "g4",
    src: "/images/hero/71fxfnnpkHL._AC_SL1500_.jpg",
    alt: "Breathe 2oz bottle mockup",
  },
  {
    id: "g5",
    src: "/images/hero/71ro6-p3vLL._AC_SL1500_.jpg",
    alt: "Breathe 2oz bottle mockup",
  },
  {
    id: "g6",
    src: "/images/hero/81cUI82M-IL._AC_SL1500_.jpg",
    alt: "Breathe 2oz bottle mockup",
  },

];

export function HeroBuyBox() {
  const [selectedBundle, setSelectedBundle] = useState(
    bundleOptions.find((b) => b.selected)?.id ?? bundleOptions[0].id,
  );
  const [purchaseType, setPurchaseType] = useState<"subscribe" | "onetime">(
    "subscribe",
  );
  const [activeImage, setActiveImage] = useState(0);

  const activeBundle =
    bundleOptions.find((b) => b.id === selectedBundle) ?? bundleOptions[0];
  const cartTotal =
    purchaseType === "subscribe"
      ? activeBundle.price * 0.75 * (selectedBundle === "buy3get3" ? 6 : selectedBundle === "buy2get1" ? 3 : 1)
      : activeBundle.price * (selectedBundle === "buy3get3" ? 6 : selectedBundle === "buy2get1" ? 3 : 1);
  const compareTotal =
    (activeBundle.compareAtPrice ?? activeBundle.price) *
    (selectedBundle === "buy3get3" ? 6 : selectedBundle === "buy2get1" ? 3 : 1);
  const shipEta = getDeliveryEta(productInfo.shipEtaMaxDays);

  return (
    <section id="hero" className="overflow-x-clip bg-surface-page">
      {/* Urgency banner */}
      <div className="bg-brand-secondary px-section-x py-2.5">
        <div className="mx-auto flex max-w-content flex-col items-center justify-center gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="flex items-center justify-center gap-2 text-body-lg font-bold text-brand-accent">
              GET 3 BOTTLES FOR FREE
              <span role="img" aria-label="Gift Box" className="text-md -ml-1">
                🎁
              </span>
            </p>

            <p className="text-body text-text-inverse">
              And Up to 70% OFF + FREE Gifts!
            </p>
          </div>
          <CountdownTimer />
        </div>
      </div>

      <div className="mx-auto grid max-w-content items-start gap-8 overflow-x-clip px-section-x py-section-y lg:grid-cols-2 lg:gap-12">
        {/* Gallery column — sticky; buy box scrolls independently so accordion expands don't shift it */}
        <div className="min-w-0 space-y-4 lg:sticky lg:top-[30px]">
          <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-[auto_minmax(0,1fr)]">
            {/* Thumbs: horizontal on mobile; same height as main image + vertical scroll on md+ */}
            <div className="order-2 flex min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:order-1 md:h-0 md:min-h-full md:flex-col md:gap-2 md:overflow-x-hidden md:overflow-y-auto md:pb-0">
              {gallerySlides.map((slide, i) => (
                <ProductGalleryThumb
                  key={slide.id}
                  src={slide.src}
                  alt={slide.alt}
                  selected={activeImage === i}
                  onClick={() => setActiveImage(i)}
                />
              ))}
            </div>

            {/* Active image */}
            <div className="relative order-1 aspect-square min-w-0 overflow-hidden rounded-card border border-border-subtle md:order-2">
              <AmazonApprovedBadge />
              <Image
                src={gallerySlides[activeImage].src}
                alt={gallerySlides[activeImage].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-3 sm:p-4"
                priority
              />
            </div>
          </div>

          {/* Mini testimonials — desktop companion */}
          <div className="hidden min-w-0 lg:block">
            <HeroTestimonialCarousel />
          </div>
        </div>

        {/* Buy box — not sticky, so accordion expand/collapse doesn't move the gallery */}
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-body">
            <StarRating rating={productInfo.rating} showValue />
            <span className="font-medium">
              ({productInfo.reviewCount} Reviews)
            </span>
            <span aria-hidden>|</span>
            <span>🔥 {productInfo.soldToday}</span>
          </div>

          <h1 className="text-title font-bold text-text-primary">
            {productInfo.title}
          </h1>
          <p className="mt-3 text-body-lg leading-relaxed text-text-primary/90">
            {productInfo.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {heroBenefits.map((b) => (
              <BenefitChip key={b.id} label={b.label} icon={b.icon} />
            ))}
          </div>

          {/* Subscribe / one-time */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setPurchaseType("subscribe")}
              className={` cursor-pointer rounded-card px-3 py-2.5 text-body font-bold ${purchaseType === "subscribe"
                ? "bg-surface-warm shadow-bundle-selected "
                : "bg-surface-page shadow-bundle"
                }`}
            >
              Subscribe &amp; Save 25%
            </button>
            <button
              type="button"
              onClick={() => setPurchaseType("onetime")}
              className={` cursor-pointer rounded-card px-3 py-2.5 text-body font-bold ${purchaseType === "onetime"
                ? "bg-surface-warm shadow-bundle-selected"
                : "bg-surface-page shadow-bundle"
                }`}
            >
              One-time Purchase
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {bundleOptions.map((option) => (
              <BundleOptionCard
                key={option.id}
                option={option}
                selected={selectedBundle === option.id}
                onSelect={setSelectedBundle}
              />
            ))}
          </div>

          <p className="mt-4 flex items-center gap-2 text-lg text-text-primary">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
            </span>
            <span>
              {productInfo.shipEtaPrefix}{" "}
              <span className="font-bold">{shipEta.short}</span>
            </span>
          </p>

          <Button fullWidth className="mt-4 gap-3">
            ADD TO CART
            <Price
              amount={cartTotal}
              compareAt={compareTotal}
              size="md"
            />
          </Button>

          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-body-lg font-bold text-text-primary">
              <span className="inline-flex items-center gap-1.5">
                <IconWrapper name="shield" size={16} />
                90 Day Guarantee
              </span>
              <span
                className="h-1 w-1 rounded-full bg-text-primary"
                aria-hidden
              />
              <span className="inline-flex items-center gap-1.5">
                <IconWrapper name="lock" size={16} />
                Secure Checkout
              </span>
            </div>
            <PaymentMethodIcons />
          </div>

          <div className="mt-6">
            <ProductDescriptionTabs />
          </div>

          <div className="mt-6">
            <TestimonialVideoGrid />
          </div>

          {/* Mobile mini testimonials */}
          <div className="mt-6 min-w-0 lg:hidden">
            <HeroTestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
