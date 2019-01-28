import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

class Player extends Component{
	constructor(props){
		super(props);
		this.player = PlayerAPI.get(
		    parseInt(props.match.params.number, 10)
		)
	}
	render(){
		if (!this.player) {
		    return <div>Sorry, but the player was not found</div>
		} else {
			return (
				<div>
			      <h1>{this.player.name} (#{this.player.number})</h1>
			      <h2>Position: {this.player.position}</h2>
			      <Link to='/roster'>Back</Link>
			    </div>
			)
		}
	}
}

export default Player;