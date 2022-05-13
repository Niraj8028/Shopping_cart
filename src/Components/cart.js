import { Button } from 'bootstrap';
import React from 'react'
import {Container,Row,Col,Card,CardBody,CardTitle,CardText,ListGroup,ListGroupItem} from "reactstrap"


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
        
    </Container>
  )
}

export default cart