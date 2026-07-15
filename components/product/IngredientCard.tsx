import Image from "next/image";
import type { Ingredient } from "@/lib/types";

export interface IngredientCardProps {
  ingredient: Ingredient;
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
  return (
    <article className="flex h-full flex-col rounded-card border border-brand-forest bg-surface-page p-4">
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-surface-placeholder">
          <Image
            src={ingredient.imageSrc ?? "/images/placeholder.svg"}
            alt={ingredient.imageAlt}
            fill
            sizes="56px"
            className="object-cover object-center"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-subhead font-bold text-text-primary">
            {ingredient.name}
          </h3>
          <p className="mt-0.5 text-body font-bold text-brand-primary">
            {ingredient.tag}
          </p>
        </div>
      </div>

      <div className="my-4 border-t border-dashed border-brand-primary/40" />

      <p className="text-body-lg leading-relaxed text-text-primary">
        {ingredient.description}
      </p>
    </article>
  );
}
