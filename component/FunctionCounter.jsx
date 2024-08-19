import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleClickDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleAddAmount = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const number = parseInt(formData.get("number"));

    dispatch({
      type: "increment_amount",
      amount: number,
    });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <button style={{ width: 50 }} onClick={handleClickDecrement}>
          -
        </button>
        <h3>{counter}</h3>
        <button style={{ width: 50 }} onClick={handleClickIncrement}>
          +
        </button>
      </div>
      <form onSubmit={handleAddAmount}>
        <input name="number" type="number" />
        <button type="submit">add amount</button>
      </form>
    </>
  );
};

export default Counter;
