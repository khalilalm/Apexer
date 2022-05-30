import React, { Component } from "react";
import "./Tracker.css";
import CharTrack from "./CharTrack";
class Tracker extends Component {
   
  state = {
    profile: "Lil_Kha1998",
    platform: "psn",
    segmentType: "legend",
    Pathfinder: {},
    Wraith: {},
    Bangalore: {},
    Revenant: {},
    Caustic: {},
    Gibralter: {},
    Loba: {},
    Bloodhound: {},
    Crypto: {},
    Wattson: {},
    Octane: {},
    rankedLevel: {},
    rankData: {},
    acrankData: {}
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/v1/rank/${this.state.platform}/${this.state.profile}`)
    .then((res) => res.json())
    .then((res) =>
      this.setState({
        acrankData: res.data.data.platformInfo,
       
      })
    )
    .catch((error) => {
      console.error(error);
    });
      fetch(`http://localhost:5000/api/v1/profile/${this.state.platform}/${this.state.profile}/${this.state.segmentType}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          
          Pathfinder: res.data.data[8].stats.kills,
          Wraith: res.data.data[0].stats.kills,
          Bangalore: res.data.data[5].stats.kills,
          Revenant: res.data.data[1].stats.kills,
          Caustic: res.data.data[6].stats.kills,
          Gibralter: res.data.data[7].stats.kills,
          Loba: res.data.data[2].stats.kills,
          Octane: res.data.data[4].stats.kills,
          Bloodhound: res.data.data[9].stats.kills,
          Wattson: res.data.data[3].stats.kills,
          rankedLevel: res.data,
          rankData: res.data.data,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
  
    //URL params
    const { profile, platform, acrankData } = this.state;
    //Character kill values
    const {
      
      Pathfinder,
      Wraith,
      Bangalore,
      Revenant,
      Caustic,
      Gibralter,
      Loba,
      Octane,
      Bloodhound,
      Wattson,
      rankedLevel,
      rankData,
    } = this.state;

    console.log(rankedLevel);
    console.log(rankData);

    return (
      <div className="tracker-content-main">
        <div className="form-wrapper">
          <form onSubmit={this.onSubmit} className="form-content">
            <h1 style={{ "text-align": "center" }}>Stat Tracker</h1>
            <div className="profile_pic">
            <h2>{acrankData.platformUserId}</h2>
            <img src={acrankData.avatarUrl} className="profile-img" alt=""></img>
            </div>
            <div className="form-items">
              
              <label to="platform">
                <strong> Choose Platform: </strong>
              </label>
              <select
                value={platform}
                onChange={this.onChange}
                id="platform"
                name="platform"
              >
                <option value="psn">Playstation</option>

                <option value="xbl">Xbox</option>

                <option value="origin">Origin</option>
              </select>
              <br></br>
              <label to="username">
                <strong>Username:</strong>{" "}
              </label>
              <input
                id="username"
                onChange={this.onChange}
                placeholder="Enter Username"
                name="profile"
                value={profile}
              ></input>
              <br></br>
              <button type="submit">Submit</button>
              <img src="https://thicc.mywaifulist.moe/waifus/24242/4fbb8d5fb3ab6ef8b307e1c9a16d08bf53d3f661956bb8de409fa700b77ec051_thumb.jpeg"></img>
            </div>
          </form>
        </div>

        <div className="stats-output">
          
          <div className="legend-stats">
            <CharTrack
              name="Pathfinder"
              avatar="https://trackercdn.com/cdn/apex.tracker.gg/legends/pathfinder-tile.png"
              kills={Pathfinder.value}
              percentile={Pathfinder.percentile}
            />
          </div>

          {/*  */}
          <div className="legend-stats">
            <CharTrack
              name="Wraith"
              avatar="https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-tile.png"
              kills={Wraith.value}
              percentile={Wraith.percentile}
            />
          </div>

          {/*  */}
          <div className="legend-stats">
            <CharTrack
              name="Bangalore"
              avatar="https://trackercdn.com/cdn/apex.tracker.gg/legends/bangalore-tile.png"
              kills={Bangalore.value}
              percentile={Bangalore.percentile}
            />
          </div>

          {/*  */}
          <div className="legend-stats">
            <CharTrack
              name="Mirage"
              avatar="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop191x100.1200w.png"
              kills={Octane.value}
              percentile={Octane.percentile}
            />
          </div>
          {/*  */}

          <div className="legend-stats">
            <CharTrack
              name="Caustic"
              avatar="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-caustic.png.adapt.crop16x9.320w.png"
              kills={Caustic.value}
              percentile={Caustic.percentile}
            />
          </div>

          <div className="legend-stats">
            <CharTrack
              name="Gibralter"
              avatar="https://trackercdn.com/cdn/apex.tracker.gg/legends/gibraltar-tile.png"
              kills={Gibralter.value}
              percentile={Gibralter.percentile}
            />
          </div>

          {/*  */}
          <div className="legend-stats">
            <CharTrack
              name="Loba"
              avatar="https://trackercdn.com/cdn/apex.tracker.gg/legends/loba-tile.png"
              kills={Loba.value}
              percentile={Loba.percentile}
            />
          </div>

          {/*  */}
          <div className="legend-stats">
            <CharTrack
              name="Lifeline"
              avatar="https://trackercdn.com/cdn/apex.tracker.gg/legends/lifeline-tile.png"
              kills={Wattson.value}
              percentile={Wattson.percentile}
            />
          </div>

          {/*  */}
          <div className="legend-stats">
            <CharTrack
              name="Bloodhound"
              avatar="https://trackercdn.com/cdn/apex.tracker.gg/legends/bloodhound-tile.png"
              kills={Bloodhound.value}
              percentile={Bloodhound.percentile}
            />
          </div>

          {/*  */}
          <div className="legend-stats">
            <CharTrack
              name="Revenant"
              avatar={"https://trackercdn.com/cdn/apex.tracker.gg/legends/revenant-tile.png"}
              kills={Revenant.value}
              percentile={Revenant.percentile}
            />
          </div>
          <div>
            <p>
              <strong>
                *If badge is not applied on character card some stats may not appear
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tracker;
