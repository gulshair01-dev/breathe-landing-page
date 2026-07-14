import type { FooterColumn } from "@/lib/types";

export const footerColumns: FooterColumn[] = [
  {
    title: "Menu",
    links: [
      { label: "Shop Now", href: "#" },
      { label: "Track Order", href: "#" },
      { label: "Subscription Terms", href: "#" },
      { label: "Manage Subscription", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "+1 (330) 521-3590", href: "tel:+13305213590" },
 
      { label: "support@herbalteatherapy.com", href: "mailto:support@herbalteatherapy.com" },
      { label: "Monday to Sunday: 24/7", href: "#" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Refund Policy", href: "#" },
      { label: "Shipping Policy", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export const footerDisclaimer =
  "Disclaimer: These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.";

export const footerCopyright = "© 2026, Pulmoria. All rights reserved.";
