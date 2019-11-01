import React from 'react';
import axios from 'axios';
import {PlayerCard, PlayerList} from './components/player-list.component';

class  App extends React.Component {

  //creating a class component and setting initial state to empty object of the players that we receive from our API
  constructor(props){
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
      <PlayerCard playerData= {this.state.players}/>
    </div>
  );
}
}
export default App;
