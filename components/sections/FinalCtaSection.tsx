"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { OrderWithinBanner } from "@/components/ui/OrderWithinBanner";

export function FinalCtaSection() {
  return (
    <section className="bg-surface-page">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="overflow-hidden rounded-3xl bg-brand-forest">
          <div className="grid items-end lg:grid-cols-2">
            <div className="px-6 py-10 text-text-inverse sm:px-10 lg:px-12 lg:py-14">
              <h2 className="text-title font-bold">
                Feel The Difference{" "}
                <span className="text-brand-accent">100% Risk-Free</span>
              </h2>

              <p className="mt-4 max-w-xl text-body-lg leading-relaxed text-text-inverse/90 sm:text-lg">
                Breathe freely again, reclaim your active life, and feel
                confident in every breath—or your money back.
              </p>

              <OrderWithinBanner className="mt-6" />

              <Button
                fullWidth
                className="mt-6 rounded-card bg-brand-primary hover:opacity-90"
              >
                TRY TODAY RISK-FREE
              </Button>

              <p className="mt-4 flex items-center justify-center gap-2 text-body font-bold text-text-inverse">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
                  <IconWrapper name="check" size={12} strokeWidth={3} />
                </span>
                90-Day Money Back Guarantee
              </p>
            </div>

            <div className="flex items-end justify-center px-4 lg:self-stretch">
              <Image
                src="/images/placeholder.svg"
                alt="Customer holding Pulmoria bottle"
                width={280}
                height={340}
                className="h-[240px] w-auto object-contain object-bottom sm:h-[280px] lg:h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
