import React from 'react';
import logo from './logo.svg';
import './App.css';



const Home=()=>{
  return (
    <div id="home">
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">ABC APP</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Quotes For the Day</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
export default Home;
