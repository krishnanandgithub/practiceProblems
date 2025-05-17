import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [state, setCount] = useState({ count: 0 });

  return (
    <div>
      <button onClick={() => setCount((prev) => ({ count: prev.count + 1 }))}>
        Clicked {state.count} Times
      </button>
      <button onClick={() => setCount({ count: 0 })}>Reset</button>
    </div>
  );
};

const App = () => (
  <div>
    <Counter />
  </div>
);

export default App;
