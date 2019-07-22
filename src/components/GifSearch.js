import React from 'react'

// ({search})

export default class GifSearch extends React.Component {

  state = {
    searchTerm:""
  }

  render() {
    return (
      <div className="search-box">
        <div className="search-container">
          <input type="text" className="text-field" value={this.state.searchTerm} placeholder="enter one search term" onChange={(e) => this.setState({searchTerm: e.target.value})} />
          <button className="button-submit" onClick={() => this.props.search(this.state.searchTerm)} >Submit</button>
        </div>
      </div>
    )
  }
}
