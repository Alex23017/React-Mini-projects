import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext<ITheme | undefined>(undefined);

type Theme = "light" | "dark";

interface ITheme {
  theme: Theme;
  toggleTheme: () => void;
}

interface Children {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Children) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("storage");
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem("storage", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Error Theme Context");
  return context;
};
