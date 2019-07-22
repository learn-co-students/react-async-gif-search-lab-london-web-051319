import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// const URL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g";

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  makeURL = (term) => {
    return `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`;
  }

  getGifs = async (term) => {
    const URL = this.makeURL(term);
    const dataRaw = await fetch(URL);
    const dataJSON = await dataRaw.json();
    this.setState({gifs: dataJSON.data.slice(0, 3)});
  }

  searchEventHandler = (content) => {
    const searchTerm = content.split(" ")[0];
    this.getGifs(searchTerm);
  }

  componentDidMount = () => {
    this.getGifs("cats")
  }

  render() {
    return (
      <div className="page-container">
        <GifList gifs={this.state.gifs}/>
        <GifSearch search={this.searchEventHandler} />
      </div>
    )
  }
}
