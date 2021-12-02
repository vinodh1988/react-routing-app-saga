import { useMemo, useState } from "react";
import { getRandom } from "../../ContextAPI/context";

const MemoBranch=({item}:any)=>{
const [copy,setCopy]=useState(item)
const [x,setX]=useState("1")
const messageState=useMemo(()=>getRandom(),[copy])
return(
     <div>
         <h1>In Branch the item received : {item}, and copy is : {copy} and x is {x}</h1>
          Message - {messageState}
          <button className="btn btn-dark" onClick={
              ()=>{setX(""+Math.round(Math.random()*10))}}>rerender without copy Change</button>
     
          <button onClick={()=>{setCopy("Dummy")}} className="btn btn-primary">change Copy</button>
     </div>
  );
}

export default MemoBranch