import {
  useReducer,
  createContext,
  useContext,
} from "react";

import "./App.css";

const ourReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return 0;
  }
};

const Counter = () => {
  const context = useContext(CountContext);

  return (
    <button onClick={() => context.dispatch({ type: "increment" })}>
      Clicked {context.state} times
    </button>
  );
};

const Reset = () => {
  const context = useContext(CountContext);
  return (
    <button onClick={() => context.dispatch({ type: "decrement" })}>
      Reset
    </button>
  );
};

const Panel = ({ children }) => {
  return (
    <div>
      <h1>!!Counter!!</h1>
      {children}
    </div>
  );
};

const Clickers = () => {
  return (
    <Panel>
      <Counter />
      <Reset />
    </Panel>
  );
};

const CountContext = createContext(null);

function App() {
  const [state, dispatch] = useReducer(ourReducer, 0);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      <Clickers />
    </CountContext.Provider>
  );
}

export default App;
