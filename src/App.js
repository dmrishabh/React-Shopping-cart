import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
// components
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
// reactstrap

import { Container, Row, Col } from "reactstrap";

const App = () => {
  // methods

  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAdded !== -1) {
      toast("already Added in cart ", {
        type: "error",
      });
    } else {
      setCartItem([...cartItem, item]);
    }
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Item Ordered will be delivering soon", {
      type: "success",
    });
  };
  const removeItem = (item) => {
    setCartItem(
      cartItem.filter((everySingleItem) => everySingleItem.id !== item.id)
    );
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
