import React from 'react'

const GifList = ({ gifs}) => {
  if(!gifs.data) return null;

  const firstThree = gifs.data.slice(0, 3);

  return (
    <div>
      {firstThree.map(gif => (
        <div key={gif.images.original.url}>
          <img src={gif.images.original.url} />
        </div>
      ))}
    </div>
  )
}

export default GifList