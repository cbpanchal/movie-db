import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  </Router>
);

export default App;
