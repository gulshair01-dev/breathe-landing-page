export interface PriceProps {
  amount: number;
  compareAt?: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  inverted?: boolean;
}

function formatMoney(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function Price({
  amount,
  compareAt,
  currency = "USD",
  size = "md",
  className = "",
  inverted = false,
}: PriceProps) {
  const sizes = {
    sm: "text-body-lg",
    md: "text-cta",
    lg: "text-title",
  };
  const color = inverted ? "text-text-inverse" : "text-text-primary";
  const strikeColor = inverted ? "text-text-inverse/70" : "text-text-muted";

  return (
    <span className={`inline-flex items-baseline gap-2 font-bold ${sizes[size]} ${className}`}>
      <span className={color}>{formatMoney(amount, currency)}</span>
      {compareAt !== undefined && compareAt > amount ? (
        <span className={`${strikeColor} line-through font-normal text-body-lg`}>
          {formatMoney(compareAt, currency)}
        </span>
      ) : null}
    </span>
  );
}
