import React, { Component } from "react";
import "./Home.css";
import twitter from "../images/twitterImg.png";
import facebook from "../images/facebookImg.png";
import instagram from "../images/instagramImg.png";
import newspaper from "../images/newspaper.svg";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="content-container">
        <div className="hero">
          <h1 className="title">APEX</h1>
          <h3 className="sub-title">
            "Look up your stats,apex legends players and more"
          </h3>
        </div>
        <div className="header">
          <img className="np" src={newspaper}></img>
          <h1 style={{ color: "black" }}>News and Updates</h1>
        </div>
        <div className="content-main">
          <div className="class-padding">
            <h1 style={{"color":"maroon"}}>Apex Twitter</h1>
            <a
              className="twitter-timeline"
              data-width="400"
              data-height="300"
              data-theme="dark"
              href="https://twitter.com/PlayApex?ref_src=twsrc%5Etfw"
            >
              Tweets by PlayApex
            </a>
          </div>
          <div className="main">
            <div className="tip-links">
              <h3>Tips</h3>
              <p>
                <strong>Improving Aim:</strong>
                <a href="https://www.giantbomb.com/apex-legends/3030-72014/forums/share-your-pro-tips-here-1862722/">
                  {" "}
                  Giant Bomb Forums
                </a>
              </p>
              <p>
                <strong>Dropping Related Tips:</strong>
                <a href="https://www.redbull.com/us-en/apex-legends-top-tips">
                  {" "}
                  RedBull Article
                </a>{" "}
              </p>
            </div>

            <h3>Forums</h3>

            <div className="forum-links">
              <p style={{ "text-align": "center" }}>
                <a href="https://answers.ea.com/t5/Apex-Legends/ct-p/apex-legends-en">
                  Apex Legends Forums
                </a>
              </p>
              <p>
                <a href="https://www.reddit.com/r/apexlegends/">
                  Apex Reddit Thread
                </a>
              </p>
              <p>
                <a href="https://www.thetechgame.com/Forums/f=296/prefix=apex-legends/gaming-discussion.html">
                  Tech Game Forums
                </a>
              </p>
            </div>
          </div>
          <div className="class-padding">
            <h1 style={{ color: "maroon" }}>Videos & Guides</h1>
            <div className="video-wrapper">
              <iframe
                width="540"
                height="360"
                src="https://www.youtube.com/embed/mpIn-bxNQho"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <iframe
                width="540"
                height="360"
                src="https://www.youtube.com/embed/SCUXdRb5abU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="class-padding">
            <h1>Leaderboards</h1>
          </div>
        </div>
      
        <div className="footer">
          <footer>@Copyrights 2021</footer>
        </div>
      </div>
    );
  }
}

export default Home;
