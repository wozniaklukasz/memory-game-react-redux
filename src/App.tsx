import React, {useEffect, useState} from 'react';
import './App.scss';
import {
	Switch,
	Route,
	useLocation
} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from './pages/Home';
import Game from './pages/Game';
import ScoreBoard from './pages/ScoreBoard';
import Urls from './consts/urls';

function App() {
	const location = useLocation();
	const [loaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		setLoaded(true);
	}, [])

	return (
		<TransitionGroup component="main">
			<CSSTransition
				key={location.pathname}
				timeout={{enter: 600, exit: 600}}
				appear
				in={loaded}
			>
				<Switch location={location}>
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
			</CSSTransition>
		</TransitionGroup>
	);
}

export default App;
