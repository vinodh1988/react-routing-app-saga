import { useState } from "react"
import MemoBranch from "./MemoBranch"

const MemoRoot=()=>{
   const [item,setItem]=useState("India")

   function changeItem(){
       let x=["India","China","Germany","Russia","Japan","France"]
       setItem(x[Math.round(Math.random()*5)])
   }

   return(
       <div className="alert alert-warning" role="alert">
           MemoRoot State - {item}
           <MemoBranch item={item}></MemoBranch>
       </div>
   )
    
}

export default MemoRoot;