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
        type:"error"
      })
    }
    setCartItem([...cartItem,item])
  }
  return (
    <div>App</div>
  )
}

export default App