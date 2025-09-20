"use client";

import { useState } from "react";

function page() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => {
    if (prev > 0){
        return prev-1
    } else {
        return   prev
    }
  }
);
  const handleReset = () => setCount(0);

  return (
    <div className="text-center text-2xl">
      <p className="text-4xl m-4">{count}</p>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleReset}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default page;
