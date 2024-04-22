import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addItem,popItem } from './CartStore';
import '../products.css'
export const Products = () => {

const dispatch = useDispatch();

    const[products,setProducts]=useState([1,2,3,4,5,6,7,8,9,10]);
  return (
    <div id='product-main-container'>
<h2>Products</h2>

<div className="product-list">
{products.map((product)=><div className="product-card">{product} 

<button onClick={() => dispatch(addItem({product}))}>Increment</button>
</div>)}

{/* 
<div className="product-card"></div>
<div className="product-card"></div>
<div className="product-card"></div>
<div className="product-card"></div>
<div className="product-card"></div>
<div className="product-card"></div>
<div className="product-card"></div> */}




</div>



    </div>
  )
}
