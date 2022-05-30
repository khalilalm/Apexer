import React, { Component } from "react";
import "./about.css";
import twitter from "../images/twitterImg.png";
import facebook from "../images/facebookImg.png";
import instagram from "../images/instagramImg.png";
class about extends Component {
  state = {};

  render() {
    return (
      
      <div className="about-section">
        <div className="about-content-container">
        <h1 style={{ "text-decoration": "underline","color": "black", "text-align": "center" }}>About</h1>
        <p style={{ "text-align": "center" }}>
          <strong>Built using TRN Tracker API:</strong>{" "}
          <a href="https://tracker.gg/">TRN TRACKER </a>{" "}
        </p>
        <p style={{ "text-align": "center" }}><strong>Follow Tracker Network:</strong></p>
        <div className="social-links">
          <a href="https://twitter.com/Apex_Tracker">
            <img className="social-icon" src={twitter}></img>
          </a>
          <a href="https://www.facebook.com/TrackerNetwork/">
            <img className="social-icon" src={facebook}></img>
          </a>
          <a href="https://www.instagram.com/playapex/">
            <img className="social-icon" src={instagram}></img>
          </a>
        </div>
        </div>
      </div>
      
    );
  }
}

export default about;
