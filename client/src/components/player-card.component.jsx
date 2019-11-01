import React from 'react';

export const PlayerCard = (props) => (
    <div>
        <h1>{props.player.name}</h1>
        <h3>{props.player.searches}</h3>
        <h3>{props.player.country}</h3>
    </div>
)