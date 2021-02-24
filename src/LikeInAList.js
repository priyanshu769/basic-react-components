import "./styles.css";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const list = [
  {
    itemName: "Item1",
    img:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-20561,resizemode-1,msid-8845408/opinion/vedanta/butterflies-arent-free/new-section/butterfly.jpg",
    text: "some desc"
  },
  {
    itemName: "Item2",
    img:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-20561,resizemode-1,msid-8845408/opinion/vedanta/butterflies-arent-free/new-section/butterfly.jpg",
    text: "some desc2"
  },
  {
    itemName: "Item3",
    img:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-20561,resizemode-1,msid-8845408/opinion/vedanta/butterflies-arent-free/new-section/butterfly.jpg",
    text: "some desc3"
  }
];
function LikeButton() {
  const [liked, setliked] = useState(false);
  return (
    <button
      style={liked ? { color: "red" } : { color: "inherit" }}
      onClick={() => setliked(!liked)}
    >
      <FaHeart />
    </button>
  );
}
function Element() {
  return (
    <div>
      <ul>
        {list.map((listItem) => (
          <li>
            <h3>{listItem.itemName}</h3>
            <img style={{ width: "100px" }} src={listItem.img} alt="post img" />
            <p>
              {listItem.text} <LikeButton />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LikeInAList() {
  return (
    <div className="App">
      <h2>Like In a List</h2>
      <Element />
    </div>
  );
}
