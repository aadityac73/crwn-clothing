import React from 'react';
import './menu-item.scss'

const MenuItem = ({title, image, size}) => (
  <div className={`${size} menu-item`}>
    <div className="background-image" style={{backgroundImage: `url(${image})`}} />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </div>
)

export default MenuItem;