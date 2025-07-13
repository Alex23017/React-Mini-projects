import "./index.scss";
import { setOpen } from "../../redux/modalSlice";
import { RenderPopup, useModalPopup } from "../../utils/useModalPopup";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";

function Modal() {
  const { open, canOpen } = useModalPopup();
  const dispatch = useDispatch<AppDispatch>();


  return (
    <div className="container-modal mt-40 ">
      <button onClick={() => canOpen && dispatch(setOpen())} className="open-modal-btn drop-shadow-lg">
        ✨ Открыть окно
      </button>
      <RenderPopup open={open} canOpen={canOpen} />
    </div>
  );
}

export default Modal;
