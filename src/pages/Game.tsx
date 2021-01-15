import React, {useEffect, useState} from 'react';
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
			}
		});
}

function Game() {
	const history = useHistory();
	const dispatch = useDispatch();

	const [cards, setCards] = useState<CardType[]>(generateRandomCardPairs());
	const [revealedCards, setRevealedCards] = useState<CardType[]>([]);

	const handleFinishGame = () => {
		dispatch(addToScore(Math.floor((Math.random() * 100) + 1) * (Math.random() < 0.5 ? 1 : -1)));
		history.push(Urls.scoreBoard);
	}

	const handleResetClick = () => {
		setCards(generateRandomCardPairs());
	}

	useEffect(() => {
		console.log('revealed', revealedCards)
	}, [revealedCards])

	const handleOnCardClick = (card: CardType) => {
		setRevealedCards((prevState => {
			const newRevealedCards = [...prevState, card];

			if (prevState.length === 1) {
				console.log(areCardsArePaired(prevState[0], card));
				return newRevealedCards;
			}

			if (prevState.length === 2) {
				return [card];
			}

			return newRevealedCards;
		}));
	}

	const areCardsArePaired = (firstCard: CardType, secondCard: CardType) => firstCard.pairId === secondCard.pairId;

	const isCardRevealed = (id: number): boolean => !!revealedCards.find(card => card.id === id);

	const renderCardPairs = () => cards.map((card) => (
		<Card
			key={card.id}
			id={card.id}
			pairId={card.pairId}
			revealed={isCardRevealed(card.id)}
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
