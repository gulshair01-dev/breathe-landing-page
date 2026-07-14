import type { ReactNode } from "react";

export interface FaqItemProps {
  question: string;
  children: ReactNode;
}

/** Thin presentational wrapper — use with Accordion via data mapping. */
export function FaqItem({ question, children }: FaqItemProps) {
  return (
    <div>
      <h3 className="text-subhead font-normal text-text-primary">{question}</h3>
      <div className="mt-2 text-body-lg leading-relaxed text-text-primary/90">
        {children}
      </div>
    </div>
  );
}
