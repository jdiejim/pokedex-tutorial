import React, { Component } from 'react';
import Pokemon from '../model/Pokemon';
import pokeData from '../stubs/pokemon-data.json';
import PokeList from './components/PokeList/PokeList';
import PokeCard from './components/PokeCard/PokeCard';
import './Pokedex.css';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: {}
    }
  }

  displayInfo(poke) {
    this.setState({
      monster: poke
    })
  }

  render() {
    const allPokemon = pokeData.map(e => new Pokemon(e));

    return (
      <section className='Pokedex'>
        <PokeList pokemon={allPokemon} handler={this.displayInfo.bind(this)} />
        <PokeCard pokemon={this.state.monster} />
      </section>
    )
  }
}

export default Pokedex;
