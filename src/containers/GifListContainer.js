import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const GIFS_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends React.Component {

  state = {
    gifs: [],
    searchTerm: ''
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({searchTerm})
    this.search(searchTerm)
  }

  search = (searchTerm) => {
    fetch(`${GIFS_URL}${searchTerm}${API}`)
    .then(resp => resp.json())
    .then(gifArray => {
      this.setState({
        gifs: gifArray.data.slice(0,3)
      })
    })
  }

  render() {
    return <div><GifList gifs={this.state.gifs}/>
                <GifSearch search={this.updateSearchTerm} searchTerm={this.state.searchTerm}/>
                </div>
  }

}

export default GifListContainer