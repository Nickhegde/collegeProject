import React from 'react';
import { Card } from 'components';

import './carousal.scss';

export default function Carousal({Items, marginLeftValue, widthValue}) {
  return (
    <div id='carousal-container' className='carousal-contaner'>
      <div className='carousal-card-container' style={{marginLeft:`${marginLeftValue}%`, width : `${widthValue}%`}}>
        { Items.length? Items.map((Item, index)=>{
          return <Card key={index} CardItem = {Item}></Card>
        }) : null }
      </div>
    </div>
  )
}
