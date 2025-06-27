// src/useTheme.js
import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("darkTheme") === "true";
  });

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    localStorage.setItem("darkTheme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  return { isDarkTheme, toggleTheme };
};

export default useTheme;
