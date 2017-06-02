import React from 'react';
import './PokeCell.css';

function PokeCell({poke, display}) {
  const sprite = require(`../../../assets/${poke.id}.png`);

  const pokePicture = {
    backgroundImage: `url(${sprite})`,
  }

  return (
    <button
      className='PokeCell'
      onClick={() => display(poke)}
      style={pokePicture}>
      {poke.name}
    </button>
  )
}

export default PokeCell;
