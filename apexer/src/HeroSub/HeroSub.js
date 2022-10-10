import React, { Component } from "react";
import "./HeroSub.css";
import Analysis from "../images/analysis.png";
import Newspaper from "../images/newspaper.svg";
import Axe from "../images/axe.png";
class HeroSub extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="section-info">
        
          <img src={Newspaper} className="what" />
         
          <h1>Apex News</h1>
          <p>
            <strong>
              Get the latest and greatest info on Apex Legends updates upcoming features and more!{" "}
            </strong>
          </p>
        </div>

        
        <div className="section-info">
           <img src={Analysis} />
          <h1>Stat Finder</h1>
          <p>
            <strong>
             Type in your gamertag and get the shown your most recent stats such as kills and player percentile!
            </strong>
          </p>
        </div>

        <div className="section-info">
          <img src={Axe} />
          <h1>Charactor Info</h1>
          <p>
            <strong>
              Get a detailed history of all your favorite legends in the game including full analysis on the best play styles for each charactor!
            </strong>
          </p>
        </div>
       
      </div>
    );
  }
}

export default HeroSub;
