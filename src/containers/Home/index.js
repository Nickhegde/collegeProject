import React,{ useState } from 'react';
import { Carousal } from 'components';
import { VALUES } from 'consts';
import './Home.scss';


export default function Home() {
    const [cardItems, setCardItems] = useState(VALUES.CAROUSAL_ITEMS);
    const [marginLeftValue, setMarginLeftValue] = useState(0);

    const onLeftScrollClick = () => {
      setMarginLeftValue(marginLeftValue+100);
    }

    const onRighttScrollClick = () => {
      setMarginLeftValue(marginLeftValue-100);
    }

    let isHideRightScroll= (cardItems.length>3 && (((cardItems.length*100/3)-100)>Math.abs(marginLeftValue))) ? "visible":"hidden";
    let isHideLeftScroll = marginLeftValue < 0 ? "visible":"hidden";
    let widthValue = (Math.floor(cardItems.length/3)+1) * 100;

  return (
    <div id='home-container' className='home-container'>
      <div id="left-scroll-button" onClick={onLeftScrollClick} style={{visibility: isHideLeftScroll}}>{`<`}</div>
      <Carousal Items = {cardItems} marginLeftValue={marginLeftValue} widthValue={widthValue}></Carousal>
      <div id="right-scroll-button" onClick={onRighttScrollClick} style={{visibility: isHideRightScroll}}>{`>`}</div>
    </div>
  )
}
