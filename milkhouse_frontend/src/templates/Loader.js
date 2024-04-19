import React from 'react';
import LoaderImg from '../image/loader.svg';

const loaderStyle = {
  padding: '4rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const imageStyle = {
  width: '120px',
};

const Loader = () => {
  return (
    <div style={loaderStyle}>
      <img src={LoaderImg} alt="loader" style={imageStyle} />
    </div>
  );
};

export default Loader;
