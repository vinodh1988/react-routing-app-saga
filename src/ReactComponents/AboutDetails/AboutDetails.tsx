import { useContext } from 'react'
import {Context, getRandom} from '../../ContextAPI/context'

const Details=()=>{
   const  con=useContext(Context)
 
   return(
        <div className="card">
            <h1>About Details - But we show message</h1>
            <p>
               {con.message}
            </p>
            <br/><br/>
            <button className="btn btn-primary" 
            style={{width: "200px"}}>Get New Message</button>
        </div>
    )
}

export default Details;