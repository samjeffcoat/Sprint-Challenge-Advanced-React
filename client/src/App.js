import React from 'react';
import axios from 'axios';
import {PlayerCard, PlayerList} from './components/player-list.component';
import './App.css';

class  App extends React.Component {

  //creating a class component and setting initial state to empty object of the players that we receive from our API
  


  constructor(){
    super();
    this.state= {
      players: []

    }
  }
  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState({
          players: res.data
        })
      })
      .catch(err => console.log(err))
  }
  render(){
  return (
    <div className="App">
      <h1>Women's World Cup!</h1>
      <PlayerList players= {this.state.players}/>
    </div>
  );
}
}
export default App;
