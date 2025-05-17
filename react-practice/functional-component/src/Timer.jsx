import { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("ticking...");
      setSecond((prev) => {
        return prev + 1;
      });
    }, 1000);

    return () => {
      console.log("clear interval");
      clearInterval(id);
    };
  }, []);

  return <div>Seconds: {second}</div>;
};

const App = () => {
  const [showTime, setShowTime] = useState(false);
  const toggle = () => {
    setShowTime((prev) => !prev);
  };

  return (
    <div>
      <div>{showTime && <Timer />}</div>
      <button type="reset" onClick={toggle}>
        Toggle Timer
      </button>
    </div>
  );
};

export default App;
