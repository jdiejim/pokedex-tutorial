import React from 'react';
import PokeCell from '../PokeCell/PokeCell';
import './PokeList.css';

function PokeList({pokemon, handler}) {
  const pokeCellArray = pokemon.map((e, i) => <PokeCell key={i} poke={e} display={handler} />);

  return (
    <section className='PokeList'>
      { pokeCellArray }
    </section>
  )
}

export default PokeList;
