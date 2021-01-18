import React from 'react';
import './App.scss';
import {
	Switch,
	Route,
	Redirect,
	useLocation
} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from './pages/Home';
import Game from './pages/Game';
import ScoreBoard from './pages/ScoreBoard';
import Urls from './consts/urls';

function App() {
	const location = useLocation();

	const transitionGroupProps = {
		component: "main",
	};

	const cssTransitionProps = {
		key: location.pathname,
		timeout: {enter: 2000, exit: 2000},
		appear: true,
	};

	return (
		<TransitionGroup {...transitionGroupProps}>
			<CSSTransition {...cssTransitionProps}>
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
					<Redirect to={Urls.home}/>
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default App;
