/** Max calendar days out for estimated delivery messaging on this PDP. */
export const MAX_DELIVERY_DAYS = 3;

/**
 * Estimated arrival date from today (1–3 days out).
 * Never returns a past date.
 */
export function getDeliveryEta(daysAhead: number = MAX_DELIVERY_DAYS) {
  const days = Math.min(Math.max(1, Math.floor(daysAhead)), MAX_DELIVERY_DAYS);
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);

  return {
    date,
    /** e.g. "Jul 18" */
    short: date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    /** e.g. "Friday, July 18" */
    long: date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }),
  };
}
