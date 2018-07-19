 import React from 'react'
import './Track.css'
 class Track extends React.Component {
   removeTrack(){

   }
   render() {
     return(
     <div class="Track">
  <div class="Track-information">
    <h3> track name will go here </h3>
    <p> track artist will go here |  track album will go here </p>
  </div>

  <a class="Track-action" onClick = {this.addTrack}> </a>
</div>
)
   }
 }
export default Track
