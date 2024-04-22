import React, { useState } from 'react'
import '../cart.css'

import { useDispatch, useSelector } from 'react-redux';
import { addItem,popItem } from './CartStore';
export const Cart = () => {
    
const dispatch = useDispatch();
    const staggedItems=useSelector(state=>state.cart.item)

    console.log("staggedItems",staggedItems)
const[cartItems,setCartItems]=useState(staggedItems);
  return (
    <div id='cart-main-container'>

<h2>cart </h2>

<div className="cart-list">
{staggedItems.map((product)=><div className="cart-card">{product} 

<button onClick={() => dispatch(popItem())}>Increment</button>
</div>)}

{/* <div className="cart-card"></div>
<div className="cart-card"></div>
<div className="cart-card"></div>
<div className="cart-card"></div>
<div className="cart-card"></div> */}

</div>


    </div>
  )
}
