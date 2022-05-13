import React, { useState,useEffect } from 'react';
import { Container,Col, Row } from "reactstrap";
import Axios from 'axios';
import { faker } from '@faker-js/faker';

import CartItem from './cartItem';


const localUrl="http://myjson.dit.upm.es/api/bins/h7t3";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);
  const fetchPhotos = async () => {
    const { data } = await Axios.get(localUrl, {});

    const { photos } = data;

        const allProducts=photos.map(photo=>({
            smallImage:photo.src.medium,
            tinyImage:photo.src.tiny,
            productName:faker.commerce.product(),
            productPrice:faker.random.numeric(5),
            productId: faker.random.numeric(5)
        }))       
        setProduct(allProducts);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map(product => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BuyPage;