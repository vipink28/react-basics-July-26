import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const handleShowCount = () => {
    setShowCount(true);
  };
  const handleHideCount = () => {
    setShowCount(false);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {showCount && <h1>{count}</h1>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleShowCount}>Show</button>
      <button onClick={handleHideCount}>Hide</button>
    </div>
  );
}

export default Counter;
