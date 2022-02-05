import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCountUp = () => {
    setCount(count + 1);
    };
  const onCountDown = () => {
    setCount(count - 1);
    };
  return (
    <React.Fragment>
      <button className='ui primary button'onClick={onCountUp}>Increment</button>
      <button className='ui red button'onClick={onCountDown}>Decrement</button>
      <h1>Count: {count}</h1>
    </React.Fragment>
  );
};

export default Counter;