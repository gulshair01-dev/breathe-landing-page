import { TrustBadge } from "@/components/product/TrustBadge";
import { announcementBadges } from "@/lib/data/trustBadges";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-forest text-text-inverse">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-2 gap-y-2 px-section-x py-2.5">
        {announcementBadges.map((item, index) => (
          <TrustBadge
            key={item.id}
            item={item}
            variant="announcement"
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
