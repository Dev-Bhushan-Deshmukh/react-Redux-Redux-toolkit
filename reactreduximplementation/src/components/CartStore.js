import { createSlice,configureStore } from "@reduxjs/toolkit";
const cartItem={item:[]};

const cartSlice=createSlice({
name:'cart',
initialState:cartItem,
reducers:{
addItem:(state,action)=>{
state.item.push(action.payload.product);


},
popItem:(state,action)=>{
    state.item.pop(action.payload);
    
    
    }


}



})

const{actions,reducer}=cartSlice;
export const{addItem,popItem}=actions;
export default configureStore({reducer:{cart:reducer}})