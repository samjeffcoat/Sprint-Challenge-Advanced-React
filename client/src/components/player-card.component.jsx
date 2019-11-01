import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

export const PlayerCard = (props) => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode=e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }
    return (
    <div>
            <span title='dark-mode-btn' >
                <button onClick={toggleDarkMode} data-testid="toggle-element" >Dark Mode</button>
        </span>
        <h1>Name: {props.player.name}</h1>
        <h3>Searches: {props.player.searches}</h3>
        <h3>Country: {props.player.country}</h3>
    </div>
    )
}
