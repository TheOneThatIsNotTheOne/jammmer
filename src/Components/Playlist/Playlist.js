import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList.js'
class Playlist extends React.Component {
  render() {
  return(
    <div class="Playlist">
  <input value="New Playlist"/>
  <TrackList onRemove = {this.props.onRemove}/>
  <a class="Playlist-save">SAVE TO SPOTIFY</a>
</div>
)
  }
}
export default Playlist
