import React from 'react'

const GifSearch = ({searchTerm, updateSearchTerm, search}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="search">Enter a Search Term:</label>
        <input type="search" className="form-control" id="search" aria-describedby="searchTerm" placeholder="Enter search term" value={searchTerm} onChange={e => updateSearchTerm(e.target.value)}/> 
      </div>
      <button className="btn btn-primary" onClick={search}>Find Gifs</button>
    </div>
  )
}

export default GifSearch;