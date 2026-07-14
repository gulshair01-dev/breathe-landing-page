import type { BundleOption } from "@/lib/types";

export const bundleOptions: BundleOption[] = [
  {
    id: "single",
    title: "1x Mullein Drops",
    subtitle: "+$4.95 U.S. shipping",
    discountLabel: "40% OFF",
    price: 49.95,
    compareAtPrice: 83.25,
    shippingNote: "+$4.95 U.S. shipping",
  },
  {
    id: "buy2get1",
    title: "Buy 2 Get 1 FREE",
    subtitle: "3 Bottles + Free shipping",
    discountLabel: "60% OFF",
    price: 33.29,
    compareAtPrice: 83.25,
    badge: "most-popular",
    shippingNote: "3 Bottles + Free shipping",
    selected: true,
  },
  {
    id: "buy3get3",
    title: "Buy 3 Get 3 FREE",
    subtitle: "6 Bottles + Free shipping",
    discountLabel: "70% OFF",
    price: 24.95,
    compareAtPrice: 83.25,
    badge: "best-value",
    shippingNote: "6 Bottles + Free shipping",
    freeGift: {
      label: "FREE Nutrition Guide",
      value: 50,
    },
  },
];

export const productInfo = {
  title: "Breathe®",
  subtitle:
    "Breathe is a natural solution designed to help clear stubborn mucus from the lungs and support overall respiratory health. Formulated with natural mucilage and demulcents like mullein, Manuka honey, and thyme, it soothes the airways and promotes optimal lung function.",
  rating: 4.9,
  reviewCount: "4,537+",
  soldToday: "800+ sold today",
  shipEtaPrefix: "Ready to ship, Arrives by",
  shipEtaDate: "Jul 21",
};
