import React from 'react';
import './Card.scss';
import CardType from '../types/CardType';

type CardProps = CardType & {
	onCardClick: (card: CardType) => void,
	revealed: boolean,
}

function Card({id, pairId, revealed, onCardClick}: CardProps) {
	const handleOnCardClick = () => onCardClick({
		id, pairId
	});

	return (
		<div className={revealed ? "card card--revealed" : "card"} onClick={handleOnCardClick}>
			<div>id: {id}</div>
			<div>pair: {pairId}</div>
			<div>revealed {revealed.toString()}</div>
		</div>
	)
}

export default Card;
