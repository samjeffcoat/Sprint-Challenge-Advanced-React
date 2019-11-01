import React from 'react';
import { PlayerCard }from './player-card.component';

export const PlayerList = props => {
    return <div className= "plater-list">
        {props.players.map(player=> <PlayerCard key= {player.id} player= {player}/>)}
    </div>
}