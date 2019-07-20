import React from 'react'

const GifSearch = ({searchTerm, setSearchTerm, gifSearch}) => {
  return (
    <div>
      <form>
        <label>Enter a Search Term:</label>
        <input type="text" name="searchTerm" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        <button onClick={(event) => gifSearch(event)}>Find Gifs</button>
      </form>
    </div>
  )
}

export default GifSearch