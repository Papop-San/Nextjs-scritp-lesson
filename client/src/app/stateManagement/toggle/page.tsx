"use client";
import { useState } from "react";

function page() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggle = () => setIsOn((prev) => !prev);

  return (
    <div className="text-center mt-10">
      <p className="text-xl"> {isOn ? "Open" : "Close"}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={toggle}
      >
        Toggle
      </button>
      <div className="mt-10">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={isOn} className="sr-only peer"
            onChange={toggle}
          />
          <div 
            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isOn ? "Open" : "Close"}
          </span>
        </label>
      </div>
    </div>
  );
}

export default page;
