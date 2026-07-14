import { ComparisonRowCard } from "@/components/product/ComparisonRow";
import { comparisonIntro, comparisonRows } from "@/lib/data/comparisonRows";

export function ComparisonTable() {
  return (
    <section className="bg-surface-page">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          <div className="text-center">
            <h2 className="text-title font-bold">
              <span className="text-brand-secondary">
                {comparisonIntro.headlineBefore}
              </span>
              <span className="text-text-primary">
                {comparisonIntro.headlineAfter}
              </span>
            </h2>
            <p className="mt-3 text-body-lg text-text-primary sm:text-lg">
              {comparisonIntro.subhead}
            </p>
          </div>

          <div>
            {/* Headers sit above the bordered table body */}
            <div className="grid grid-cols-[minmax(0,1fr)_96px_80px] items-end sm:grid-cols-[minmax(0,1fr)_120px_96px]">
              <span />
              <span className="rounded-t-md bg-brand-forest px-2 py-2.5 text-center text-label font-bold uppercase tracking-wide text-text-inverse sm:text-body">
                Pulmoria
              </span>
              <span className="px-2 py-2.5 text-center text-body font-bold text-text-primary">
                Others
              </span>
            </div>

            {/* Dashed rounded border wraps rows only */}
            <div className="overflow-hidden rounded-card border border-dashed border-brand-primary/50 bg-brand-primary/10">
              {comparisonRows.map((row, index) => (
                <ComparisonRowCard
                  key={row.id}
                  row={row}
                  isLast={index === comparisonRows.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
