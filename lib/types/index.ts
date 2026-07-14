export interface TrustBadgeItem {
  id: string;
  label: string;
  icon: string;
}

export interface BenefitItem {
  id: string;
  label: string;
  icon: string;
}

export interface BundleOption {
  id: string;
  title: string;
  subtitle: string;
  discountLabel: string;
  price: number;
  compareAtPrice?: number;
  badge?: "most-popular" | "best-value";
  shippingNote: string;
  selected?: boolean;
  freeGift?: {
    label: string;
    value: number;
  };
}

export interface ProductAccordionItem {
  id: string;
  title: string;
  content: string;
  ingredients?: Array<{
    name: string;
    benefits: string[];
  }>;
  footer?: string;
}

export interface ClinicalBenefit {
  id: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  age?: number;
  verified: boolean;
  chips?: string[];
  imageAlt: string;
  imageSrc?: string;
}

export interface ProblemSymptom {
  id: string;
  text: string;
}

export interface StatItem {
  id: string;
  value: string;
  caption: string;
}

export interface Ingredient {
  id: string;
  name: string;
  tag: string;
  description: string;
  imageAlt: string;
  imageSrc?: string;
}

export interface TimelineStep {
  id: string;
  dayLabel: string;
  title: string;
  bullets: string[];
  percentHighlight: string;
  percentRest: string;
}

export interface ComparisonRow {
  id: string;
  feature: string;
  others: boolean;
  pulmoria: boolean;
}

export interface ExpertQuote {
  id: string;
  name: string;
  title: string;
  quote: string;
  imageAlt: string;
  imageSrc?: string;
}

export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
