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
import Urls from './consts/urls';

function App() {
	return (
		<div className="app">
			<div className="app-content">
				<Switch>
					<Route exact path={Urls.home}>
						<Home/>
					</Route>
					<Route path={Urls.game}>
						<Game/>
					</Route>
					<Route path={Urls.scoreBoard}>
						<ScoreBoard/>
					</Route>
					<Redirect to={Urls.home} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
