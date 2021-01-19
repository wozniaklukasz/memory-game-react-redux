import React from 'react';
import './App.scss';
import {
	Switch,
	Route,
	useLocation
} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import Home from './pages/Home';
import Game from './pages/Game';
import ScoreBoard from './pages/ScoreBoard';
import Urls from './consts/urls';

function App() {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Route exact path={Urls.home}>
					<Home/>
				</Route>
				<Route path={Urls.game}>
					<Game/>
				</Route>
				<Route path={Urls.scoreBoard}>
					<ScoreBoard/>
				</Route>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
