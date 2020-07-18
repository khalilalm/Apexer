import React, { Component } from "react";
import "./Tracker.css";
import * as ReactBootStrap from "react-bootstrap";


class Tracker extends Component {
  state = {
    profile: "Lil_Kha1998",
    platform: "psn",
    segmentType: "legend",
    damagePathfinder: {},
    damageWraith: {},
    damageBangalore: {},
    damageMirage: {},
    damageCaustic: {},
    damageGibralter: {},
    damageLoba: {},
    damageLifeline: {},
    damageBloodhound: {},
    damageCrypto: {},
    damageWattson: {},
    damageOctane: {},
    rankedLevel: {},
    rankData: {},
    loaded: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetch(
      `/api/v1/profile/${this.state.platform}/${this.state.profile}/${this.state.segmentType}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          damagePathfinder: res.data.data[0].stats.kills,
          damageWraith: res.data.data[1].stats.kills,
          damageBangalore: res.data.data[2].stats.kills,
          damageMirage: res.data.data[3].stats.kills,
          damageCaustic: res.data.data[4].stats.kills,
          damageGibralter: res.data.data[5].stats.kills,
          damageLoba: res.data.data[6].stats.kills,
          damageLifeline: res.data.data[7].stats.kills,
          damageBloodhound: res.data.data[8].stats.kills,
          damageCrypto: res.data.data[9].stats.kills,
          rankedLevel: res.data,
          rankData: res.data.data,
          loaded: false,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    //URL params
    const { profile, platform } = this.state;
    //Character kill values
    const {
      damagePathfinder,
      damageWraith,
      damageBangalore,
      damageMirage,
      damageCaustic,
      damageGibralter,
      damageLoba,
      damageLifeline,
      damageBloodhound,
      damageCrypto,
      rankedLevel,
      rankData,
      loaded,
    } = this.state;

    console.log(rankedLevel);
    console.log(rankData);

    return (
      <div className="tracker-content-main">
        <h1>Stat Tracker</h1>

        <div className="form-wrapper">
          <form onSubmit={this.onSubmit} className="form-content">
            <label to="platform"> Choose Platform: </label>
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
            <label to="username">Username: </label>
            <input
              id="username"
              onChange={this.onChange}
              placeholder="Enter Username"
              name="profile"
              value={profile}
            ></input>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
        <form></form>

        <div className="stats-output">
          {loaded ? (
            <ReactBootStrap.Spinner animation="border" />
          ) : (
            <>
              <div className="legend-stats">
                <p>{rankedLevel.value}</p>
                <h1 className="legendName">Pathfinder</h1>
                <p>
                  <strong>Kills:</strong>
                  {damagePathfinder.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damagePathfinder.percentile}
                </p>
                <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/pathfinder-tile.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Wraith</h1>
                <p>
                  <strong>Kills:</strong>
                  {damageWraith.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageWraith.percentile}
                </p>
                <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-tile.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Bangalore</h1>
                <p>
                 <strong>Kills:</strong>
                  {damageBangalore.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageBangalore.percentile}
                </p>
                <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/bangalore-tile.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Mirage</h1>
                <p>
                  <strong>Kills:</strong>
                  {damageMirage.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageMirage.percentile}
                </p>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop191x100.1200w.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Caustic</h1>
                <p>
                  <strong>Kills:</strong>
                  {damageCaustic.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageCaustic.percentile}
                </p>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-caustic.png.adapt.crop16x9.320w.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Gibralter</h1>
                <p>
                  <strong>Kills:</strong>
                  {damageGibralter.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageGibralter.percentile}
                </p>
                <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/gibraltar-tile.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Loba</h1>
                <p>
                  <strong>Kills:</strong>
                  {damageLoba.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageLoba.percentile}
                </p>
                <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/loba-tile.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Lifeline</h1>
                <p>
                  <strong>Kills:</strong>
                  {damageLifeline.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageLifeline.percentile}
                </p>
                <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/lifeline-tile.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Bloodhound</h1>
                <p>
                  <strong>Kills:</strong>
                  {damageBloodhound.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageBloodhound.percentile}
                </p>
                <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/bloodhound-tile.png"></img>
              </div>
              <div className="legend-stats">
                <h1 className="legendName">Crypto</h1>
                <p>
                  <strong>Kills: </strong>
                  {damageCrypto.value}
                </p>
                <p>
                  <strong>Percentile:</strong>
                  {damageCrypto.percentile}
                </p>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-crypto.png.adapt.crop16x9.png"></img>
              </div>
            </>
          )}
          <p >
            <strong>
              *If badge is not applied on charactor card stats won't appear
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Tracker;
