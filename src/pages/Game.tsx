import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Urls from '../consts/urls';
import {addToScore} from '../state/user/userSlice';
import Card from '../components/Card';
import './Game.scss';

const NUMBER_OF_PAIRS = 10;

const generateRandomCardPairs = () => {
	const cardsPairNumbers: number[] = [];

	for (let i = 0; i < NUMBER_OF_PAIRS; i++) {
		cardsPairNumbers.push(i);
		cardsPairNumbers.push(i);
	}

	return cardsPairNumbers.sort(() => .5 - Math.random());
}

function Game() {
	const history = useHistory();
	const dispatch = useDispatch();

	const [cardPairs, setCardPairs] = useState<number[]>(generateRandomCardPairs());

	const handleFinishGame = () => {
		dispatch(addToScore(Math.floor((Math.random() * 100) + 1) * (Math.random() < 0.5 ? 1 : -1)));
		history.push(Urls.scoreBoard);
	}

	const handleResetClick = () => {
		setCardPairs(generateRandomCardPairs());
	}

	const renderCardPairs = () => cardPairs.map((cp, i) => (<Card key={[cp, i].join()} pairId={cp} />));

	return (
		<>
			<div className="card-wrapper">
				{renderCardPairs()}
			</div>
			<button onClick={handleResetClick}>Reset</button>
			<button onClick={handleFinishGame}>Finish</button>
		</>
	)
}

export default Game;
