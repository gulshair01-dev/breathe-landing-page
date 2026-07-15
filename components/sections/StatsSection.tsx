import Image from "next/image";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { StatCard } from "@/components/product/StatCard";
import { stats, statsQuote } from "@/lib/data/stats";

export function StatsSection() {
  const [first, second, third] = stats;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {first ? <StatCard stat={first} /> : null}
        {second ? <StatCard stat={second} /> : null}

        <div className="relative aspect-3/4 overflow-hidden rounded-card">
          <Image
            src="/images/testimonials/6.jpeg"
            alt="Customer holding Breathe bottle"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {third ? <StatCard stat={third} /> : null}
          <blockquote className="px-1">
            <p className="text-body-lg italic leading-relaxed text-text-primary">
              &ldquo;{statsQuote.quote}&rdquo;
            </p>
            <footer className="mt-2 flex items-center gap-2 text-body font-bold text-text-primary">
              <span>
                <IconWrapper name="badge-check" size={18} className="text-text-primary" />
              </span>
              {statsQuote.name}, {statsQuote.age}
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
