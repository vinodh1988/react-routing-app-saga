import { useContext } from 'react'
import {Context, getRandom} from '../../ContextAPI/context'
import DetailsAgain from './DetailsAgain'

const Details=()=>{
   const  {message,setMessage}=useContext(Context)
 
   function changeMessage(){
       setMessage(getRandom())
   }

   return(
        <div className="card">
            <h1>About Details - But we show message</h1>
            <p>
               {message}
            </p>
            <br/><br/>
            <button className="btn btn-primary" 
            style={{width: "200px"}} onClick={changeMessage} >Get New Message</button>
            
        </div>
    )
}

export default Details;