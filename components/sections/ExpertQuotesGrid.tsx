import { ExpertQuoteCard } from "@/components/product/ExpertQuoteCard";
import { expertQuotes, expertQuotesIntro } from "@/lib/data/expertQuotes";

export function ExpertQuotesGrid() {
  return (
    <section className="border-t border-brand-forest bg-surface-mint">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-title font-bold text-brand-secondary">
            {expertQuotesIntro.headlineBefore}
            <span className="text-brand-accent">
              {expertQuotesIntro.headlineAccent}
            </span>
          </h2>
          <p className="mt-3 text-body-lg text-text-primary sm:text-lg">
            {expertQuotesIntro.subhead}
          </p>
        </div>

        <div className="mt-10 grid gap-2 md:grid-cols-2 md:gap-4 max-w-4xl mx-auto">
          {expertQuotes.map((expert) => (
            <ExpertQuoteCard key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    </section>
  );
}
