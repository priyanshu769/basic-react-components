import { useState } from "react";
import "./styles.css";

export default function Toast() {
  const [toast, setToast] = useState("none");
  const styleObj = {
    display: toast
  };
  return (
    <div className="App">
      <h2>Show Toast</h2>
      <button
        onClick={() => {
          setToast("");
        }}
        className="showBtn"
      >
        Show Toast
      </button>
      <div style={styleObj} class="toastComp">
        <button
          onClick={() => {
            setToast("none");
          }}
        >
          Hide Toast
        </button>
        <p>Toast Text</p>
      </div>
    </div>
  );
}
