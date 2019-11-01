import React from 'react';

export const PlayerCard = (props) => (
    <div>
        <h1>Name: {props.player.name}</h1>
        <h3>Searches: {props.player.searches}</h3>
        <h3>Country: {props.player.country}</h3>
    </div>
)