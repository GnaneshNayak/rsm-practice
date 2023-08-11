import React, { useReducer, useState } from 'react';

const reducer = (count, action) => {
  if (action.type === 'decrement') {
    return count - 1;
  }

  if (action.type === 'increment') {
    return count + 1;
  }
  if (action.type === 'reset') {
    return (count = 0);
  }
  if (action.type === 'change') {
    return count + action.payload.value;
  }
  return count;
};

const Counter = ({ intialCount = 0 }) => {
  const [count, dispatch] = useReducer(reducer, 1);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
      <button
        onClick={() => dispatch({ type: 'change', payload: { value: 5 } })}
      >
        +5
      </button>
    </div>
  );
};

export default Counter;
