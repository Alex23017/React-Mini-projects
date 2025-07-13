import { useTheme } from "../../ThemeContext/ThemeContext";
import moon from "../../Theme/assets/moon.svg";
import sun from "../../Theme/assets/sun.svg";

const TaiwLindTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="bg-amber-300/80 p-8 cursor-pointer rounded-full dark:bg-white/50 hover:translate-y-0.5 inline-block" >
      <span className="day" onClick={toggleTheme}>
        <img className="w-10" src={theme === "light" ? sun : moon} alt="" />
      </span>
    </div>
  );
};

export default TaiwLindTheme;
