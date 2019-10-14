import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Button from '@material-ui/core/Button';



class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>Landing</Link>

      <Link to='/library'>Library</Link>
      </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
         <Route exact path="/" component={Landing} />
         <Route path="/library" component={Library} />
         <Route path="/album/:slug" component={Album} />
        </main>
        <Button variant="contained" color="primary">
            Hello World
          </Button>
      </div>
    );
  }
}

export default App;
