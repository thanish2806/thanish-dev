import React, { useEffect, useState, useRef, useCallback } from "react";
import { getLenisInstance } from "./Hooks/useSmoothScroll.js";
import "./CustomScrollbar.css";

export function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [thumbHeight, setThumbHeight] = useState(60);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const dragStartYRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const maxScrollRef = useRef(0);

  // Recalculate dimensions
  const updateMetrics = useCallback(() => {
    if (typeof window === "undefined") return;

    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = Math.max(1, docHeight - winHeight);
    maxScrollRef.current = maxScroll;

    // Available track height with padding
    const trackPadding = 32; // 16px top and bottom
    const availableTrack = winHeight - trackPadding;

    // Proportional thumb height clamped between 40px and 160px
    const computedThumbHeight = Math.max(
      40,
      Math.min(160, (winHeight / docHeight) * availableTrack)
    );
    setThumbHeight(computedThumbHeight);

    const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
    const progress = Math.min(1, Math.max(0, currentScroll / maxScroll));
    setScrollProgress(progress);
  }, []);

  // Show scrollbar on activity, then fade out after 1.8s
  const pingVisibility = useCallback(() => {
    setIsVisible(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 1800);
  }, []);

  useEffect(() => {
    // Detect touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
    }

    updateMetrics();

    let unsubscribeLenis = null;
    const pollForLenis = setInterval(() => {
      const lenis = getLenisInstance();
      if (lenis) {
        clearInterval(pollForLenis);
        const onLenisScroll = (e) => {
          setScrollProgress(e.progress);
          pingVisibility();
        };
        lenis.on("scroll", onLenisScroll);
        unsubscribeLenis = () => lenis.off("scroll", onLenisScroll);
      }
    }, 100);

    // Fallback native scroll listener
    const onNativeScroll = () => {
      if (!getLenisInstance()) {
        const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
        const progress = Math.min(
          1,
          Math.max(0, currentScroll / (maxScrollRef.current || 1))
        );
        setScrollProgress(progress);
        pingVisibility();
      }
    };

    window.addEventListener("scroll", onNativeScroll, { passive: true });
    window.addEventListener("resize", updateMetrics);

    // Awaken on mouse moving near the right edge (within 50px)
    const onMouseMove = (e) => {
      if (window.innerWidth - e.clientX <= 50) {
        pingVisibility();
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      clearInterval(pollForLenis);
      if (unsubscribeLenis) unsubscribeLenis();
      window.removeEventListener("scroll", onNativeScroll);
      window.removeEventListener("resize", updateMetrics);
      window.removeEventListener("mousemove", onMouseMove);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [updateMetrics, pingVisibility]);

  // Handle Dragging
  const handleThumbMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    dragStartYRef.current = e.clientY;
    dragStartScrollRef.current = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.classList.add("scrollbar-is-dragging");
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e) => {
      const deltaY = e.clientY - dragStartYRef.current;
      const winHeight = window.innerHeight;
      const availableTrack = winHeight - 32 - thumbHeight;
      if (availableTrack <= 0) return;

      const scrollDelta = (deltaY / availableTrack) * maxScrollRef.current;
      const targetScroll = Math.max(
        0,
        Math.min(maxScrollRef.current, dragStartScrollRef.current + scrollDelta)
      );

      const lenis = getLenisInstance();
      if (lenis) {
        lenis.scrollTo(targetScroll, { immediate: true });
      } else {
        window.scrollTo({ top: targetScroll, behavior: "instant" });
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);
      document.body.classList.remove("scrollbar-is-dragging");
      pingVisibility();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.classList.remove("scrollbar-is-dragging");
    };
  }, [isDragging, thumbHeight, pingVisibility]);

  // Click on Track to jump
  const handleTrackClick = (e) => {
    if (e.target === thumbRef.current || thumbRef.current?.contains(e.target)) return;
    const trackRect = trackRef.current?.getBoundingClientRect();
    if (!trackRect) return;

    const clickY = e.clientY - trackRect.top;
    const availableTrack = trackRect.height - thumbHeight;
    const targetProgress = Math.max(
      0,
      Math.min(1, (clickY - thumbHeight / 2) / availableTrack)
    );
    const targetScroll = targetProgress * maxScrollRef.current;

    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(targetScroll, {
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Calculate thumb transform Y
  const availableTrack =
    typeof window !== "undefined" ? window.innerHeight - 32 - thumbHeight : 0;
  const thumbTranslateY = Math.max(0, scrollProgress * Math.max(0, availableTrack));
  const percentText = `${Math.round(scrollProgress * 100)}%`;

  return (
    <>
      {/* Bespoke Floating Custom Scrollbar (Desktop / Tablet) */}
      {!isTouch && (
        <aside
          ref={trackRef}
          className={`custom-scrollbar-dock ${
            isVisible || isHovered || isDragging ? "is-active" : ""
          } ${isDragging ? "is-dragging" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleTrackClick}
          aria-label="Custom scroll controller"
          role="scrollbar"
          aria-valuenow={Math.round(scrollProgress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Subtle Hairline Rail */}
          <div className="custom-scrollbar-rail" />

          {/* Smooth Animated Thumb Pill */}
          <div
            ref={thumbRef}
            className="custom-scrollbar-thumb"
            onMouseDown={handleThumbMouseDown}
            style={{
              height: `${thumbHeight}px`,
              transform: `translate3d(0, ${thumbTranslateY}px, 0)`
            }}
          >
            <div className="thumb-core-pill" />

            {/* Floating Percentage Capsule Badge */}
            <div
              className={`thumb-percentage-badge ${
                isHovered || isDragging ? "show-badge" : ""
              }`}
            >
              <span className="badge-percent-num">{percentText}</span>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export default CustomScrollbar;
