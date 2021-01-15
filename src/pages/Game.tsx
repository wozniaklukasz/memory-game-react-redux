import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Urls from '../consts/urls';
import {addToScore} from '../state/user/userSlice';
import Card from '../components/Card';
import './Game.scss';
import CardType from '../types/CardType';

const NUMBER_OF_PAIRS = 10;

const generateRandomCardPairs = (): CardType[] => {
	const cardsPairNumbers: number[] = [];

	for (let i = 0; i < NUMBER_OF_PAIRS; i++) {
		cardsPairNumbers.push(i);
		cardsPairNumbers.push(i);
	}

	return cardsPairNumbers
		.sort(() => .5 - Math.random())
		.map((pairId, id) => {
			return {
				id,
				pairId,
				faceUp: false,
			}
		});
}

function Game() {
	const history = useHistory();
	const dispatch = useDispatch();

	const [cards, setCards] = useState<CardType[]>(generateRandomCardPairs());

	const handleFinishGame = () => {
		dispatch(addToScore(Math.floor((Math.random() * 100) + 1) * (Math.random() < 0.5 ? 1 : -1)));
		history.push(Urls.scoreBoard);
	}

	const handleResetClick = () => {
		setCards(generateRandomCardPairs());
	}

	const handleOnCardClick = (card: CardType) => {
		const newCards = [...cards];
		newCards[card.id] = {
			...card,
			faceUp: true,
		};

		setCards(newCards);
	}

	const renderCardPairs = () => cards.map((card, i) => (
		<Card
			key={card.id}
			id={card.id}
			pairId={card.pairId}
			faceUp={card.faceUp}
			onCardClick={handleOnCardClick}
		/>
	));

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
