import React, { useState,useEffect } from 'react';
import { container,row,col } from "reactstrap";
import axios from 'axios';
import { random,commerce } from "faker";
import cartItem from './cartItem';

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
            productName:random.word(),
            productPrice:commerce.price(),
            productId:random.uuid()
        }))       
        setBuyProduct(allProducts);
    }
    

    useEffect(() => {
      fetchPhotos(); 
    }, [])
    

  return (
    <container fluid>
        <h1 className='text-center text-success'>Buy Page</h1>
        <row>
            {buyProduct.map(product=>(
              <col md={4} key={product.id}>
                <cartItem product={product} addItem={addItem}/>
              </col>
            ))}
        </row>
    </container>
  )
}

export default BuyPage