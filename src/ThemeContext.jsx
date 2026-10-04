import React, { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("thanish-theme");
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    // Check legacy key
    const legacy = localStorage.getItem("darkTheme");
    if (legacy !== null) {
      return legacy === "true" ? "dark" : "light";
    }
    // System preference fallback
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  const isDarkTheme = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme === "dark" ? "dark-theme" : "light-theme");
    localStorage.setItem("thanish-theme", theme);
    localStorage.setItem("darkTheme", isDarkTheme);
  }, [theme, isDarkTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
