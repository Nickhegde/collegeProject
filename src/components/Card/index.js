import React, { useState, useEffect } from "react";
import "./card.scss";

export default function Card({ cardItem, cardIndex, onShowModal }) {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShrunk(true);
    }, 1000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); 
  }, []);
  return (
    <div
    id="card-container"
    className={`card-container ${isShrunk ? 'shrink' : ''}`}
    onClick={() => { onShowModal(cardIndex); }}
  >
    <div className="background-image" style={{ backgroundImage: `url(${cardItem.bgImg})` }}></div>
    <div className={`card-content ${isShrunk ? 'grow' : ''}`}>
    <div className="card-title">{cardItem.title}</div>
    {isShrunk?<ul>
              {cardItem.description.map((detail, idx) => (
                <li key={idx}><strong>{detail.topic}:</strong> {detail.details}</li>
              ))}
            </ul>:''}
    
          
    </div>
  </div>
  );
}
