

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,toggle } from './reduxtoolkit';

export const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  return (
    <div>
     {showCounter  && <h1>Counter: {count}</h1>} 
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(toggle())}>Decrement</button>
    </div>
  );
};


