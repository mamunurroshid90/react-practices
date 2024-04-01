import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handlePlusButton = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleMinusButton = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleResetButton = () => {
    setCount((prevCount) => prevCount === 0);
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h1>Count is {count} </h1>
      <button onClick={handlePlusButton} disabled={count >= 5}>
        +
      </button>
      <button onClick={handleMinusButton} disabled={count <= 1}>
        -
      </button>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
};

export default Counter;
