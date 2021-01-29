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
            <h1 style={{ color: "maroon" }}>Apex Twitter</h1>
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
            <div className="bg-textColor">
              <h1 style={{ color: "maroon" }}>Leaderboards</h1>
            </div>
            
            
            <Leaderboards
              avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/039b8034-2b66-4d30-97ec-15bf08f219d9-profile_image-300x300.png"
              name="ImperialHal"
              KP="100k"
              rankPoints="141,436"
            ></Leaderboards>
            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Favatar-cdn.tracker.gg%2Fapi%2Favatar%2F2%2FImshleepdawg.png/image.png"
              name="Imshleepdawg"
              KP="100k"
              rankPoints="138,747"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Fsecure.download.dm.origin.com%2Fproduction%2Favatar%2Fprod%2FuserAvatar%2F29201414%2F208x208.JPEG/image.png"
              name="Apryze"
              KP="100k"
              rankPoints="138,747"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Favatar-cdn.tracker.gg%2Fapi%2Favatar%2F2%2Fabusing_r2.png/image.png"
              name="abusing_r2"
              KP="100k"
              rankPoints="137,977"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Fsecure.download.dm.origin.com%2Fproduction%2Favatar%2Fprod%2F1%2F599%2F416x416.JPEG/image.png"
              name="LG_ ShivFPS"
              KP="100k"
              rankPoints="136,563"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Favatar-xbl.tracker.gg%2Fimage.png%3Furl%3DwHwbXKif8cus8csoZ03RW8ke8ralOdP9BGd4wzwl0MJ9z6QzuGwZjtvbE7sSsMVWx4wy26bL284bMu8sRsL0x6ctyW.ic1gkqLVcpkpv_DBiMWKQf.qpTuiZU9cC2iUzt7pM22vsxO.7CjoeCw1_bueoVSLOonLmvpuidSNt6Qw-/image.png"
              name="TermK47 "
              KP="100k"
              rankPoints="131,697"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Fsecure.download.dm.origin.com%2Fproduction%2Favatar%2Fprod%2F1%2F599%2F416x416.JPEG/image.png"
              name="LG_ShivFPS"
              KP="100k"
              rankPoints="127,307"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Favatar-cdn.tracker.gg%2Fapi%2Favatar%2F2%2FwillLLUMINATI-.png/image.png"
              name="willLLUMINATI- 
              "
              KP="100k"
              rankPoints="121,492"
            ></Leaderboards>

            <Leaderboards
              avatar="https://yt3.ggpht.com/ytc/AAUvwngdgrrP2wjVpgqUiJunWTyMgYJdW29Fe2h750Cb=s88-c-k-c0x00ffffff-no-rj"
              name="tollis "
              KP="100k"
              rankPoints="117,998"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Favatar-xbl.tracker.gg%2Fimage.png%3Furl%3DwHwbXKif8cus8csoZ03RW8ke8ralOdP9BGd4wzwl0MJ9z6QzuGwZjtvbE7sSsMVW2wABA7E54PN8dZpMBC5Qw.Zg.H2uWU7zdNYKzWNqEc2t1GB4rNS9p98LW37WBza3ShLVRrbNtDpwOTTGVjh57uqTAnK1C8.zyQqR0BsjLN0-/image.png"
              name="Subby7784 
              "
              KP="100k"
              rankPoints="115,296"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Favatar-xbl.tracker.gg%2Fimage.png%3Furl%3DwHwbXKif8cus8csoZ03RW8ke8ralOdP9BGd4wzwl0MJ9z6QzuGwZjtvbE7sSsMVW9QLC8IEn_gnqA4WOKrOLS2wLK0EgaS_.hmY9KCDroJSTdRqXAs7Hfy1Vi7d5hHycZ9ycPZPfp4pCW2..92PdRKrVIywwFi7tdLMXvDGNOy4-/image.png"
              name="Xspkxkenny 
              "
              KP="100k"
              rankPoints="112,189"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Favatar-cdn.tracker.gg%2Fapi%2Favatar%2F2%2FTTxtr.png/image.png"
              name="TTxtr  
              "
              KP="100k"
              rankPoints="108,321"
            ></Leaderboards>

            <Leaderboards
              avatar="https://imgsvc.trackercdn.com/url/width(208)/https%3A%2F%2Favatar-cdn.tracker.gg%2Fapi%2Favatar%2F2%2Fwosindmeineeier.png/image.png"
              name="wosindmeineeier "
              KP="100k"
              rankPoints="107,867"
            ></Leaderboards>
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
