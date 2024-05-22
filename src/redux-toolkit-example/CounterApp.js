import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, increment, decrement, reset, incrementByAmount } from './counterAppSlice';

function CounterApp() {
//   const count = useSelector(state => state.counter.count);
const count = useSelector(state => state.counterApp.count);


  console.log(count);
  const dispatch = useDispatch();





  return (

<div>
<h2>Counter: {count}</h2>
<button onClick={() => dispatch(increment())}>Increment</button> {/* Dispatch increment action */}
<button onClick={() => dispatch(decrement())}>Decrement</button> {/* Dispatch decrement action */}
<button onClick={() => dispatch(reset())}>Reset</button>
<button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>




</div>
  );
}

export default CounterApp;
