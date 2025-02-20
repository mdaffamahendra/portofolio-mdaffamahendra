import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
