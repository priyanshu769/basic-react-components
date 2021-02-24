import "./styles.css";
import { useState } from "react";

function Cart(props) {
  return (
    <div>
      <h4 className="cart" onClick={props.cart}>
        Cart🛒
      </h4>
      <p style={props.style}>{props.productList}</p>
    </div>
  );
}
function ProductCard(props) {
  return (
    <div className="productCard">
      <h3>{props.name}</h3>
      <button id={props.name} onClick={props.btnHandler}>
        AddtoCart
      </button>
    </div>
  );
}

export default function App() {
  const [cartList, setCartList] = useState([
    // { productName: "Pencil", freq: 1 }
    // { productName: "Pen", freq: 1 },
    // { productName: "Sharpner", freq: 1 }
    // { productName: "Eraser", freq: 1 }
  ]);
  const [cartState, setCartState] = useState(false);
  const addToCartHandle = (x) => {
    const filterCartList = cartList.find(
      (item) => item.productName === x.target.id
    );
    console.log(filterCartList);
    if (filterCartList) {
      setCartList(
        cartList.map((item1) => {
          if (item1.productName === x.target.id) {
            return { ...item1, freq: item1.freq + 1 };
          } else if (item1 !== x.target.id) return { ...item1 };
        })
      );
    } else if (!filterCartList) {
      setCartList([...cartList, { productName: x.target.id, freq: 1 }]);
    }
    console.log(cartList);
  };
  // console.log(cartList);
  const displayCart = () =>
    cartList.map((item) => (
      <p>
        <span>{item.productName}</span>
        <span> {item.freq}</span>
      </p>
    ));
  const showHideCart = () => {
    setCartState(!cartState);
  };
  return (
    <div className="App">
      <h2>Add to Cart</h2>
      {/* Product List Display */}
      <ProductCard name="Pen" btnHandler={addToCartHandle} />
      <ProductCard name="Pencil" btnHandler={addToCartHandle} />
      <ProductCard name="Eraser" btnHandler={addToCartHandle} />
      <ProductCard name="Sharpner" btnHandler={addToCartHandle} />
      {/* Cart */}
      <Cart
        cart={showHideCart}
        style={cartState ? { display: "" } : { display: "none" }}
        productList={displayCart()}
      />
    </div>
  );
}
