import React from 'react';
import axios from 'axios';
import './App.css';

class  App extends React.Component {

  //creating a class component and setting initial state to empty object of the players that we receive from our API
  constructor(){
    super();
    this.state= {
      players: {}

    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
