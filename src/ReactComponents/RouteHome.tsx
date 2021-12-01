import {BrowserRouter as Router,Route} from 'react-router-dom'

import About from './About'
import Home from './Home'
import Quotes from './Quotes'
const RouteHome=()=>{

    return(
       <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/quotes" component={Quotes}></Route>
        </div>
    )
}

export default RouteHome