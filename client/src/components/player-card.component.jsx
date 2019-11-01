import React from 'react';

export const PlayerCard = (props) => (
    <div>
        <h1>{props.name}</h1>
        <h3>{props.searches}</h3>
        <h3>{props.country}</h3>
    </div>
)