import React from 'react';
import PokeCell from '../PokeCell/PokeCell';
import './PokeList.css';

function PokeList({pokemon, handler}) {
  const list = pokemon.map((e, i) => <PokeCell key={i} pokemon={e} display={handler} />);

  return (
    <section className='PokeList'>
      { list }
    </section>
  )
}

export default PokeList;
