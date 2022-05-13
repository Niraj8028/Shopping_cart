import React,{usestate} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify';



function App() {
  const [cartItem,setCartItem]=usestate([]);

  const addItem=item=>{
    const isAlreadyAdded=cartItem.findIndex(function(array){
      return item.id!==array.id
    })
    if(isAlreadyAdded!==-1){
      toast("Item is already added", {
        type:Error
      })
    }
    setCartItem([...cartItem,item])
  }
  const buyItem=()=>{
    setCartItem([]);
    toast("Purchase Complete",{
      type:success
    })
  }
  return (
    <div>App</div>
  )
}

export default App