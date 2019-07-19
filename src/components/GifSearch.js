import React from 'react'

const GifSearch = ({ searchTerm, search }) => {
  return <input type='search' className='form-control' id='search'
    placeholder='Search...' value={searchTerm}
    onChange={e => search(e.target.value)} />
}

export default GifSearch
