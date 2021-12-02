import { Context, contextData } from "../ContextAPI/context";
import Details from "./AboutDetails/AboutDetails";
import DetailsAgain from "./AboutDetails/DetailsAgain";

const About=()=>{
    return(
    <div style={{overflow: "hidden", backgroundColor:"lightGray",padding: "30px"}}>
        <h1>About</h1>
        <Context.Provider value={contextData}>
              <Details/>
              <DetailsAgain/>
        </Context.Provider>
    </div>
    )
}

export default About;