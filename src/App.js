import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Logo from './img/bloc_jams_logo.png';

import Backward from '../img/backward.svg';
import Forward from '../img/forward.svg';
import Pause from '../img/pause.svg';
import Play from '../img/play.svg';
import VolumeHigh from '../img/icons8-voice-24.png';
import VolumeOff from '../img/icons8-mute-24.png';




class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <nav className="navbar navbar-dark bg-dark">
        <li className="nav-link"><Link className="text-light" to='/'>Landing</Link></li>
          <img src={Logo} alt="Bloc Jams logo" />
          <li className="nav-link"><Link className="text-light"to='/library'>Library</Link></li>
      </nav>
        </header>
        <main>
         <Route exact path="/" component={Landing} />
         <Route path="/library" component={Library} />
         <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
