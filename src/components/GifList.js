import React from 'react';

const GifList = ({ gifData }) => {

  return (
    <div>
      { gifData
        ? gifData.data.map(gif =>
            <img className="col-md-3 img-responsive" src={gif.images.original_still.url} />)
        : ''
      }
    </div>
  );
};

export default GifList;
