"use client";

import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { OrderWithinBanner } from "@/components/ui/OrderWithinBanner";

export function FinalCtaSection() {
  return (
    <section className="bg-surface-page">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="rounded-3xl bg-brand-forest px-6 py-10 text-center text-text-inverse sm:px-10 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-title font-bold">
              Breathe Better{" "}
              <span className="text-brand-accent">Or Your Money Back</span>
            </h2>

            <p className="mt-4 text-body-lg leading-relaxed text-text-inverse/90 sm:text-lg">
              Breathe freely again, reclaim your active life, and feel confident
              in every breath—or your money back.
            </p>

            <OrderWithinBanner className="mt-6" />

            <Button fullWidth className="mt-6 rounded-card">
              TRY TODAY RISK-FREE
            </Button>

            <p className="mt-4 flex items-center justify-center gap-2 text-body font-bold text-text-inverse">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
                <IconWrapper name="check" size={12} strokeWidth={3} />
              </span>
              90-Day Money Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
