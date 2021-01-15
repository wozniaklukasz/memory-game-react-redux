import React from 'react';
import './Card.scss';

type CardProps = {
	pairId: number,
}

function Card({pairId}: CardProps) {
	return (
		<div className="card">{pairId}</div>
	)
}

export default Card;
