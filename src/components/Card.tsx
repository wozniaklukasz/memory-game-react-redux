import React from 'react';
import './Card.scss';
import CardType from '../types/CardType';

type CardProps = CardType & {
	onCardClick: (card: CardType) => void,
	revealed: boolean,
}

function Card({id, pairId, revealed, guessed, onCardClick}: CardProps) {
	const handleOnCardClick = () => onCardClick({
		id, pairId, guessed
	});

	const getCardClassName = (): string => {
		const cn = "card";

		if (guessed) return `${cn} ${cn}--guessed`;
		if (revealed) return `${cn} ${cn}--revealed`;

		return cn;
	}

	return (
		<div className={getCardClassName()} onClick={guessed ? () => {} : handleOnCardClick}>
			<div>id: {id}</div>
			<div>pair: {pairId}</div>
			<div>revealed {revealed.toString()}</div>
		</div>
	)
}

export default Card;
