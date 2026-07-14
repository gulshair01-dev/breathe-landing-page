import type { TrustBadgeItem } from "@/lib/types";

export const announcementBadges: TrustBadgeItem[] = [
  { id: "free-shipping", label: "Free Shipping", icon: "truck" },
  { id: "trusted", label: "Trusted by 100K+", icon: "star" },
  { id: "returns", label: "Easy Returns", icon: "rotate-cw" },
];

/** Featured 2x2 cards in TrustBadgesGrid */
export const trustFeatureBadges: TrustBadgeItem[] = [
  { id: "herbalist", label: "Herbalist Inspired", icon: "leaf" },
  { id: "tested", label: "Third Party Tested", icon: "microscope" },
  { id: "clean", label: "Clean Ingredients", icon: "droplet" },
  { id: "facilities", label: "Trusted Facilities", icon: "handshake" },
];

/** Footer check-list badges in TrustBadgesGrid */
export const trustFooterBadges: TrustBadgeItem[] = [
  { id: "vegan", label: "Vegan-Friendly", icon: "check" },
  { id: "no-artificial", label: "No Artificial Additives", icon: "check" },
  { id: "no-sugar", label: "No Added Sugar", icon: "check" },
  { id: "gluten", label: "Gluten-Free", icon: "check" },
  { id: "nongmo", label: "Non-GMO", icon: "check" },
  { id: "alcohol", label: "Alcohol-Free", icon: "check" },
];

/** @deprecated Prefer trustFeatureBadges + trustFooterBadges */
export const trustGridBadges: TrustBadgeItem[] = [
  ...trustFeatureBadges,
  ...trustFooterBadges,
];
