import React from 'react';

const GifSearch = ({ search, input }) => {
  return (
    <div className="form-group col-md-12 align-self-center">
      <input
        className="form-control"
        type="text"
        onChange={search}
        placeholder="search fer sum gifs ya'll"
      />
    </div>
  );
}

export default GifSearch;
