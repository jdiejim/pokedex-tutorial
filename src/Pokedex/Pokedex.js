import React, { Component } from 'react';
import pokedata from '../stubs/pokemon-data';
import Pokemon from '../model/Pokemon';
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

  displyInfo(event) {
    const poke = JSON.parse(event.target.dataset.pokemon);

    this.setState({
      monster: poke
    })
  }

  render() {
    let allPokemon = pokedata.map(e => new Pokemon(e))

    return (
      <div className='Pokedex'>
        <PokeList pokemon={allPokemon} handler={this.displyInfo.bind(this)} />
        <PokeCard pokemon={this.state.monster} />
      </div>
    )
  }
}

export default Pokedex;
