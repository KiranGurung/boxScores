import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header.js';
import MiniBoxScores from './Components/BoxScoreNav.js'
import BoxScoreContainer from './Components/BoxScoreContainer.js'
import './App.css';
import NBAScores from './NBAScores.json';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      NBAScores,
      NBAGames: [
      {
        status: 'S',
          time: 'Q2 10:43'
      }
    ],
    PLGames: [],
    UCLGames: [],
    games: [this.NBAGames, this.PLGames, this.UCLGames]
    }
  }

  render() {
    this.state.games[0] = this.state.NBAScores
    console.log(this.state.games[0])
    return (
      <div id="app">
        <Header></Header>
        <MiniBoxScores
          games = {this.state.games}
        />
        <BoxScoreContainer
          league = "NBA"
          games = {this.state.games}
        />
        {/* <BoxScoreContainer
          league = "Premier League"
        />
        <BoxScoreContainer
          league = "Champions League"
        /> */}
      </div>
    );
  }
}

export default App;
