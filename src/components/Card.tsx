import React from 'react';
import './Card.scss';
import CardType from '../types/CardType';

type CardProps = CardType & {
	onCardClick: (card: CardType) => void,
	revealed: boolean,
}

function Card({id, pairId, revealed, guessed, onCardClick}: CardProps) {
	const handleOnCardClick = () => {
		if (guessed || revealed) return;

		onCardClick({
			id, pairId, guessed
		});
	};

	const getCardClassName = (): string => {
		const cn = "card";

		if (guessed) return `${cn} ${cn}--guessed`;
		if (revealed) return `${cn} ${cn}--revealed`;

		return cn;
	}

	return (
		<div className="card-wrapper">
			<div
				className={getCardClassName()}
				onClick={handleOnCardClick}>
				<div className="card-side card-side--front" style={{backgroundImage: `url(${pairId})`}}/>
				<div className="card-side card-side--back"/>
			</div>
		</div>
	)
}

export default Card;
