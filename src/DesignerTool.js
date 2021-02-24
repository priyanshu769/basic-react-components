import "./styles.css";
import { useState } from "react";

export default function DesignerTool() {
  const [fontpx, setFontpx] = useState(8);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [color, setColor] = useState("#000000");
  const [font, setFont] = useState("stick");
  const [userText, setUserText] = useState("");
  const styleObj = {
    fontSize: fontpx,
    backgroundColor: bgColor,
    color: color,
    fontFamily: font
  };
  const inputHandle = (x) => {
    if (x.target.name == "fonts") {
      console.log(x.target.value);
      setFont(x.target.value);
    } else if (x.target.name == "color") {
      setColor(x.target.value);
    } else if (x.target.name == "bgcolor") {
      setBgColor(x.target.value);
    } else if (x.target.name === "userText") {
      setUserText(x.target.value);
    }
  };

  return (
    <div className="App">
      <h2>Designer Tool</h2>
      <h3>Style it yourself!</h3>
      <p>
        <button
          onClick={() => {
            if (fontpx <= 8) {
              setFontpx(8);
            } else if (fontpx > 8) {
              setFontpx(fontpx - 8);
            }
          }}
        >
          -
        </button>
        <span>
          <strong> {fontpx}px </strong>
        </span>
        <button
          onClick={() => {
            setFontpx(fontpx + 8);
          }}
        >
          +
        </button>
        <br />
        <input
          placeholder="Add Background Color"
          name="bgcolor"
          onChange={
            inputHandle
            // (x) => {
            // setBgColor(x.target.value);
            // }
          }
        />
        <br />
        <input
          placeholder="Add Text Color"
          name="color"
          onChange={
            inputHandle
            // (x) => {
            // setColor(x.target.value);
            // }
          }
        />
        <br />
        <select onChange={inputHandle} name="fonts">
          <option value="Stick">Stick</option>
          <option value="Akay Telivigala">Akay Telivigala</option>
          <option value="Raleway">Raleway</option>
          <option value="Oswald">Oswald</option>
        </select>
        <br />
        <textarea
          name="userText"
          placeholder="Enter Your own text!"
          onChange={inputHandle}
        ></textarea>
      </p>
      <div style={styleObj}>
        <p>
          <strong>Some random sassy text!</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <p>{userText}</p>
      </div>
      <p className="cssArea">
        font-size: {fontpx};<br /> background-color: {bgColor};<br /> color:{" "}
        {color};<br />
        font-family: {font};
      </p>
      <p style={{ fontFamily: "calibri" }}>
        You may need to import the font. Use "Google Fonts".
      </p>
    </div>
  );
}
