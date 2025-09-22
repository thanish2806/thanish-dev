import React, { useEffect, useState } from "react";
import "./loader.css";

const Loader = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 2800); // matches animation duration
    return () => clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <div className="loader-overlay">
      <div className={`loader-cover1 ${active ? "active" : ""}`}></div>
      <div className={`loader-cover2 ${active ? "active" : ""}`}></div>
    </div>
  );
};

export default Loader;
