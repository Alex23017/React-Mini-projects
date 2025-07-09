import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setCanAdd, setCount } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

const useModalCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const canAdd = useSelector((state: RootState) => state.counter.canAdd);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (location.pathname === "/counter") {
      dispatch(setCanAdd(true));
    } else {
      dispatch(setCanAdd(false));
      dispatch(setCount());
    }
  }, [location.pathname, dispatch]);
  return {count, canAdd}
};

export default useModalCounter;
