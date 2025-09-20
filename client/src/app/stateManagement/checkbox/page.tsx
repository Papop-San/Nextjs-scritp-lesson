"use client";
import { useState } from "react";

function page() {
    const [checked, setChecked] = useState<boolean>(false);

    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setChecked(e.target.checked)
    }

    const showMessge = () => {
        alert("ยอมรับเงื่อนไข")
        
    }

  return (
    <div className="text-center mt-10">
      <label>
        <input 
            type="checkbox" 
            checked={checked} 
            onChange={handleChange} />
        ยอมรับเงื่อนไข
      </label>
      <p className="mt-2">{checked? "Checked": "Unchecked"}</p>
    
     
      <button
        className={`bg-green-500 text-white px-4 py-2 rounded mt-4 transition-opacity duration-200 ${
         !checked ? "opacity-50 cursor-not-allowed" : "" 
        }`}
        disabled={!checked}
        onClick={showMessge}
        
      >
        Confirm
      </button>
    </div>
  )
}

export default page