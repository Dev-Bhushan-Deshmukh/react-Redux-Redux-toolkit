




// import {createSlice,configureStore} from '@reduxjs/toolkit';

// const initalCounter={count:0,showCunter:true}
// const counterSlice=createSlice({
//     name:'counter',
//     initalCounter:{count:0,showCunter:true},
//     reducers:{
// incr:(state)=>{

// state.count++;

// },
// decr(state){

//     state.count--;
// },

// increase(state,action){

// state.count=state.count+action.payload;

// },
// toggle(state){

// state.showCunter=!state.showCunter;


// }



//     }




// });
// const bvd=counterSlice.reducer
//     const store=configureStore({reducer:bvd});

// export const counterActions=counterSlice.actions;
// export default store









// store.js

import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for the counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = counterSlice;

// Export the action creators and reducer
export const { increment, decrement } = actions;
export default configureStore({
  reducer: {
    counter: reducer
  }
});
