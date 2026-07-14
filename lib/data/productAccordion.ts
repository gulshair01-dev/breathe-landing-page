import type { ProductAccordionItem } from "@/lib/types";

export const productAccordionItems: ProductAccordionItem[] = [
  {
    id: "ingredients",
    title: "Ingredients",
    content: "Mullein, Ginger root, Manuka honey, Thyme leaf and lemon peel",
  },
  {
    id: "natural-lung-support",
    title: "Natural lung support",
    content: "Breathe combines herbs with proven benefits:",
    ingredients: [
      {
        name: "Mullein (Verbascum thapsus)",
        benefits: [
          "Acts as an expectorant, helping to loosen and expel mucus from the lungs.",
          "Soothes inflammation in the respiratory tract, making breathing easier.",
          "Has antiviral and antibacterial properties that can aid in fighting infections.",
        ],
      },
      {
        name: "Ginger Root (Zingiber officinale)",
        benefits: [
          "Breaks down mucus, making it easier to clear from the airways.",
          "Acts as a natural bronchodilator, helping to open the lungs.",
          "Reduces inflammation and soothes throat irritation.",
        ],
      },
      {
        name: "Manuka Honey",
        benefits: [
          "Has antimicrobial properties that help combat respiratory infections.",
          "Soothes the throat and reduces coughing.",
          "Helps moisturize irritated airways, preventing dryness.",
        ],
      },
      {
        name: "Thyme Leaf (Thymus vulgaris)",
        benefits: [
          "Contains thymol, a powerful compound that fights bacteria and viruses in the lungs.",
          "Acts as a natural decongestant, helping to clear excess mucus.",
          "Relaxes the respiratory tract, making breathing easier.",
        ],
      },
      {
        name: "Lemon Peel (Citrus limonum)",
        benefits: [
          "High in vitamin C, which supports immune function.",
          "Acts as a natural expectorant, helping to break down and remove mucus.",
          "Provides antioxidants that protect lung tissue from oxidative stress.",
        ],
      },
    ],
    footer:
      "This combination works synergistically to clear mucus, open airways, reduce inflammation, and support overall lung health",
  },
  {
    id: "how-long",
    title: "How long will it take until I feel better?",
    content:
      "Many users report relief within a few hours of use, though individual results may vary.",
  },
  {
    id: "how-to-use",
    title: "How do I use it?",
    content:
      "To use Breathe, Take 2-3ml or 1-3 drops of Breathe 2-3 times per day.",
  },
  {
    id: "guarantee",
    title: "What if it doesn't work for me?",
    content:
      "Breathe comes with a 100% money-back guarantee, so if you're not satisfied, you can request a refund.",
  },
];
