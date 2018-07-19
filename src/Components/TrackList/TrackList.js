import React from 'react'
import './TrackList.css'
import Track from '../Track/Track.js'
class TrackList extends React.Component{
  //addTrack() {
      // this.props.track
      // constructor() {
      //   super(props)
      //}
  render(){
    return(
    <div class="TrackList">
     <Track onAdd = {this.props.onAdd} onRemove= {this.props.onRemove}  track = {this.props.tracks.map()}/>
</div>
)
  }
}
export default TrackList;
