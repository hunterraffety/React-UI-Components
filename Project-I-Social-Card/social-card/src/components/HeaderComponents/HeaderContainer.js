import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.scss';

const HeaderContainer = () => {
  return (
    <div className='header-container'>
      <ImageThumbnail />
      <div className='header-content-container'>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
