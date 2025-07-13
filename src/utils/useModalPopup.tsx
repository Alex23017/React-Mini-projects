/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { setCanOpen, setOpen } from "../redux/modalSlice";

interface RenderPopupProps {
  open: boolean;
  canOpen: boolean;
}

export const RenderPopup = ({ open, canOpen }: RenderPopupProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(setOpen());

    }
  };

  return (
    <div onClick={handleClick} className={`overlay animated ${open ? "show" : ""}`}>
      <div className="modal">
        <svg
          onClick={() => canOpen && dispatch(setOpen())}
          height="200"
          viewBox="0 0 200 200"
          width="200">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </div>
    </div>
  );
};

export const useModalPopup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/modal") {
      dispatch(setCanOpen(true));
    } else {
      dispatch(setCanOpen(false));
    }
  }, [location.pathname, dispatch]);

  const open = useSelector((state: RootState) => state.modal.open);
  const canOpen = useSelector((state: RootState) => state.modal.canOpen);

  return { open, canOpen };
};
