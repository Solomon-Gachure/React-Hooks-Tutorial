import { useReducer } from "react";
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
const Reducer = () => {
  //state - holds the default state value, dispatch - Fn that sends an action to update the state
  //counterReducer - Fn that returns the new state based on the action type
  //{count:0} - Holds the default state value
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="reducercard">
      <h1>UseReducer Tutorial</h1>
      <div>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default Reducer;
