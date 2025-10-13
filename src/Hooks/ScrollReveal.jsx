// src/components/ScrollReveal.jsx
import React from "react";
import useScrollAnimation from "./useScrollAnimation.jsx";
import "./useScrollAnimation.jsx"; // adjust path as needed

const ScrollReveal = ({ children, animation = "fade-up" }) => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`scroll-animate ${animation}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
