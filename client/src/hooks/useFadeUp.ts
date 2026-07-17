import { useEffect, useRef } from "react";

/**
 * useFadeUp — attaches an IntersectionObserver to trigger
 * the .fade-up → .visible and .fade-up-stagger → .visible CSS transitions on scroll.
 */
export function useFadeUp(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe all .fade-up and .fade-up-stagger children
    const targets = el.querySelectorAll(".fade-up, .fade-up-stagger");
    targets.forEach((t) => observer.observe(t));

    // Also observe the container itself if it has either class
    if (el.classList.contains("fade-up") || el.classList.contains("fade-up-stagger")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
