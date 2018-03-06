import React from 'react';

// Images
import images from './images';

const headerimg = images.header;

const Header = () => {
  return (
    <div className="header" style={{backgroundImage: "url(" + headerimg + ")"}}>
      <h1>King Hua Chinese Restaurant</h1>
    </div>
  )
}

export default Header;
