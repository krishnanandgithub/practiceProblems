import { useReducer } from "react";
import "./App.css";

const ourReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state * 2;
  }
};

function App() {
  const [times, dispatch] = useReducer(ourReducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>
        Clicked {times} Times
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Clicked {times} Times
      </button>
      <button onClick={() => dispatch({ type: "" })}>
        Clicked {times} Times
      </button>
    </div>
  );
}

export default App;
