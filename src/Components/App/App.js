import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: 'Gucci Gang',
        artist: 'Lil Pump',
        album: 'Lil Pump',
        id: 1},
         {
           name: 'Gucci Gang',
           artist: 'Lil Pump',
           album: 'Lil Pump',
           id: 2
         },
          {
            name: 'Gucci Gang',
            artist: 'Lil Pump',
            album: 'Lil Pump',
            id: 3
          }
      ],
      playlistTracks: [
        {
          name: 'Gucci Gang',
          artist: 'Lil Pump',
          album: 'Lil Pump',
          id: 1
        },
         {
           name: 'Gucci Gang',
           artist: 'Lil Pump',
           album: 'Lil Pump',
           id: 2
         },
          {
            name: 'Gucci Gang',
            artist: 'Lil Pump',
            album: 'Lil Pump',
            id: 3
          }
      ],
      playlistName: "HELP ME I NEED A TON OF HELP IN THIS CATEGORY"
    };
  }
  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
return;
}
  }
  removeTrack(track){
//    id = 'playlistTracks'

  }
  render() {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd ={this.addTrack}/>
              <Playlist playlistTracks={this.state.playlistTracks} onRemove = {this.removeTrack}/>
            </div>
          </div>
        </div>
      );
  }
}

      export default App;
