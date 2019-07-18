import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

class GifListContainer extends React.Component {
  state = {
    searchTerm: '',
    gifs: []
  }

  search = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json())
      // .then(resp => this.setState({gifs: resp.data.map(image => image.images.original.url)}, this.setState({searchTerm: ''})))
      .then(resp => this.setState({gifs: resp.data.slice(0,3).map(image => image.images.original.url)}, this.setState({searchTerm: ''})))
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({searchTerm})
  }

  render() {
    return(
      <div className="container">
        <div className="row">
        <div className="col" style={{float: 'right'}}>
            <GifSearch searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} search={this.search}/> 
          </div>
          <div className="col" style={{float: 'left'}}>
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    )
  }
}

export default GifListContainer;