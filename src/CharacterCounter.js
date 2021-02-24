import "./styles.css";
import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const totalCharacters = 20;

  return (
    <div className="App">
      <div className="tweet">
        <h2>Characters Counter</h2>
        <textarea onChange={(x) => setText(x.target.value)}></textarea>
        {/* <p>{text.length}</p> */}
        <p>{totalCharacters - text.length}</p>
      </div>
    </div>
  );
}
