import React, { Component } from 'react';
import pokedata from '../stubs/pokemon-data';
import Pokemon from '../model/Pokemon';
import PokeList from './components/PokeList/PokeList';
import './Pokedex.css';

let bulbasaur = new Pokemon(pokedata[0]);
console.log(bulbasaur);

class Pokedex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Pokedex'>
        <PokeList />
      </div>
    )
  }
}

export default Pokedex;
