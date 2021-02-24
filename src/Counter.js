import "./styles.css";
import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <h2>Counter</h2>
      <p>
        <button
          onClick={() => {
            setNum(num - 1);
          }}
        >
          -
        </button>
        <span>
          {" "}
          <strong>{num}</strong>{" "}
        </span>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          +
        </button>
      </p>
    </div>
  );
}
