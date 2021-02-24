import "./styles.css";
import { useState } from "react";

export default function AlphanumericPass() {
  const [displayText, setDisplayText] = useState("");
  const [password, setPassword] = useState("");
  // function checkAlphanum(x) {
  //   const idlePass = new RegExp(/\d/);
  //   console.log(x.target.value);
  //   console.log(idlePass.test(x.target.value));
  //   if (idlePass.test(x.target.value) === true) {
  //     setDisplayText("Good to go!");
  //   } else if (idlePass.test(x.target.value) === false) {
  //     setDisplayText("Error! Atleast add a number to your password.");
  //   }
  // }

  // It can be the second approach.
  const checkAlphanum = () => {
    if (
      password.includes(1) ||
      password.includes(1) ||
      password.includes(2) ||
      password.includes(3) ||
      password.includes(4) ||
      password.includes(5) ||
      password.includes(6) ||
      password.includes(7) ||
      password.includes(8) ||
      password.includes(9) ||
      password.includes(0)
    ) {
      setDisplayText("Your password has a digit, good.");
    } else setDisplayText("Password needs to have atleast one digit.");
  };
  return (
    <div className="App">
      <div className="aphanumeric">
        <h2>Alphanumeric Password</h2>
        <input
          value={password}
          type="password"
          onChange={(x) => setPassword(x.target.value)}
        />
        <br />
        <input type="password" onChange={checkAlphanum} />
        <p>{displayText}</p>
      </div>
    </div>
  );
}
