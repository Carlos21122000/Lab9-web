//import React from 'react';
import './Carta.css';
import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import backFace from '../Imagenes/interogacion.jpg'

const Carta = ({ name, number, frontFace, flipCard, unflippedCards, disabledCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  useEffect(() => {//aqui podria agregar el contador
   // const [cont, setCont] = React.useState(0)
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 700);
     /* setCont(cont +1)
      if(cont == 10){
        <Alert Success="Victoria">Felicidades, has ganado!</Alert>
      }*/
    }
  }, [unflippedCards])

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards])

  const handleClick = e => {
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
  }

  return (
    <div className='card' >
      <ReactCardFlip isFlipped={isFlipped} >
        <img className='card-image' src={backFace} alt='back-face' onClick={hasEvent ? handleClick : null} />
        <img className='card-image' src={frontFace} alt='front-face' onClick={hasEvent ? handleClick : null} />
      </ReactCardFlip>
    </div>
  )
}

export default Carta
