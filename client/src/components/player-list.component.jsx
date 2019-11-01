import React from 'react';
import { PlayerCard }from './player-card.component';

export const PlayerList = props => {
    return (
    <div className= "player-list">
        {props.playerData.map(player=> 
        <PlayerCard key= {player.id} player= {player.name}/>)}
    </div>)
}