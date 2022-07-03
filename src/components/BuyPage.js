import React, { useState, useEffect } from "react";
import Axios from "axios";

import CartItem from "./CartItem";

import { faker } from "@faker-js/faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "563492ad6f91700001000001e55db424662949b181bcd27b1ed93360";

const url = "https://api.pexels.com/v1/search?query=computer&per_page=6&page=1";
const localurl = "https://api.myjson.com/bins/qp9uo";
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    console.log("OK At -----------------17-----");
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    console.log("Ok at-----------------23-----");

    const { photos } = data;
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.small,
      tinyImage: photo.src.tiny,
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      id: faker.datatype.uuid(),
    }));
    setProduct(allProduct);
  };

  // const fetchPhotos = async () => {
  //   const { data } = await Axios.get(localurl, {});

  //   const { photos } = data;

  //   const allProduct = photos.map((photo) => ({
  //     smallImage: photo.src.small,
  //     tinyImage: photo.src.tiny,
  //     productName: faker.commerce.productName(),
  //     productPrice: faker.commerce.price(),
  //     id: faker.datatype.uuid(),
  //   }));

  //   setProduct(allProduct);
  // };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
