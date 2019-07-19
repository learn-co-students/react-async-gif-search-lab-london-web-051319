import React from 'react'

const GifList = ({ gifs }) => {
  return gifs.map(gif => {
    return <img src={gif.images.original.url}/>
  })
}

export default GifList