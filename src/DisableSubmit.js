import "./styles.css";
import { useState } from "react";

export default function DisableSubmit() {
  const [password, setPassword] = useState("");
  const [submitBtn, setSubmitBtn] = useState("true");

  function submitHandler() {
    console.log("Yeah! We got your password.");
  }

  return (
    <div className="App">
      <div className="disableSubmit">
        <h2>Disable Submit</h2>
        <input
          type="password"
          onChange={(x) => {
            setPassword(x.target.value);
          }}
        />
        <br />
        <input
          type="password"
          onChange={(y) => {
            if (password === y.target.value) {
              setSubmitBtn("");
            } else if (password !== y.target.value) {
              setSubmitBtn("true");
            }
          }}
        />
        <br />
        <input disabled={submitBtn} onClick={submitHandler} type="submit" />
      </div>
    </div>
  );
}
