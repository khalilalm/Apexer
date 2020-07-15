import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="content-container">
        <div className="hero">
          <h1 className="title" >
            APEX
          </h1>
          <h3 className="sub-title">"Look up your stats,apex legends players and more"</h3>
        </div>
        <div className="content-main">
          <div className="twitter-embed">
            <a
              className="twitter-timeline"
              data-width="600"
              data-height="700"
              data-theme="dark"
              href="https://twitter.com/PlayApex?ref_src=twsrc%5Etfw"
            >
              Tweets by PlayApex
            </a>
          </div>
          <div className="main">
            <h1 style={{ "text-decoration": "underline" }}>News and Updates</h1>
            
            <br></br>
            <div className="tip-links">
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

            <h2>Helpful Forums</h2>

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
          <iframe width="540" height="360" src="https://www.youtube.com/embed/mpIn-bxNQho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="footer">
          <footer>@Copyrights 2021</footer>
        </div>
      </div>
    );
  }
}

export default Home;
