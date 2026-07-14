import type { ComparisonRow } from "@/lib/types";

export const comparisonIntro = {
  headlineBefore: "See the Difference",
  headlineAfter: " for Yourself",
  subhead:
    "While others soothe temporarily, Pulmoria targets trapped mucus at the source.",
};

export const comparisonRows: ComparisonRow[] = [
  { id: "potency", feature: "Maximum mullein potency", others: false, pulmoria: true },
  { id: "plant", feature: "Pure, plant-based formula", others: false, pulmoria: true },
  { id: "detox", feature: "Gentle daily detox", others: false, pulmoria: true },
  { id: "tested", feature: "Third-party tested", others: false, pulmoria: true },
  { id: "additives", feature: "Zero artificial additives", others: false, pulmoria: true },
  { id: "results", feature: "Real, noticeable changes", others: false, pulmoria: true },
];
