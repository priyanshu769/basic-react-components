import { useState } from "react";
import "./styles.css";

export default function DarkMode() {
  const [mode, setMode] = useState("App darkModeOff");
  const clickHandler = () => {
    console.log(mode);
    if (mode === "App darkModeOff") {
      setMode("App darkModeOn");
    } else if (mode === "App darkModeOn") {
      setMode("App darkModeOff");
    }
  };
  return (
    <div className={mode}>
      <h2>Dark Mode</h2>
      <button onClick={clickHandler} className="showBtn">
        Dark?
      </button>
      <div>
        <p>Some Random Text</p>
      </div>
    </div>
  );
}
