"use client";

import React, { use, useState } from "react";

export default function page() {

  const [name, setName] = useState<string>("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement >) => {
  setName(e.target.value);
};

  return (
    <div className="text-center mt-10">
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
         className="border p-2 rounded"
      />
      <p 
      className="mt-4 text-xl">
         Hello , {name || "Stranger"}
      </p>
    
    </div>
  )
}
