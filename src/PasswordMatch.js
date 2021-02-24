import "./styles.css";
import { useState } from "react";

export default function PasswordMatch() {
  const [password, setPassword] = useState("");
  const [displayText, setDisplayText] = useState("");
  function passwordMatch(y) {
    let passwordRe = y.target.value;
    if (passwordRe === password) {
      setDisplayText("Good to go");
    } else if (passwordRe !== password) {
      setDisplayText("Password does not match.");
    }
  }
  return (
    <div className="App">
      <div className="passwordMatch">
        <h2>Password Match</h2>
        <input
          placeholder="Enter password..."
          type="password"
          onChange={(x) => {
            setPassword(x.target.value);
          }}
        />
        <br />
        <input
          placeholder="Re-Enter password..."
          type="password"
          onChange={passwordMatch}
        />
        <p>{displayText}</p>
      </div>
    </div>
  );
}
