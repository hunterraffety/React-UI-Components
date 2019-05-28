import React from 'react';
import './Card.scss';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
  return (
    <a href='http://reactjs.org' target='_blank' rel='noopener noreferrer'>
      <div className='card-container'>
        <div className='cards'>
          <CardBanner />
          <CardContent />
        </div>
      </div>
    </a>
  );
};

export default CardContainer;
