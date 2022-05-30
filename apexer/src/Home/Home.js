import React, { Component } from "react";
import "./Home.css";
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
          <h1 className="title">APEX</h1>
          <div className="live-vid">
            
          </div>
        </div>

        <div className="content-main">
          <div className="main">
            <div className="tips-tricks">
              <h3 style={{ color: "rgb(77, 12, 12)" }}>Tips & Tricks</h3>
              <p style={{ color: "rgb(77, 12, 12)" }}>
                <strong>Improving Aim:</strong>
                <a href="https://www.giantbomb.com/apex-legends/3030-72014/forums/share-your-pro-tips-here-1862722/">
                  <br />
                  Giant Bomb Forums
                </a>
              </p>
              <p style={{ color: "rgb(77, 12, 12)" }}>
                <strong>Tips on Dropping:</strong>
                <a href="https://www.redbull.com/us-en/apex-legends-top-tips">
                  {" "}
                  RedBull Article
                </a>{" "}
              </p>
            </div>

            <br></br>
            <div className="line"></div>

            <div className="forum-links">
              <h3 style={{ color: "rgb(77, 12, 12)" }}>Forums</h3>
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

              <div className="line"></div>
              <div className="forum-links">
              <h3 style={{ color: "rgb(77, 12, 12)" }}>Legends</h3>
              <ul className="legend-refs">
                <a href="https://www.ea.com/games/apex-legends/about/characters/ash"><li>Ash</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/bangalore"><li>Bangalore</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/fuse"><li>Fuse</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/horizon"><li>Horizon</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/mirage"><li>Mirage</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/octane"><li>Octane</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/revenant"><li>Revenant</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/wraith"><li>Wraith</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/caustic"><li>Caustic</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/gibraltar"><li>Gibraltar</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/rampart"><li>Rampart</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/wattson"><li>Wattson</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/lifeline"><li>Lifeline</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/loba"><li>Loba</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/bloodhound"><li>Bloodhound</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/crypto"><li>Crypto</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/pathfinder"><li>Pathfinder</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/seer"><li>Seer</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/valkyrie"><li>Valkyrie</li></a>
                <br></br>
                <a href="https://www.ea.com/games/apex-legends/about/characters/castle"><li>Castle</li></a>

              </ul>

              <div className="line"></div>
              </div>
            </div>

          </div>

          <div className="news-updates">
            <header>
              <img className="np" src={newspaper}></img>
              <h1 className="news-header" style={{ color: "rgb(77, 12, 12)" }}>
                News & Updates
              </h1>

              <div className="news-container">
                <div className="patch-notes">
                  <article>
                    <h1 style={{ color: "black" }}>Major Patch Notes</h1>
                    <h2
                      style={{ color: "black" }}
                      className="patch-subheadings"
                    >
                      Season 13 Bug Fixes
                    </h2>
                    <ul>
                      <li>
                        Fix for players inside of Bangalore smoke
                        unintentionally getting aim assist on targets outside of
                        smoke.
                      </li>
                      <li>
                        Fixed bug where Valk could no longer use Jumptowers if
                        she has been previously shot down during her Ultimate.
                      </li>
                      <li>
                        Fix for Volt animation for cases where the weapon and
                        reticle have a jittery animation when the player is
                        crouched.
                      </li>
                      <li>
                        Fix for cases where weapons and attachments can be
                        dropped/switched during Charge Tower interaction leading
                        to animation glitch.
                      </li>
                      <li>
                        Fix for Charge Rifle Legendary skin “Curse of the
                        Amazon” where the upper part of the weapon blocked
                        camera view when aiming down sites.
                      </li>
                      <li>
                        Fixed bug for cases when the user accesses the
                        replicator and pulls up their inventory before the UI
                        for the replicator shows up, they can drop their weapon
                        and is stuck in a crouched position.
                      </li>
                      <li>
                        Canyonlands: Fix for cases when players could get
                        blocked when trying to activate Valk’s Ultimate.
                      </li>
                    </ul>
                  </article>
                  <img
                    className="wraith-img"
                    src="https://w0.peakpx.com/wallpaper/490/196/HD-wallpaper-wraith-apex-apex-wraith.jpg"
                  ></img>
                </div>
                <br></br>
                <div className="LOTW">
                  <h1 style={{ color: "black" }}>Legend of the Week</h1>
                  <h2 style={{ color: "black" }}>"Revenent"</h2>
                 <a  href="https://apex-legends-universe.fandom.com/wiki/Revenant#:~:text=come%20back%22).-,Background%3A,the%20nightmare%20he%20had%20become."> 
                 <img 
                    className="revenent-img"
                    src="https://rare-gallery.com/thumbs/344906-Revenant-Apex-Legends-Video-Game.jpg"
                  ></img></a>
                  <p className="lotw-description">Revenant used to be human. He used to be the greatest hitman the Mercenary Syndicate ever had. He used to look in the mirror and see his human face looking back. But time changes everything, and when his programming finally failed, he saw what he had become at the hands of the Mercenary Syndicate and Hammond Robotics: a walking nightmare of steel and vestigial flesh. His masters resurrected him as a simulacrum, snatching him from death’s embrace again and again and programming him to forget.</p>
                  <a href="https://twitter.com/intent/tweet?button_hashtag=revenant&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #revenant</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
                <br></br>
                <div className="fan-art">
                <h1 style={{ color: "black" }}>Fan Art</h1>
                <a
                  class="twitter-timeline"
                  href="https://twitter.com/PlayApex?ref_src=twsrc%5Etfw"
                  height="500px"
                >
                  Tweets by PlayApex
                </a>{" "}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
                </div>
              </div>
            </header>
          </div>
          <div className="videos-guides">
            <h1 className="video-header" style={{ color: "rgb(77, 12, 12)" }}>
              Videos & Guides
            </h1>
            <div className="video-wrapper">
              <iframe
                width="540"
                height="360"
                src="https://www.youtube.com/embed/mpIn-bxNQho"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br></br>
              <iframe
                width="540"
                height="360"
                src="https://www.youtube.com/embed/cOFuEQEvC3E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br></br>
              <iframe
                width="540"
                height="360"
                src="https://www.youtube.com/embed/ccoB9y8-xrw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br></br>
             
              <iframe
                width="540"
                height="360"
                src="https://www.youtube.com/embed/sfHlYPHLyBg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

      
      </div>
    );
  }
}

export default Home;
