import type { FooterColumn } from "@/lib/types";

export const footerBrand = {
  name: "Breathe®",
  address: "30 N Gould St Ste R Sheridan, WY 82801",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Contact",
    links: [
      { label: "+1 (330) 521-3590", href: "tel:+13305213590" },
      {
        label: "support@herbalteatherapy.com",
        href: "mailto:support@herbalteatherapy.com",
      },
    ],
  },
  {
    title: "Policies",
    links: [
      {
        label: "Privacy Policy",
        href: "https://herbalteatherapy.com/pages/privacy-policy",
      },
      {
        label: "Terms of Service",
        href: "https://herbalteatherapy.com/pages/terms-of-service",
      },
    ],
  },
];

export const footerDisclaimer =
  "Disclaimer: These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.";

export const footerCopyright = "© 2026, Breathe. All rights reserved.";
