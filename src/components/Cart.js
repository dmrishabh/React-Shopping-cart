import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img src={item.tinyImage} alt="" height={80} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span className="text-warning">
                  Price : {item.productPrice}
                </span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* IF EVERY THING IS EMPTY THEN  { CONDITIONAL RENDERING }*/}

      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand total</CardHeader>
          <CardBody>
            Your Amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Pay here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">cart is EMPTY</h1>
      )}
    </Container>
  );
};

export default Cart;
