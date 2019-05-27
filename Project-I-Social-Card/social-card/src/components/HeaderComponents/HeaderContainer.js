import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.scss';

const HeaderContainer = () => {
  return (
    <div className='header-container'>
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;
