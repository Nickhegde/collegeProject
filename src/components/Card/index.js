import React from 'react';
import './card.scss';

export default function Card({cardItem, cardIndex,  onShowModal}) {
  return (
    <div id='card-container' className='card-container' onClick={()=>{onShowModal(cardIndex)}}>
      <img src={cardItem.bgImg} alt={'abc'} className="card-image" />
      <div className='card-title'>{cardItem.title}</div>
      <div className='card-description'>{cardItem.description}</div>
    </div>
  )
}
