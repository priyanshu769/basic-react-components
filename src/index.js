import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";
import CharacterCounter from "./CharacterCounter";
import PasswordMatch from "./PasswordMatch";
import AlphanumericPass from "./AlphanumericPass";
import DisableSubmit from "./DisableSubmit";
import ShowPassword from "./ShowPassword";
import DesignerTool from "./DesignerTool";
import AddToCart from "./AddToCart";
import SwitchTabs from "./SwitchTabs";
import Toast from "./Toast";
import DarkMode from "./DarkMode";
import Todo from "./ToDo";
import LikeInAList from "./LikeInAList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Counter /> {/*01*/}
    <CharacterCounter /> {/*02*/}
    <PasswordMatch /> {/*03*/}
    <AlphanumericPass /> {/*04*/}
    <DisableSubmit /> {/*05*/}
    <ShowPassword /> {/*06*/}
    <DesignerTool /> {/*07*/}
    <AddToCart /> {/*08*/}
    <SwitchTabs /> {/*09*/}
    <Toast /> {/*10*/}
    <Todo /> {/*11*/}
    <DarkMode /> {/*12*/}
    <LikeInAList /> {/*13*/}
  </StrictMode>,
  rootElement
);
