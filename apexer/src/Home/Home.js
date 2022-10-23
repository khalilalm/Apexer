import React, { Component } from "react";
import "./Home.css";
import HeroSub from "../HeroSub/HeroSub.js";
import VG from "../Videos_Guides/vg.js";
import twitter from "../images/twitterImg.png";
import facebook from "../images/facebookImg.png";
import instagram from "../images/instagramImg.png";
import newspaper from "../images/newspaper.svg";
import { Leaderboards } from "../Leaderboard/leaderboards";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="content-container">
        <div className="hero">
          <h1 className="title">APEXER</h1>
          <div className="live-vid">
            
          </div>
        </div>
<HeroSub />
<VG />
        

        </div>
    );
  }
}

export default Home;
