import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GIF_URL = "http://api.giphy.com/v1/gifs/search?q="
const API_KEY = "&api_key=dc6zaTOxFJmzC&rating=g"
class GifListContainer extends React.Component {

  state = {
    gifs: [],
    searchTerm: ""
  }

  gifSearch = (event) => {
    event.preventDefault()
    fetch(`${GIF_URL}${this.state.searchTerm.toUpperCase()}${API_KEY}`)
    .then(res => res.json())
    .then(data => this.setState({
      gifs: data
    }))
  }

  setSearchTerm = (value) => {
    this.setState({
      searchTerm: value
    })
  }

  render() {
    return(
      <div>
        Hello
        <GifList gifs={this.state.gifs}/>
        <GifSearch searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} gifSearch={this.gifSearch}/>
      </div>
    )
  }
}

export default GifListContainer