import { useState } from "react";
import { Context, contextData, getRandom } from "../ContextAPI/context";
import Details from "./AboutDetails/AboutDetails";
import DetailsAgain from "./AboutDetails/DetailsAgain";

const About=()=>{
    const [message,setMessage]=useState(contextData.message)
   
    return(
    <div style={{overflow: "hidden", backgroundColor:"lightGray",padding: "30px"}}>
        <h1>About</h1>
        <Context.Provider value={{message,setMessage}}>
              <Details/>
              <DetailsAgain/>
        </Context.Provider>
    </div>
    )
}

export default About;