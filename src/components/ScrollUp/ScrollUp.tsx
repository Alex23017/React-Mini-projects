import { useEffect, useState } from "react";
import "./style.scss";
import imgScroll from "./assets/arrowUp.png";

const ScrollUp = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const openScroll = () => {
      if (window.scrollY > 100) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    window.addEventListener("scroll", openScroll);
    return () => {
      window.removeEventListener("scroll", openScroll);
    };
  }, []);

  const ScrollMove = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {open && (
        <div
          onClick={ScrollMove}
          className="Container-scroll  hover:translate-y-0.5 bg-black/80 p-8 
                  rounded-full cursor-pointer
           shadow-md shadow-[rgb(144,245,255)]">
          <button className="button-scroll">
            {" "}
            <img className="w-10 h-10 bg-white/30 rounded-full" src={imgScroll} alt="" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollUp;
