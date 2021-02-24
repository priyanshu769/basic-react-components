import "./styles.css";
import { useState } from "react";
// Try doing this with prop.
const Home = () => {
  return (
    <div className="home">
      <p>Home Page</p>
    </div>
  );
};
const About = () => {
  return (
    <div className="about">
      <p>About Page</p>
    </div>
  );
};
const Profile = () => {
  return (
    <div className="profile">
      <p>Profile Page</p>
    </div>
  );
};

export default function SwitchTabs() {
  let [clickedBtn, setClickedBtn] = useState(<Home />);
  function btnHandler(x) {
    // console.log(x.target.id);
    setClickedBtn(x.target.id);
  }
  return (
    <div className="App">
      <h2>Switch Tabs</h2>
      <div>
        <button
          id="Home"
          onClick={() => {
            setClickedBtn(<Home />);
          }}
        >
          Home
        </button>
        <button
          id="About"
          onClick={() => {
            setClickedBtn(<About />);
          }}
        >
          About
        </button>
        <button
          id="Profile"
          onClick={() => {
            setClickedBtn(<Profile />);
          }}
        >
          Profile
        </button>
      </div>
      {/* I want to do this one where it automatically take that which button is clicked. */}
      {/* <div>
        <button id="Home" onClick={(btnHandler)}>
          Home
        </button>
        <button id="About" onClick={btnHandler}>
          About
        </button>
        <button id="Profile" onClick={btnHandler}>
          Profile
        </button>
      </div> */}
      {clickedBtn}
    </div>
  );
}
