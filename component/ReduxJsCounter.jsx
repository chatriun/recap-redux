import { counterActions } from "@/store/counter";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);

  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleClickDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <h3>@reduxjs/toolkit</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <button style={{ width: 50 }} onClick={handleClickDecrement}>
          -
        </button>
        <h3>{counter}</h3>
        <button style={{ width: 50 }} onClick={handleClickIncrement}>
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
