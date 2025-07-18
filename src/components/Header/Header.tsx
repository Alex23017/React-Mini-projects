import { Link, useLocation } from "react-router-dom";
import "./header.style.scss";
import { useEffect, useState } from "react";

import Player from "../TodoList/components/Player";
import Theme from "../Theme/Theme";

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
    title: "ThemeTailWind",
    path: "/tailwind",
  },
  {
    id: 10,
    title: "TodoList",
    path: "/todolist",
  },
  {
    id: 11,
    title: "Game",
    path: "/game",
  },
  {
    id: 12,
    title: "Test",
    path: "/test",
  },

];

const Header = () => {
  const [categories, setCategories] = useState(1);
 

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
      <header className="header fixed top-0 left-0 w-full h-30 z-50  bg-gradient-to-r from-rose-600 via-fuchsia-800 to-black shadow-md shadow-black dark:shadow-[rgb(144,245,255)]">
        <nav className="nav">
          <ul className="nav-list">
            {listCat.map((item) => (
              <li
                key={item.id}
                onClick={() => setCategories(item.id)}
                className={`item-link ${categories === item.id ? "active animate-pulse" : ""}`}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="shadow-md shadow-[rgb(144,245,255)] flex gap-10 items-center bg-gradient-to-r from-black/70 via-fuchsia-700 to-black/70 p-2 pl-6 rounded-md">
         <Theme/>
          <div>
            <Player />
          </div>
        </div>
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
