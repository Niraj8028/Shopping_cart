import { Button } from 'bootstrap';
import React from 'react'
import {Container,Row,Col,Card,CardBody,ListGroup,ListGroupItem, CardHeader, CardFooter} from "reactstrap"


const cart=({cartItem,removeItem,buyItem})=> {
    const amount=0;
    (cartItem).forEach(product=>{
        amount=parseFloat(amount)+parseFloat(product.productPrice)
    })

  return (
    <Container fluid>
        <h1 className='text-success'>Your Cart</h1>
        <ListGroup>
        {cartItem.map(item=>(
            
                <ListGroupItem key={item.id}>
                    <Row>
                        <Col>
                            <img height="80px" src={item.tinyImage}/>
                        </Col>
                        <Col className='text-center'>
                            {item.productName}
                            <span>Price:-{item.productPrice}</span>
                            <Button color="danger" onClick={()=>{removeItem(item)}}>Remove</Button>
                        </Col>
                    </Row>
                </ListGroupItem>   
        ))}
        </ListGroup>  
        {cartItem.length>=1?(
            <Card className='text-center mt-3'>
                <CardHeader>Your Grand Total</CardHeader>
                <CardBody>
                    Your GrandTotal for {cartItem.length} products is {amount}
                </CardBody>
                <CardFooter>
                    <Button  onClick={buyItem}>Pay here</Button>
                </CardFooter>
            </Card>
        ):(
            <h1 className='text-warning'>Your Cart is Empty</h1>
        )   
    }
    </Container>
  )
}

export default cart