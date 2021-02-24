import "./styles.css";
import { useState } from "react";

export default function ShowPassword() {
  const [show, setShow] = useState(false);

  function submitHandler() {
    console.log("Yeah! We got your password.");
  }

  return (
    <div className="App">
      <div className="passwordMatch">
        <h2>Show Password</h2>
        <input type={show ? "text" : "password"} />
        <br />
        <input type={show ? "text" : "password"} />
        <br />
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        <br />
        <input onClick={submitHandler} type="submit" />
      </div>
    </div>
  );
}
