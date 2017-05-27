import React, { Component } from 'react';
import pokemon from '../stubs/pokemon-data';
import pokeSprites from '../stubs/pokeSprites';
import './Pokedex.css';
import Poke from '../poke';

console.log(pokemon[0]);
let st = `url(./assets/1.png)`;
console.log(pokeSprites[1]);
let st2 = {
  width: 40,
  height: 40,
  backgroundImage: `url(${pokeSprites[1]})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
}

class Pokedex extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi</h1>
      </div>
    );
  }
}

export default Pokedex;
