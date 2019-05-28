import React from 'react';
import './Header.scss';

const HeaderTitle = () => {
  return (
    <div className='header-title'>
      <p className='title'>
        Lambda School <span className='light'>@LambdaSchool ∙ 27 may</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
