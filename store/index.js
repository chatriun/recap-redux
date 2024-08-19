import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  } else if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  } else if (action.type === "increment_amount") {
    return { counter: state.counter + action.amount };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
