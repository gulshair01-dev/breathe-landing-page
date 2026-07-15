/**
 * Compact "Amazon approved" corner badge for the product gallery.
 * Logo is the Amazon wordmark + smile (inline SVG — not from simple-icons).
 */
export function AmazonApprovedBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute left-2 top-2 z-10 flex max-w-[42%] items-center gap-1.5 rounded-md bg-white/95 px-2 py-1.5 shadow-sm ring-1 ring-black/10 sm:left-3 sm:top-3 sm:max-w-[38%] sm:gap-2 sm:px-2.5 sm:py-2 ${className}`}
      aria-label="Available on Amazon"
    >
      <AmazonLogo className="h-3.5 w-auto shrink-0 sm:h-4" />
      <span className="truncate text-[10px] font-bold leading-tight text-[#131921] sm:text-[11px]">
        Approved
      </span>
    </div>
  );
}

function AmazonLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 30"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <title>Amazon</title>
      {/* Wordmark "amazon" stylized + smile curve — trademark orange #FF9900 */}
      <text
        x="2"
        y="18"
        fill="#131921"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        amazon
      </text>
      <path
        d="M12 22c10 5 28 5 40-1"
        fill="none"
        stroke="#FF9900"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M48 18l4 3-5 1"
        fill="none"
        stroke="#FF9900"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
