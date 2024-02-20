import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>count = {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increase count
      </button>
    </div>
  );
}

export default Counter;
