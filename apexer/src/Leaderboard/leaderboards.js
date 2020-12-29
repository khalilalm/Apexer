import React from 'react'
import './leaderboards.css'

export const Leaderboards = ({ avatar, name, rankPoints}) => {
    return (
        <div className="player">
            <div className="player_details">
                <img src={avatar} alt="avatar" />
                <p>{name}</p>
            </div>
            
        <p>🔴 {rankPoints}</p>
        </div>
    )
}

export default Leaderboards;