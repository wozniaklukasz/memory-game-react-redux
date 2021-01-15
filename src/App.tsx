import React from 'react';
import './App.scss';
import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import ScoreBoard from './pages/ScoreBoard';

function App() {
	return (
		<div className="app">
			<div className="app-content">
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					<Route path="/game">
						<Game/>
					</Route>
					<Route path="/scoreBoard">
						<ScoreBoard/>
					</Route>
					<Redirect to="/"/>
				</Switch>
			</div>
		</div>
	);
}

export default App;
