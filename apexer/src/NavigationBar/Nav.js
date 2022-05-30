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
        <nav className="main-nav">
          <div className="logo">
            <img src={logo.id}></img>
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
            </li>{" "}
            {/* <li>
              <Link to="/Rank">LFG</Link>
            </li> */}
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
