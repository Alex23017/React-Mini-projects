
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import { useTheme } from "../ThemeContext/ThemeContext";

const Theme = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <div
      onClick={toggleTheme}
      className={`toggleDay-container w-20 shadow-md shadow-[rgb(144,245,255)] ${theme === "dark" ? "backgroundNight" : ""}`}>
      <div className={`toggleDay-img ${theme === "dark" ? "theme_moon" : "theme_light"}`}>
        <img
          className={`shadow-md shadow-[rgb(144,245,255)] ${theme === "dark" ? "theme_moon" : "theme_light"}`}
          src={theme === "dark" ? moon : sun}
          alt=""
        />
      </div>
    </div>
  );
};

export default Theme;
