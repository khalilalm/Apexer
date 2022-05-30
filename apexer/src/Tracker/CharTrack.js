import React, { Component } from "react";
import "./CharTrack.css";
export const Channel = ({ name, avatar, kills, percentile,}) => {
  return (
    <div className="CharTrack">
      <div className="charTrack_details">
        <h1>{name}</h1>
        <img src={avatar} alt="avatar" />
        <p>
          <strong>Kills: </strong>
          {kills}
        </p>

        <p>
          <strong>Percentile: </strong> {percentile}
        </p>
      </div>
    </div>
  );
};

export default Channel;
