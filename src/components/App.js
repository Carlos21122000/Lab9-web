//import React from "react";
import Header from '../Header.js';
//import Tablero from'.././Tablero.js';
import './App.css';
//import consBaraja from '../utility/consBaraja.js';
import React, { useState, useEffect } from 'react';
import Carta from '../Carta.js';

import { images } from './Imagenes.js';


function App() {

  

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  //const [verification, setverification] = useState([]);

  const [cont, setCont] = React.useState(0);
  const [FinJuego, setFinal] = React.useState(0);

  const shuffleArray = (array) => {
    console.log('');
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, [])

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    }
    else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
     setCont(cont + 1);
      if (match ? disableCards() : unflipCards()){
        setFinal(FinJuego +1);
        if (FinJuego==9){
          alert('Felicidades, has ganado el juego');
          
        }
      }
      //verification();
    }
  }

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
    return true;
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
    return false;
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  }

  /*
  const verification = () => {
    if (setverification(unflipCards) = Null){
      alert('Has ganado ek juego');
    }
  }
*/  

  return (
    <div className='app'>
      <div className='cards-container' >
      <Header 
        cont={cont}
      />
        {
          cards.map((card, index) => (
            <Carta
              name={card.player}
              number={index}
              frontFace={card.src}
              flipCard={flipCard}
              unflippedCards={unflippedCards}
              disabledCards={disabledCards}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
