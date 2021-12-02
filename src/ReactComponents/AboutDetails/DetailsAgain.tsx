import { useContext } from 'react'
import {Context, getRandom} from '../../ContextAPI/context'

const DetailsAgain=()=>{
   //const  con=useContext(Context)
 
   return(
<div className="card">
    <h3>Contextually consuming</h3>
 <Context.Consumer>
    {data=> <h1>{data.message}</h1>}
</Context.Consumer>
</div>
    )
}

export default DetailsAgain;