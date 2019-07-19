import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    }
  }

  setData = data => this.setState({ data });

  getData = (e) => {
    let searchTerm = e.target.value;
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => this.setData(data));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="row flex-column justify-content-center">
          <GifSearch search={this.getData} />
          <GifList gifData={data} />
        </div>
      </div>
    )
  }

}

export default GifListContainer;
