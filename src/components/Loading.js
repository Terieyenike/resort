import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

export const Loading = () => {
  return (
    <div className='loading'>
      <h4>loading more rooms</h4>
      <img src={loadingGif} alt='load rooms' />
    </div>
  );
};
