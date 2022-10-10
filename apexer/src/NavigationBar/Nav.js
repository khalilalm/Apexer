import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import $ from 'jquery';
import Popper from 'popper.js';

const logo = {
  id: "https://art.pixilart.com/7e3057713456a9d.png",
};
class Nav extends Component {
  state = {};

  render() {
    return (
      <div >
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><img className="logo" src={logo.id}></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"> <Link to="/">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </Link>
      </li>
      <li class="nav-item"><Link to="/Tracker">
        <a class="nav-link" href="#">Tracker</a>
        </Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Socials
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Twitter</a>
          <a class="dropdown-item" href="#">Facebook</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Instagram</a>
        </div>
      </li>
     
    </ul>
    
  </div>
</nav>
        
        {/* <nav className="main-nav">
          <div className="logo">
            
          </div>

          <ul>
            <li className="title-nav">
              <strong>Apexer</strong>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Tracker">Tracker</Link>
            </li>{" "} */}
            {/* <li>
              <Link to="/Rank">LFG</Link>
            </li> */}
            {/* <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    );
  }
}

export default Nav;
