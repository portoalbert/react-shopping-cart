import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "../src/components/Main.js";
import Cart from "../src/components/Cart";
import Navbar from "../src/components/Navbar";
import productList from "./data/data.js";

const RouteSwitch = () => {
  const [shoppingCartList, setshoppingCartList] = useState([]);
  const [total, setTotal] = useState(0);
  function clickHandler(id) {
    const temp = productList.filter((item) => item.id === `${id}`);
    const updateCart = [...shoppingCartList];
    const index = updateCart.findIndex((item) => item.id === `${id}`);
    if (index === -1) {
      setshoppingCartList((prevState) => [...prevState, temp[0]]);
      setTotal((prevState) => (prevState += temp[0].price));
    } else {
      updateCart[index].quantity += 1;
      setshoppingCartList(updateCart);
      setTotal((prevState) => (prevState += temp[0].price));
    }
  }
  return (
    <BrowserRouter basename="/">
      <Navbar items={shoppingCartList.length} />
      <Routes>
        <Route
          className="main"
          path="/"
          element={
            <div className="main">
              {productList.map((product, id) => (
                <Main
                  name={product.name}
                  src={product.src}
                  price={product.price}
                  description={product.description}
                  key={id}
                  onClick={() => clickHandler(id)}
                />
              ))}
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div className="checkout">
              <h1>Your Cart ({shoppingCartList.length} items)</h1>
              <div className="cartheader">
                <h2>Item</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Total</h2>
              </div>
              <div className="items">
                {shoppingCartList.map((item) => (
                  <Cart
                    name={item.name}
                    src={item.src}
                    price={item.price}
                    quantity={item.quantity}
                    total={(item.quantity * item.price).toFixed(2)}
                  />
                ))}
              </div>
              <div className="totals">SUBTOTAL: {total.toFixed(2)}</div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
