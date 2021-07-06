import React from 'react';
import { PlayerCard }from './player-card.component';
import './player-list.styles.css';

export const PlayerList = props => {
    return (
        <div className="player-list" data-testid="toggle-element">
        {props.players.map(player=> 
        <PlayerCard key= {player.id} player= {player}/>)}
    </div>)
}