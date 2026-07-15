import {
  footerBrand,
  footerColumns,
  footerCopyright,
  footerDisclaimer,
} from "@/lib/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-page">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="grid gap-8 py-10 sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xl font-black tracking-tight text-brand-forest">
              {footerBrand.name}
            </p>
            <p className="text-body leading-relaxed text-text-muted">
              {footerBrand.address}
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-body-lg font-bold text-text-primary">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-text-muted hover:text-brand-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-body leading-relaxed text-text-muted">
          {footerDisclaimer}
        </p>
        <p className="mt-4 text-body text-text-muted">{footerCopyright}</p>
      </div>
    </footer>
  );
}
