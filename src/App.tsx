import React from 'react';
import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RouteHome from './ReactComponents/RouteHome';



const App=()=>{
  return (
  <Router>
    <div id="home">
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/">ABC APP</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/quotes">Quotes For the Day</Link>
      </li>
    </ul>
  </div>
</nav>
<RouteHome></RouteHome>
    </div>
    </Router>
  )
}
export default App;
