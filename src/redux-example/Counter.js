import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counterActions';

function Counter(props) {
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
