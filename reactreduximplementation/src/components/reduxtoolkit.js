import { createSlice,configureStore } from "@reduxjs/toolkit";



const initialState={value:0,showCounter:true}
const counterSlice=createSlice({
name:'counter',
initialState:initialState,
reducers:{
increment:state=>{state.value+=1},
decrement:state=>{state.value-=1},
toggle:state=>{state.showCounter=!state.showCounter}



}



});






const{actions,reducer}=counterSlice;
export const{increment,decrement,toggle}=actions;

export default  configureStore({reducer:{counter:reducer}})





