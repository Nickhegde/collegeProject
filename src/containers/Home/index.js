import React, { useState } from "react";
import { Carousal, Modal } from "components";
import { VALUES } from "consts";
import "./Home.scss";

export default function Home() {
  const [cardItems, setCardItems] = useState(VALUES.CAROUSAL_ITEMS);
  const [marginLeftValue, setMarginLeftValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContentIndex, setModalContentIndex] = useState(-1);

  const onLeftScrollClick = () => {
    setMarginLeftValue(marginLeftValue + 75);
  };

  const onRighttScrollClick = () => {
    setMarginLeftValue(marginLeftValue - 75);
  };

  const onShowModalToggle = (index = -1) => {
    setModalContentIndex(index);
   
    setShowModal(!showModal);
  };

  const onSetModalContent = (direction) => {
    let currentIndex = modalContentIndex;
    if (direction === "left" && currentIndex > 0) {
      currentIndex = currentIndex - 1;
    } else if (direction === "right" && currentIndex < cardItems.length - 1) {
      currentIndex = currentIndex + 1;
    }
    setModalContentIndex(currentIndex);
  };

  let isHideRightScroll =
    cardItems.length > 3 &&
    (cardItems.length * 100) / 3 - 100 > Math.abs(marginLeftValue)
      ? "visible"
      : "hidden";
  let isHideLeftScroll = marginLeftValue < 0 ? "visible" : "hidden";
  let widthValue = (Math.floor(cardItems.length / 3) +0.5) * 100;
  let isShowModalLeft = modalContentIndex > 0 ? "visible" : "hidden";
  let isShowModalRight =
    modalContentIndex < cardItems.length - 1 ? "visible" : "hidden";

  return (
    <div
      id="home-container"
      className={`home-container ${showModal ? "show" : ""}`}
    >
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <h1 id='app-title'>Chronicles of Technological Transformation</h1>
      </div>
      <div className="app-content">
      {showModal ? (
        <Modal
          modalContent={cardItems[modalContentIndex]}
          onSetModalContent={onSetModalContent}
          onCloseModal={onShowModalToggle}
          isShowModalLeft={isShowModalLeft}
          isShowModalRight={isShowModalRight}
        ></Modal>
      ) : null}
      <div
        id="left-scroll-button"
        onClick={onLeftScrollClick}
        style={{ visibility: isHideLeftScroll }}
      >{`<`}</div>
      {showModal ? (
        ""
      ) : (
        <Carousal
          Items={cardItems}
          marginLeftValue={marginLeftValue}
          widthValue={widthValue}
          onShowModal={onShowModalToggle}
        ></Carousal>
      )}
      <div
        id="right-scroll-button"
        onClick={onRighttScrollClick}
        style={{ visibility: isHideRightScroll }}
      >{`>`}</div>
      </div>
     </div>
  );
}
