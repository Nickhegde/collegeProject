import React from 'react';
import './card.scss';

export default function Card({CardItem}) {
  return (
    <div id='card-container' className='card-container'>
      <div className='card-title'>{CardItem.title}</div>
      <div className='card-description'>{CardItem.description}</div>
    </div>
  )
}
