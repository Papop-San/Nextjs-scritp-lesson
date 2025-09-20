"use client";
import React, { useState, useEffect } from "react";

function page() {
    const [text , setText]  = useState<string>("");

    useEffect( () => {
        console.log("Text เปลี่ยนเป็น:", text);
    }, [text])


    const changeTextEvent = ( e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

  return (
    <div  className="text-center mt-10">
        <input
         type="text"
         value={text}
         placeholder="Enter text this here"
         onChange={changeTextEvent}
        />

          <p className="mt-4 text-xl">ข้อความ: {text}</p>
    </div>
  )
}

export default page