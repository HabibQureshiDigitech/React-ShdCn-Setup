import { UserTable } from "@/components/Table";
import { UserForm } from "@/components/UserForm";
import { useState } from "react";

export default function Finance() {

    const [Changed , setChangeed] = useState(false)
    

    const handleClick = () => {
        setChangeed(!Changed)
    }

  return (
    <div className="p-6 bg-white h-screen">
    <div className="felx text-end mb-5">
    <button onClick={handleClick} className="bg-black text-white text-sm rounded p-2 active:scale-110">
        {
            Changed ?  "Back to Table":"Add Data"
        }
    </button>
    </div>
    {
      Changed ? <UserForm />  : <UserTable />
    }
      
    </div>
  );
}
