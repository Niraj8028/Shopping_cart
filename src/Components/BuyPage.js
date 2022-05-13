import React, {useState,useEffect} from 'react'
import {container,col,row} from "reactstrap"
import axios from 'axios';

const url="https://api.pexels.com/v1/search/query=laptop&per_page=6&page=1"
const localUrl="http://myjson.dit.upm.es/api/bins/h7t3";
const BuyPage=()=>{
    const[buyProduct,setBuyProduct]=useState([]);

    const fetchPhotos=async()=>{
        const {data}=await axios.get(localUrl);
    }
    const photos=data;
    useEffect(() => {
      fetchPhotos(); 
    }, [])
    

  return (
    <div>BuyPage</div>
  )
}

export default BuyPage