"use client";

import { use, useState } from "react";

function page() {
  const [name, setName] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setSubmit(false);
  };

  const resetInput = () => {
    setName("");
    setSubmit(false);
  }

  return (
    <div className="text-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
     <div>
         <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="button"
          onClick={resetInput}
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded ml-4"
        >
          Reset
        </button>
     </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {submit && <p className="mt-4 text-xl" > Hello , {name || "Stranger"} </p>}
    </div>
  );
}

export default page;
