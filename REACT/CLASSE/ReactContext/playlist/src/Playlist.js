
import React, { Component } from 'react';
import Song from './Song.js';
import './App.css';

class Playlist extends Component {

  	render() {
  		return(
  			<div>
  				<h2>Play List</h2>
  				<Song />
  			</div>
  		);
  	}

}

export default Playlist;