import React from 'react';
import './Card.scss';
import CardType from '../types/CardType';

type CardProps = CardType & {
	onCardClick: (card: CardType) => void,
}

function Card({id, pairId, faceUp, onCardClick}: CardProps) {
	const handleOnCardClick = () => onCardClick({
		id, pairId, faceUp
	});

	return (
		<div className={faceUp ? "card card--face-up" : "card"} onClick={handleOnCardClick}>
			<div>id: {id}</div>
			<div>pair: {pairId}</div>
			<div>faceUp {faceUp.toString()}</div>
		</div>
	)
}

export default Card;
