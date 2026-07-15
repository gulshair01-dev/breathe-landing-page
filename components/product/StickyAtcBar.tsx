"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { productInfo } from "@/lib/data/bundles";

export function StickyAtcBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const update = () => {
      const rect = hero.getBoundingClientRect();
      // Show once the bottom of the hero has scrolled above the viewport
      setShow(rect.bottom < 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[999] border-t border-border-subtle bg-surface-page/95 px-section-x py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur sm:py-3">
      <div className="mx-auto flex max-w-content flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="truncate text-body font-bold text-text-primary sm:text-body-lg">
            {productInfo.title}
          </p>
          <div className="mt-0.5 flex items-center gap-1.5 sm:gap-2">
            <StarRating rating={4.9} />
            <span className="text-label text-text-muted sm:text-body">
              {productInfo.reviewCount} Reviews
            </span>
          </div>
        </div>
        <Button className="w-full shrink-0 px-3 py-3 text-body sm:w-auto sm:px-[15px] sm:py-5 sm:text-cta">
          TRY TODAY RISK-FREE
        </Button>
      </div>
    </div>
  );
}
