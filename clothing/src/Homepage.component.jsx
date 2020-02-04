import React from 'react';

import './Homepage.styles.scss'

export const HomePage = () => {
  return (
    <div className='Homepage'>
      <div className='Menu'>
        <div className='Menu__item MenuItem'>
          <div className='MenuItem__content'>
            <h1 className='MenuItem__title'>HATS</h1>
            <span className='MenuItem__subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='Menu__item MenuItem'>
          <div className='MenuItem__content'>
            <h1 className='MenuItem__title'>JACKETS</h1>
            <span className='MenuItem__subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='Menu__item MenuItem'>
          <div className='MenuItem__content'>
            <h1 className='MenuItem__title'>SNEAKERS</h1>
            <span className='MenuItem__subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='Menu__item MenuItem'>
          <div className='MenuItem__content'>
            <h1 className='MenuItem__title'>WOMENS</h1>
            <span className='MenuItem__subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='Menu__item MenuItem'>
          <div className='MenuItem__content'>
            <h1 className='MenuItem__title'>MENS</h1>
            <span className='MenuItem__subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  )
}
