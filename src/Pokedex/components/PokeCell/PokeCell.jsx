import React from 'react';
import pokeSprites from '../../../stubs/pokeSprites';
import './PokeCell.css';

function PokeCell({pokemon, display}) {
  let style = {
    backgroundImage: `url(${pokeSprites[pokemon.id - 1]})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 5,
    backgroundSize: 'contain'
  }

  return (
    <button onClick={display} style={style} className='PokeCell' data-pokemon={JSON.stringify(pokemon)}>{pokemon.name}</button>
  )
}

export default PokeCell;
