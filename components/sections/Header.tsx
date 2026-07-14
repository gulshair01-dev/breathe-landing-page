import { IconWrapper } from "@/components/ui/IconWrapper";
import Link from "next/link";
export function Header() {
  return (
    <header className="border-b border-border-subtle bg-surface-page">
      <div className="mx-auto grid max-w-content grid-cols-[1fr_auto_1fr] items-center px-section-x py-3">
        <div />
        <Link
          href="/"
          className="text-center text-xl font-black tracking-tight text-brand-forest"
        >
          PULMORIA
        </Link>
        <div className="flex justify-end">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-brand-forest"
            aria-label="Cart, 0 items"
          >
            <IconWrapper name="cart" size={22} />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-text-inverse">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
