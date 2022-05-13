import React from 'react'
import {Card,CardBody,CardText,CardTitle, Button} from "reactstrap"


const CartItem=({product,addItem})=> {

  return (
    <Card className='mt-2 mb-1'>
        <img height="250px" width="100%" src={product.smallImage}></img>
        <CardBody className='text-center'>
            <CardTitle>{product.productName}</CardTitle>
            <CardText>Price:{product.productPrice} Rs</CardText>
        </CardBody>
        <Button color='success' onClick={()=>addItem(product)} >Buy Now</Button>
    </Card>
  )
}

export default CartItem