import React from 'react';

import './Modal.scss';

export default function Modal({modalContent, onSetModalContent, onCloseModal, isShowModalLeft, isShowModalRight}) {
  return (
    <div className="modal-overlay">
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h2>{modalContent.title}</h2>
        <button className="close-btn" onClick={onCloseModal}>
          &times;
        </button>
      </div>
     <div className='modal-body'>
     <button className="arrow-btn left-arrow" onClick={()=>{onSetModalContent("left")}} style={{visibility: isShowModalLeft}}>{'<'}</button>
      <div className="modal-content">
      <div className="image-container">
            <img src={modalContent.bgImg} alt={modalContent.title} />
        </div>
        <div className="modal-description">
            <p>
                {modalContent.modalDescription}
            </p>
      </div>
      </div>
      
      <button className="arrow-btn right-arrow" onClick={()=>{onSetModalContent("right")}} style={{visibility: isShowModalRight}}>{'>'}</button>
     </div>
    </div>
  </div>
  )
}
