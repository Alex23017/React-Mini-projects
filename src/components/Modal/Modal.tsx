import "./index.scss";
import { setOpen } from "../../redux/modalSlice";
import { RenderPopup, useModalPopup } from "../../utils/useModalPopup";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import bgImage from "./assets/bgModal.jpg"

function Modal() {
  const { open, canOpen } = useModalPopup();
  const dispatch = useDispatch<AppDispatch>();


  return (
    <div className="container-modal py-40 h-screen  bg-no-repeat bg-cover bg-center flex items-center "
    style={{backgroundImage: `url(${bgImage})`}}>
      <button onClick={() => canOpen && dispatch(setOpen())} className="open-modal-btn drop-shadow-lg">
        ✨ Open modal
      </button>
      <RenderPopup open={open} canOpen={canOpen} />
    </div>
  );
}

export default Modal;
