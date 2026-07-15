import type { Ingredient } from "@/lib/types";

export const ingredientsIntro = {
  midCtaHeadlineBefore:
    "THE Natural Way To Clear Your Mucus, Gunk, Tar from Your Lungs and ",
  midCtaHeadlineAfter: "finally Breathe freely again",
  midCtaBody: [
    {
      text: "Breathe uses 6 science-backed plant extracts to help target & clear stuck mucus...",
      boldPhrase: "6 science-backed plant extracts",
    },
    {
      text: "The root cause of chest tightness, wheezing, shortness of breath, low energy and a constant cough that won't go away.",
    },
    {
      text: "Each doctor backed ingredient is proven to break down mucus buildup, tar and gunk from your lungs... So you can finally breathe freely once again.",
      boldLead:
        "Each ingredient is proven to break down toxic buildup that builds up over years of breathing everyday air...",
    },
  ],
  guarantee: "90-Day Money Back Guarantee",
  sectionHeadlineBefore: "6 Mucus-Clearing Supernutrients",
  sectionHeadlineAfter: " in One Lung Health Formula",
  sectionSubhead:
    "Natural Lung Cleansing Ingredients. Maximum Potency. Backed By Pulmonologists",
};

export const ingredients: Ingredient[] = [
  {
    id: "lemon",
    name: "Lemon Peel",
    tag: "Immune Support",
    description:
      "Rich in vitamin C and antioxidants, it supports immune health and helps cleanse the respiratory system by reducing congestion and clearing mucus.",
    imageAlt: "Lemon Peel",
    imageSrc: "/images/ingredients/lemon_1024x.webp",
  },
  {
    id: "peppermint",
    name: "Peppermint Leaf",
    tag: "Opens Airways",
    description:
      "Known for its menthol content, it provides a cooling sensation that helps relax the bronchial muscles and clear airways, making breathing easier.",
    imageAlt: "Peppermint Leaf",
    imageSrc: "/images/ingredients/ingredient-peppermint-leaf-extract.webp",
  },
  {
    id: "ginger",
    name: "Ginger (Zingiber officinale)",
    tag: "Anti-Inflammatory",
    description:
      "This root is celebrated for its anti-inflammatory properties, which can reduce respiratory tract inflammation, easing discomfort and enhancing lung function.",
    imageAlt: "Ginger (Zingiber officinale)",
    imageSrc: "/images/ingredients/ginger_1024x.webp",
  },
  {
    id: "manuka",
    name: "Manuka Honey",
    tag: "Soothes Throat",
    description:
      "A natural antimicrobial, it soothes the throat and supports a healthier respiratory system by fighting infections and reducing irritation.",
    imageAlt: "Manuka Honey",
    imageSrc: "/images/ingredients/ingredient-honey-extract.jpg",
  },
  {
    id: "mullein",
    name: "Mullein Extract (Verbascum thapsus)",
    tag: "Clears Mucus",
    description:
      "Supports respiratory health by relieving coughs and congestion. It soothes mucous membranes and helps clear mucus, providing relief from throat irritation.",
    imageAlt: "Mullein Extract (Verbascum thapsus)",
    imageSrc: "/images/ingredients/mullein_1024x.webp",
  },
  {
    id: "thyme",
    name: "Thyme Leaf",
    tag: "Expectorant",
    description:
      "Thyme leaves act as an expectorant to help clear mucus, soothing coughs, and fighting respiratory infections due to its antispasmodic, antibacterial, and antiviral properties.",
    imageAlt: "Thyme Leaf",
    imageSrc: "/images/ingredients/thymeleaf-ingredient.jpg",
  },
];
