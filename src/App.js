import "./App.css";
import { useReducer } from "react";
import { useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "timer":
      return { seconds: state.seconds + 1, running: true };
    case "start":
      return { seconds: state.seconds + 1, running: true };
    case "stop":
      return { seconds: state.seconds + 1, running: false };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { seconds: 0, running: false });
  useEffect(() => {
    let interval;
    if (state.running) {
      interval = setInterval(() => {
        dispatch({ type: "timer" });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.running]);

  return (
    <div className="App">
      <div className="btnContainer">
        <button
          onClick={() => {
            dispatch({ type: "start" });
          }}
        >
          Start Timer
        </button>

        <button
          onClick={() => {
            dispatch({ type: "stop" });
          }}
        >
          Stop Timer
        </button>
      </div>
      <h2> Timer: {state.seconds}s </h2>
    </div>
  );
}

export default App;
