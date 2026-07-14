import { Accordion } from "@/components/ui/Accordion";
import { productAccordionItems } from "@/lib/data/productAccordion";

export function ProductDescriptionTabs() {
  const items = productAccordionItems.map((item) => ({
    id: item.id,
    title: item.title,
    content: (
      <div className="space-y-3">
        <p>{item.content}</p>

        {item.ingredients ? (
          <div className="space-y-4">
            {item.ingredients.map((ing) => (
              <div key={ing.name}>
                <p className="font-bold text-text-primary">{ing.name}</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-5">
                  {ing.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        {item.footer ? <p>{item.footer}</p> : null}
      </div>
    ),
  }));

  return <Accordion items={items} />;
}
