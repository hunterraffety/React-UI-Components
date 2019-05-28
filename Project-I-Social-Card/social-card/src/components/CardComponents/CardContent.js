import React from 'react';
import './Card.scss';

const CardContent = () => {
  return (
    <div className='card-content'>
      <p className='card-content-title'>Get started with React</p>
      <p class='card-content-text'>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p class='card-content-text'>
        <a href='http://reactjs.org'>reactjs.org</a>
      </p>
    </div>
  );
};

export default CardContent;
