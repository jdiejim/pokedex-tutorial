import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex/Pokedex';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Pokedex />, document.getElementById('root'));
registerServiceWorker();
