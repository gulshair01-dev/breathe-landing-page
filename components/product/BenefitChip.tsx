import { IconWrapper } from "@/components/ui/IconWrapper";

export interface BenefitChipProps {
  label: string;
  icon: string;
}

export function BenefitChip({ label, icon }: BenefitChipProps) {
  return (
    <div className="inline-flex items-center gap-1 text-body-lg font-bold text-text-primary border border-border-primary rounded-full px-2 py-0.5 bg-brand-primary/5">
      <span className="inline-flex items-center justify-center rounded-full text-brand-primary">
        <IconWrapper name={icon} size={18}  />
      </span>
      <span>{label}</span>
    </div>
  );
}
