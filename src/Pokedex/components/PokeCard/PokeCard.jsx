import React from 'react';
import pokeSprites from '../../../stubs/pokeSprites';
import './PokeCard.css';

function PokeCard({pokemon}) {
  let style = {
    backgroundImage: `url(${pokeSprites[pokemon.id - 1]})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 5,
    backgroundSize: 'contain'
  }

  return (
    <section className='PokeCard'>
      <section style={style} className='picture'></section>
      <section className='info'>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.type}</p>
        <p>{pokemon.attack}</p>
        <p>{pokemon.defense}</p>
      </section>
    </section>
  )
}

export default PokeCard;
