import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch} from 'react-redux';
import { increment } from './state/counterSlice';
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import ScoreBoard from './pages/ScoreBoard';

function App() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/scoreBoard">ScoreBoard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/scoreBoard">
            <ScoreBoard />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <footer>
        <button onClick={() => handleIncrement()}>+</button>
      </footer>
    </div>
  );
}

export default App;
