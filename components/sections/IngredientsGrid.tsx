import { IngredientCard } from "@/components/product/IngredientCard";
import { StatsSection } from "@/components/sections/StatsSection";
import { Button } from "@/components/ui/Button";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { ingredients, ingredientsIntro } from "@/lib/data/ingredients";

function highlightBody(paragraph: {
  text: string;
  boldPhrase?: string;
  boldLead?: string;
}) {
  if (paragraph.boldPhrase) {
    const [before, after] = paragraph.text.split(paragraph.boldPhrase);
    return (
      <>
        {before}
        <strong className="font-bold text-text-primary">
          {paragraph.boldPhrase}
        </strong>
        {after}
      </>
    );
  }

  if (paragraph.boldLead) {
    const rest = paragraph.text.replace(paragraph.boldLead, "").trimStart();
    return (
      <>
        <strong className="font-bold text-text-primary">
          {paragraph.boldLead}
        </strong>{" "}
        {rest}
      </>
    );
  }

  return paragraph.text;
}

export function IngredientsGrid() {
  return (
    <section id="ingredients" className="bg-surface-page">
      {/* Stats + mid CTA side by side */}
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <StatsSection />

          <div>
            <h2 className="text-title font-bold">
              <span className="text-brand-primary">
                {ingredientsIntro.midCtaHeadlineBefore}
              </span>
              <span className="text-text-primary">
                {ingredientsIntro.midCtaHeadlineAfter}
              </span>
            </h2>

            <div className="mt-5 space-y-4 text-body-lg sm:text-lg leading-relaxed text-text-primary/90">
              {ingredientsIntro.midCtaBody.map((p) => (
                <p key={p.text}>{highlightBody(p)}</p>
              ))}
            </div>

            <Button fullWidth className="mt-8">
              TRY TODAY RISK-FREE
            </Button>

            <p className="mt-3 flex items-center justify-center gap-2 text-body font-bold text-text-primary">
              <span>
                <IconWrapper
                  name="badge-check"
                  size={18}
                  className="text-text-primary"
                />
              </span>
              {ingredientsIntro.guarantee}
            </p>
          </div>
        </div>
      </div>

      {/* Ingredient cards carousel */}
      <div className="border-t border-brand-primary bg-surface-mint">
        <div className="mx-auto max-w-content px-section-x py-section-y">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-title font-bold">
              <span className="text-brand-secondary">
                {ingredientsIntro.sectionHeadlineBefore}
              </span>
              <span className="text-text-primary">
                {ingredientsIntro.sectionHeadlineAfter}
              </span>
            </h2>
            <p className="mt-3 text-body-lg sm:text-lg text-text-primary">
              {ingredientsIntro.sectionSubhead}
            </p>
          </div>

          <div className="mt-10">
            <Carousel loop align="start" showArrows={false} showDots>
              {ingredients.map((ingredient) => (
                <CarouselSlide
                  key={ingredient.id}
                  className="basis-[85%] pr-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <IngredientCard ingredient={ingredient} />
                </CarouselSlide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
