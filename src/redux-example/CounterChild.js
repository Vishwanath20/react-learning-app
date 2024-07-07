//-----------------------1st Approch-----------------------------
/* 
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counterActions';

function Counter(props) {
  console.log("Counter.js and poprs is::", props);
  return (
    <div>
      <h2>Counter: {props.count}</h2>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/

//-----------------------2nd Approch-----------------------------

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterActions';

function CounterChild() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
    Child counter 
    <div style={{backgroundColor:'darkslategray', width:'200px',height:'200px', border:'2px solid red'}}>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  </div>
  </>
  );
}

export default CounterChild;