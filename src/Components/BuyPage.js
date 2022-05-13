import React, { useState,useEffect } from 'react';
import { Container,Col, Row } from "reactstrap";
import axios from 'axios';
// import { random,commerce } from "faker";
import CartItem from './cartItem';

const url="https://api.pexels.com/v1/search/query=laptop&per_page=6&page=1"
const localUrl="http://myjson.dit.upm.es/api/bins/h7t3";

const BuyPage=({addItem})=>{
    const[buyProduct,setBuyProduct]=useState([]);

    const fetchPhotos=async()=>{
        const {data}=await axios.get(localUrl);
    
        const photos=data;
        const allProducts=photos.map(photo=>({
            smallImage:photo.src.medium,
            tinyImage:photo.src.tiny,
            productName:"laptop",
            productPrice:"200 Rs",
            productId: 1
        }))       
        setBuyProduct(allProducts);
    }
    

    useEffect(() => {
      fetchPhotos(); 
    }, [])
    

  return (
    <Container fluid>
        <h1 className='text-center text-success'>Buy Page</h1>
        <Row>
            {buyProduct.map(product=>(
              <Col md={4} key={product.id}>
                <CartItem product={product} addItem={addItem}/>
              </Col>
            ))}
        </Row>
    </Container>
  )
}

export default BuyPage