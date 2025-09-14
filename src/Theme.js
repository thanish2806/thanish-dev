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

console.log(
`%cTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
   TTTTTTTTTTTTTTTTTTTTTTT
      TTTTTTTTTTTTTTTTT
         TTTTTTTTTT
           TTTTTT
             TT`,
"color: red; font-weight: bold; font-size: 14px;");

console.log(
`              V
              VV
               VV
                VV
                 VV
                  VV
                   VV
                    VV
                     VV
                      VV
                       VV
                        VV
                         VV
                          VV
                           VV
                            VV
                             VVV
                              VVV
                               VVV
                                VVV
                                 VVV
                                  VVV
                                   VVV
                                    VVV
                                     VV
                                      V`,
"color: blue; font-weight: bold; font-size: 14px;");
