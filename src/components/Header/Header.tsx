import { Link, useLocation } from "react-router-dom";
import "./header.style.scss";
import { useEffect, useState } from "react";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import { useTheme } from "../ThemeContext/ThemeContext";

const listCat = [
  {
    id: 1,
    title: "HOME",
    path: "/",
  },
  {
    id: 2,
    title: "COUNTER",
    path: "/counter",
  },
  {
    id: 3,
    title: "MODAL",
    path: "/modal",
  },
  {
    id: 4,
    title: "QUIZ",
    path: "/quiz",
  },
  {
    id: 5,
    title: "RenderUsers",
    path: "/users",
  },
  {
    id: 6,
    title: "ConvectorValue",
    path: "/convector",
  },
  {
    id: 7,
    title: "AppGallery",
    path: "/gallery",
  },
  {
    id: 8,
    title: "LazyLoading",
    path: "/lazyloading",
  },
  {
    id: 9,
    title: "Test",
    path: "/test",
  },
  {
    id: 10,
    title: "Test2",
    path: "/test2",
  },
];

const Header = () => {
  const [categories, setCategories] = useState(1);
  const { theme, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location.pathname]);

 

  

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list ">

            {listCat.map((item) => (
              <li
                key={item.id}
                onClick={() => setCategories(item.id)}
                className={`item-link ${categories === item.id ? "active animate-pulse" : ""}`}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
            <div
              onClick={toggleTheme}
              className={`toggleDay-container dark:shadow-white shadow-black shadow-md dark:shadow-sm ${theme === "dark" ? "backgroundNight" : ""}`}>
              <div className={`toggleDay-img ${theme === "dark" ? "theme_moon" : "theme_light"}`}>
                <img
                  className={`shadow-md shadow-black dark:shadow-white ${theme === "dark" ? "theme_moon" : "theme_light"}`}
                  src={theme === "dark" ? moon : sun}
                  alt=""
                />
              </div>
            </div>
          </ul>
        </nav>
      </header>

      {open && (
        <div className="container-project">
          <h2>MY PROJECT ✍(◔◡◔)</h2>
        </div>
      )}
    </>
  );
};

export default Header;
