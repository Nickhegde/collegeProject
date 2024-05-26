import React from 'react';

import './Modal.scss';

export default function Modal({modalContent, onSetModalContent, onCloseModal}) {
  return (
    <div id=' -container' className='modal-container'>
      <div className='overlay'></div>
      <div className='popup-main-container'>
        <div id="close-button" onClick={onCloseModal}>X</div>
        <div id="modal-left-button" onClick={()=>{onSetModalContent("left")}}>{`<`}</div>
        <div className='popup-container'>
            <div className='modal-title'>{modalContent.modalTitle}</div>
            <div className='modal-description'>{modalContent.modalDescription}</div>
        </div>
        <div id="modal-right-button" onClick={()=>{onSetModalContent("right")}}>{`>`}</div>
      </div>
    </div>
  )
}