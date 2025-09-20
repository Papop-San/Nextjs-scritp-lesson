"use client";
import { useState, useEffect } from "react";

function page() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Count เปลี่ยนเป็น:", count);
  }, [count]);

  return (
    <div className="text-center mt-10">
      <p className="text-2xl">Count: {count}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
}

export default page;
