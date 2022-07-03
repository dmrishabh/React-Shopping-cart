import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">Price:{product.productPrice}₹</CardText>
      </CardBody>
      <Button
        className="btn mb-2 ms-5 me-5 btn-success"
        onClick={() => addInCart(product)}
      >
        Buy
      </Button>
    </Card>
  );
};

export default CartItem;
