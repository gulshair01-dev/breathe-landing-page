import {
  AmericanExpressFlatRoundedIcon,
  MastercardFlatRoundedIcon,
  PayPalFlatRoundedIcon,
  VisaFlatRoundedIcon,
} from "react-svg-credit-card-payment-icons";
import { siApplepay, siGooglepay, siShopify } from "simple-icons";

const ICON_HEIGHT = 14;

function SimpleBrandIcon({
  path,
  hex,
  title,
  width = 24,
}: {
  path: string;
  hex: string;
  title: string;
  width?: number;
}) {
  return (
    <svg
      height={ICON_HEIGHT}
      width={width}
      viewBox="0 0 24 24"
      fill={`#${hex}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

const paymentMethods = [
  {
    id: "amex",
    label: "American Express",
    render: () => <AmericanExpressFlatRoundedIcon height={ICON_HEIGHT} />,
  },
  {
    id: "mastercard",
    label: "Mastercard",
    render: () => <MastercardFlatRoundedIcon height={ICON_HEIGHT} />,
  },
  {
    id: "visa",
    label: "Visa",
    render: () => <VisaFlatRoundedIcon height={ICON_HEIGHT} />,
  },
  {
    id: "google-pay",
    label: "Google Pay",
    render: () => (
      <SimpleBrandIcon
        path={siGooglepay.path}
        hex={siGooglepay.hex}
        title={siGooglepay.title}
      />
    ),
  },
  {
    id: "apple-pay",
    label: "Apple Pay",
    render: () => (
      <SimpleBrandIcon
        path={siApplepay.path}
        hex={siApplepay.hex}
        title={siApplepay.title}
      />
    ),
  },
  {
    id: "paypal",
    label: "PayPal",
    render: () => <PayPalFlatRoundedIcon height={ICON_HEIGHT} />,
  },
  {
    id: "shopify",
    label: "Shopify",
    render: () => (
      <SimpleBrandIcon
        path={siShopify.path}
        hex={siShopify.hex}
        title={siShopify.title}
      />
    ),
  },
] as const;

export function PaymentMethodIcons() {
  return (
    <ul
      className="flex flex-wrap items-center justify-center gap-1.5"
      aria-label="Accepted payment methods"
    >
      {paymentMethods.map(({ id, label, render }) => (
        <li key={id} title={label} className="inline-flex items-center">
          {render()}
        </li>
      ))}
    </ul>
  );
}
