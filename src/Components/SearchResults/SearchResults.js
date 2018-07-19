import React from 'react'
import TrackList from '../TrackList/TrackList.js'
import './SearchResults.css'
class SearchResults extends React.Component {
    render(){
      return(
    <div className="Searchresults">
  <h2>Results</h2>
  <SearchResults />
 <TrackList onAdd = {this.props.onAdd} />
</div>
)

  }
}

export default SearchResults
