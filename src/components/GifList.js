import React from 'react'

const GifList = ({gifs}) => {
  return (
    <ul style={{listStyle: 'none'}}>
      {gifs.map(gif => <li key={gif}><img src={gif} style={{maxWidth: 250}}/></li>)}
    </ul>
  )
}

export default GifList;