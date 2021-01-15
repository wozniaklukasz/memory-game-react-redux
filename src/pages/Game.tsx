import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Urls from '../consts/urls';
import {addToScore} from '../state/user/userSlice';

function Game() {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleFinishGame = () => {
		dispatch(addToScore(Math.floor((Math.random()*100) + 1) * (Math.random() < 0.5 ? 1 : -1)));
		history.push(Urls.scoreBoard);
	}

	return (
		<div>Game page <button onClick={handleFinishGame}>Finish</button></div>
	)
}

export default Game;
