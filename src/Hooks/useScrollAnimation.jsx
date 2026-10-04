import { useEffect, useRef } from "react";
import "./useScrollAnimation.css";

function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.15 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect user's motion preference
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target); // triggerOnce: true
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default useScrollAnimation;
