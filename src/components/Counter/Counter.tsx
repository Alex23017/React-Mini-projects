import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { increment, decrement } from "../../redux/counterSlice";
import useModalCounter from "../../utils/useModalCounter";
import backImage from "./assets/backgroundCounter.jpg";
import "./index.scss";

const Counter = () => {
  const { count, canAdd } = useModalCounter();
  const dispatch = useDispatch<AppDispatch>();

  return (
      <div
        className="container-counter bg h-screen w-screen bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${backImage})` }}>
        <div>
          <div className="counter shadow-md shadow-black mt-40">
            <h2>Счетчик:</h2>
            <h1 className="text-6xl p-4">{count}</h1>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  if (canAdd) {
                    dispatch(increment());
                  }
                }}
                className="plus p-4">
                Плюс +
              </button>
              <button
                onClick={() => {
                  if (canAdd) {
                    dispatch(decrement());
                  }
                }}
                className="minus p-4">
                - Минус
              </button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Counter;
