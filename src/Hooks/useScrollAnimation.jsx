import { useEffect, useRef } from "react";
import "./useScrollAnimation.css";

function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // stop watching once visible
          }
        });
      },
      { threshold: 0.2 } // 👈 threshold should go here, not inside dependencies
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []); // 👈 empty dependency array — runs only once

  return ref;
}

export default useScrollAnimation;
