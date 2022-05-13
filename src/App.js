import React,{usestate} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css"
import { toast,ToastContainer} from 'react-toastify';
import BuyPage from './Components/BuyPage';
import cart from './Components/cart';
import {Container,Row,Col} from "reactstrap"

function App() {
  const [cartItem,setCartItem]=usestate([]);

  const addItem=item=>{
    const isAlreadyAdded=cartItem.findIndex(function(array){
      return item.id!==array.id
    })
    if(isAlreadyAdded!==-1){
      toast("Item is already added", {
        type:"Error"
      })
    }
    setCartItem([...cartItem,item])
  }
  const buyItem=()=>{
    setCartItem([]);
    toast("Purchase Complete",{
      type:"success"
    })
  }
  const removeItem=item=>{
    setCartItem(cartItem.filter(i=>i.id!==item.id))
    toast("item removed succesfully",{
      type:"success"
    })
  }
  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
          <Col md="8">
            <BuyPage addItem={addItem}/>
          </Col>
          <col md="4">
            <cart cartItem={cartItem} removeItem={removeItem} buyItem={buyItem}/>
          </col>
      </Row>
    </Container>
  )
}


export default App