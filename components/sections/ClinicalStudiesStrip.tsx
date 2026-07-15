import { IconWrapper } from "@/components/ui/IconWrapper";
import { clinicalBenefits } from "@/lib/data/clinicalBenefits";

export function ClinicalStudiesStrip() {
  return (
    <section className="bg-clinical-studies">
      <div className="mx-auto max-w-3xl px-section-x py-section-y text-center w-full">
        <h2 className="text-title font-bold text-text-inverse">
          Doctor Approved Ingredients To Help You{" "}
          <span className="text-brand-accent">Breathe Better Naturally</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg sm:text-lg text-text-inverse">
          These natural extracts and plant compounds have been{" "}
          <span className="font-bold">
            hand-selected by leading respiratory experts.
          </span>
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {clinicalBenefits.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-forest">
                <IconWrapper name="check" size={16} strokeWidth={3} />
              </span>
              <p className="text-body-lg font-bold text-text-inverse">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
