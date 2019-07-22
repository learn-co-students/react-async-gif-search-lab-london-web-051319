import React from 'react'

function GifList({gifs}) {

  const listStyling = {
    listStyle: 'none',
    margin: '20px',
  }

  const listPoints = {
    margin: '20px',
    height: 'auto',
    width: '200px',
  }

  return (
    <div className="div-list">
      <ul style={listStyling}>
        {gifs.map((gif, i) => 
        <li key={i} style={listPoints}><img src={gif.images.original.url} alt="gif"/></li>
          )}
      </ul>
    </div>
  )
}

export default GifList
