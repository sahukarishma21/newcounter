import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  let color = 'black';

  if (count > 30) {
    color = 'green';
  } else if (count > 20) {
    color = 'blue';
  } else if (count > 10) {
    color = 'red';
  }

  

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1 style={{ color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

