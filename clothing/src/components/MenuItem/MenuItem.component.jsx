import React from 'react';

import './MenuItem.styles.scss';

export const MenuItem = ({ title, imageUrl, size }) => {
  const sizeClass = size ? `_${size}` : '';

  return (
    <div className={`MenuItem ${sizeClass}`}>
      <div
        className='MenuItem__backgroundImage'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className='MenuItem__content'>
        <h1 className='MenuItem__title'>{ title }</h1>
        <span className='MenuItem__subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}
