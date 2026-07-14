import Image from "next/image";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { problemIntro, problemSymptoms } from "@/lib/data/problemSymptoms";

export function ProblemSection() {
  return (
    <section className="bg-surface-mint border-t border-brand-primary">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: messaging */}
          <div>
            <h2 className="text-title font-bold text-text-primary">
              {problemIntro.headlineBefore}
              <span className="text-brand-primary">
                {problemIntro.headlineAccent}
              </span>
              {problemIntro.headlineAfter}
            </h2>

            <div className="mt-5 space-y-4 text-body-lg sm:text-lg leading-relaxed text-text-primary/90">
              {problemIntro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <p className="mt-6 text-body-lg sm:text-lg font-bold text-text-primary">
              {problemIntro.listHeader}
            </p>

            <ul className="mt-4 space-y-3">
              {problemSymptoms.map((s) => (
                <li
                  key={s.id}
                  className="flex items-start gap-3 text-body-lg sm:text-lg text-text-primary"
                >
                  <span className="mt-0.5 inline-flex shrink-0 text-rating-star">
                    <IconWrapper name="alert-triangle" size={30} />
                  </span>
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual + callouts */}
          <div className="space-y-4">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-card">
              <Image
                src="/images/mucus_1024x.webp"
                alt="Clogged vs unclogged lungs comparison"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-card object-cover"
              />
            </div>

            <div className="flex items-center gap-3 rounded-card border border-sale-danger/40 bg-surface-blush px-4 py-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sale-danger text-text-inverse ">
                <IconWrapper name="x" size={14} strokeWidth={3} />
              </span>
              <p className="text-body-lg sm:text-lg leading-relaxed text-text-primary">
                {problemIntro.negativeCallout}
              </p>
            </div>

            <div className="flex gap-3 rounded-card border border-brand-primary/40 bg-surface-mint px-4 py-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
                <IconWrapper name="check" size={14} strokeWidth={3} />
              </span>
              <p className="text-body-lg sm:text-lg leading-relaxed text-text-primary">
                {problemIntro.positiveCallout}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
