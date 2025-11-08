import { useState } from "react";

function Counter() {
  const [counter, setCounterValue] = useState(0);

  function increment() {
    setCounterValue(counter + 1);
  }

  function decrement() {
    setCounterValue(counter - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default Counter;
