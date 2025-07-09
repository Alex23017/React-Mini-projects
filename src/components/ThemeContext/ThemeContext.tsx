import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

type Theme = "light" | "dark";

interface IThemeProvider {
  theme: Theme;
  toggleTheme: () => void;
}

interface iChildren {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeProvider | undefined>(undefined);

export const ThemeProvider = ({ children }: iChildren) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("storage");
    return saved === "dark" || saved === "light" ? saved : "light";
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("storage", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const contextTheme = useContext(ThemeContext);
  if (!contextTheme) throw new Error("useTheme must be used inside ThemeProvider");
  return contextTheme;
};
