import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Urls from '../consts/urls';
import {addToScore} from '../state/user/userSlice';
import Card from '../components/Card';
import CardType from '../types/CardType';
import {BAD_GUESS_SCORE, GOOD_GUESS_SCORE, NUMBER_OF_PAIRS, REVEALED_CARDS_TIMEOUT} from '../consts/game';
import {AvatarGenerator} from 'random-avatar-generator';
import {addScore} from '../state/scoreBoard/scoreBoardSlice';
import {selectUser} from '../state/user/userSelector';
import UserType from '../types/UserType';
import {MotionDiv} from '../components/MotionDiv';

const generateRandomCardPairs = () => {
	const cardsPairNumbers: any[] = [];
	const generator = new AvatarGenerator();

	for (let i = 0; i < NUMBER_OF_PAIRS; i++) {
		const pairId = generator.generateRandomAvatar();
		cardsPairNumbers.push(pairId);
		cardsPairNumbers.push(pairId);
	}

	return cardsPairNumbers
		.sort(() => .5 - Math.random())
		.map((pairId, id) => {
			return {
				id,
				pairId,
				guessed: false,
			}
		});
}

let revealedTimer: any = null;

function Game() {
	const history = useHistory();
	const dispatch = useDispatch();

	const userRef = useRef<UserType>();
	userRef.current = useSelector(selectUser);

	const [cards, setCards] = useState<CardType[]>(generateRandomCardPairs());
	const [revealedCards, setRevealedCards] = useState<CardType[]>([]);
	const [guessedPairsCounter, setGuessedPairsCounter] = useState<number>(0);

	const handleFinishGame = useCallback(() => {
		history.push(Urls.scoreBoard);
	}, [history]);

	useEffect(() => {
		if (guessedPairsCounter === NUMBER_OF_PAIRS) {
			handleFinishGame();
		}
	}, [guessedPairsCounter, handleFinishGame]);

	useEffect(() => {
		return () => {
			if (userRef) {
				// @ts-ignore
				dispatch(addScore(userRef.current));
			}
			clearTimeout(revealedTimer);
		}
	}, [dispatch])

	const areCardsArePaired = (firstCard: CardType, secondCard: CardType) => firstCard.pairId === secondCard.pairId;

	const setGuessedPair = (firstCard: CardType, secondCard: CardType) => {
		setCards(prevState => {
			const newCards = [...prevState];
			newCards[firstCard.id] = {
				...firstCard,
				guessed: true,
			};
			newCards[secondCard.id] = {
				...secondCard,
				guessed: true,
			};

			return newCards;
		});

		setGuessedPairsCounter(prevState => ++prevState);
	};

	const isCardRevealed = (id: number): boolean => !!revealedCards.find(card => card.id === id);

	const changeScore = (isGoodGuess: boolean) => {
		dispatch(addToScore(isGoodGuess ? GOOD_GUESS_SCORE : BAD_GUESS_SCORE));
	}

	const handleOnCardClick = (card: CardType) => {
		setRevealedCards((prevState => {
			const newRevealedCards = [...prevState, card];

			if (prevState.length === 1) {
				revealedTimer = setTimeout(() => {
					setRevealedCards([]);
				}, REVEALED_CARDS_TIMEOUT);

				const firstCard = prevState[0];

				if (areCardsArePaired(firstCard, card)) {
					setGuessedPair(firstCard, card);
					changeScore(true);
					return [];
				} else {
					changeScore(false);
					return newRevealedCards;
				}
			}

			if (prevState.length === 2) {
				clearTimeout(revealedTimer);
				return [card];
			}

			clearTimeout(revealedTimer);
			return newRevealedCards;
		}));
	}

	const renderCardPairs = () => cards.map((card) => (
		<Card
			key={card.id}
			id={card.id}
			pairId={card.pairId}
			guessed={card.guessed}
			revealed={isCardRevealed(card.id)}
			onCardClick={handleOnCardClick}
		/>
	));

	return (
		<MotionDiv>
			{renderCardPairs()}
		</MotionDiv>
	)
}

export default Game;
