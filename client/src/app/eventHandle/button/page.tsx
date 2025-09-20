"use client";

import { useState } from "react";

function page() {

 const [message , setMessage] = useState<string>("");
 const handleClick = () => {
    setMessage ("Button Clicked")
 }

  return (
    <div className="text-center mt-10">
      <p className="mb-4 text-xl">{message}</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Click Me
      </button>
    </div>
  )
}

export default page