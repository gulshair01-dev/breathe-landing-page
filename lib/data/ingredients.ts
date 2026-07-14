import type { Ingredient } from "@/lib/types";

export const ingredientsIntro = {
  midCtaHeadlineBefore: "The Simple Way To Heal Lung Damage",
  midCtaHeadlineAfter: " And Breathe Better Than You Have In Years",
  midCtaBody: [
    {
      text: "Pulmoria uses 5 science-backed plant extracts to help target & clear stuck mucus...",
      boldPhrase: "5 science-backed plant extracts",
    },
    {
      text: "The #1 cause of breathing problems, chest tightness, constant cough, low energy, and even anxiety in people with lung buildup.",
    },
    {
      text: "Each ingredient is proven to break down toxic buildup that builds up over years of breathing everyday air... So the lungs can heal and breathe naturally again.",
      boldLead:
        "Each ingredient is proven to break down toxic buildup that builds up over years of breathing everyday air...",
    },
  ],
  guarantee: "90-Day Money Back Guarantee",
  sectionHeadlineBefore: "5 Mucus-Clearing Supernutrients",
  sectionHeadlineAfter: " in One Lung Health Formula",
  sectionSubhead:
    "Most Powerful Lung Cleaners. Maximum Potency Doses. Backed by Science.",
};

export const ingredients: Ingredient[] = [
  {
    id: "mullein",
    name: "Mullein Extract",
    tag: "Clears Mucus",
    description:
      "Acts as a natural expectorant, helping to loosen and expel mucus for clearer airways. It soothes inflammation and supports lung health.",
    imageAlt: "Mullein Extract",
  },
  {
    id: "cordyceps",
    name: "Cordyceps",
    tag: "Boosts Energy",
    description:
      "Enhances oxygen utilization and boosts lung capacity, promoting improved breathing, endurance, and immune function.",
    imageAlt: "Cordyceps",
  },
  {
    id: "bromelain",
    name: "Bromelain",
    tag: "Reduces Inflammation",
    description:
      "Reduces inflammation in the airways and nasal passages, supporting decongestion. It also aids in digestion, reducing swelling and pain.",
    imageAlt: "Bromelain",
  },
  {
    id: "lemon",
    name: "Lemon Peel",
    tag: "Immune Support",
    description:
      "Rich in vitamin C and antioxidants, which support immune health and protect the lungs from free radical damage.",
    imageAlt: "Lemon Peel",
  },
  {
    id: "ginger",
    name: "Ginger",
    tag: "Opens Airways",
    description:
      "Helps relax airway muscles, reducing bronchial spasms, and has antioxidant properties that support overall health.",
    imageAlt: "Ginger",
  },
];
