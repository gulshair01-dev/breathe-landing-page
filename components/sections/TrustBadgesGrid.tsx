import { IconWrapper } from "@/components/ui/IconWrapper";
import {
  trustFeatureBadges,
  trustFooterBadges,
} from "@/lib/data/trustBadges";

export function TrustBadgesGrid() {
  return (
    <section className="bg-clinical-studies">
      <div className="mx-auto max-w-content px-section-x py-section-y text-center">
        <h2 className="text-title font-bold text-text-inverse">
          Why Trust <span className="text-brand-accent">Pulmoria</span>?
        </h2>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {trustFeatureBadges.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-5"
            >
              <span className="text-brand-accent">
                <IconWrapper name={item.icon} size={22} />
              </span>
              <p className="text-body-lg font-bold text-text-inverse">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-8 flex max-w-content flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {trustFooterBadges.map((item) => (
            <li
              key={item.id}
              className="inline-flex items-center gap-2 text-body-lg text-text-inverse"
            >
              <span>
                <IconWrapper name="badge-check" size={18} className="text-brand-accent" />
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
