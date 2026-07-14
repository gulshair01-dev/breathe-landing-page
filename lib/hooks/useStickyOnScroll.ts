"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Returns true once the observed element has scrolled out of view
 * (used for sticky add-to-cart bar).
 */
export function useStickyOnScroll(
  targetRef: RefObject<Element | null>,
  options?: IntersectionObserverInit,
): boolean {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px", ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetRef, options]);

  return isSticky;
}
