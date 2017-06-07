import React from 'react';
import './PokeCard.css';

function PokeCard({pokemon}) {
  if (!pokemon.id) {
    return (
      <section className='PokeCard'>
        <div className='picture'></div>
        <div className='info'></div>
      </section>
    )
  }

  const sprite = require(`../../../assets/${pokemon.id}.png`);
  const pokePicture = {
    backgroundImage: `url(${sprite})`,
  }

  return (
    <section className='PokeCard'>
      <div style={pokePicture} className='picture'></div>
      <div className='info'>
        <h1 className='info-name'>{pokemon.name}</h1>
        <p className='info-char'>Type: {pokemon.type}</p>
        <p className='info-char'>Attack: {pokemon.attack}</p>
        <p className='info-char'>evolution: {pokemon.evolution}</p>
      </div>
    </section>
  )
}

export default PokeCard;
