import React, { Component } from "react";
import "./Rank.css";

class Rank extends Component {
  state = {
    platform: "psn",
    profile: "Lil_Kha1998",
    rankData: {},
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetch(
      `/api/v1/rank/${this.state.platform}/${this.state.profile}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          rankData: res.data.data.platformInfo,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const { profile, platform, rankData } = this.state;
    console.log(rankData);

    return (
      <div className="rank-wrapper">
        <h1>Rank</h1>
        <div className="rank-content">
          <div className="form-wrapper">
            <form onSubmit={this.onSubmit} className="form-content">
              <label for="platform"> Choose Platform: </label>
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
              <label for="username">Username: </label>
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

          <div className="ranked-output">
            <h2>{rankData.platformUserId}</h2>
            <img src={rankData.avatarUrl} className="profile-img" alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Rank;
