import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/data/faqs";

export function FaqSection() {
  const items = faqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: <p>{faq.answer}</p>,
  }));

  return (
    <section id="faq" className="bg-clinical-studies">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <h2 className="mb-10 text-center text-title font-bold text-text-inverse">
          Frequently Asked{" "}
          <span className="text-brand-accent">Questions</span>
        </h2>

        <Accordion
          items={items}
          className="!grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"
          itemClassName="border-white/15 bg-white/10"
          triggerClassName="text-body-lg font-medium text-text-inverse sm:text-subhead"
          contentClassName="text-text-inverse/85"
        />
      </div>
    </section>
  );
}
