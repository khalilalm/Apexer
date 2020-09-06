import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const logo = {
  id: "https://art.pixilart.com/7e3057713456a9d.png",
};
class Nav extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav> 
          
          <img src={logo.id} class="logo"></img>
          <li className="title-nav"><strong>Apexer</strong></li> 
         
          <Link to="/">
            <li>
              Home
            </li>
          </Link>

          <Link to="/Tracker">
            <li>
              Tracker
            </li>
          </Link>

          <Link to="/Rank">
            <li>
              Rank
            </li>
          </Link>

          <Link to="/About">
            <li>
              About
            </li>
          </Link>
         <li><button>Login</button></li>
         <li><input placeholder="Search"></input></li>
        </nav>
      </div>
    );
  }
}

export default Nav;
