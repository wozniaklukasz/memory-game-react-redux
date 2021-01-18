import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectScoreBoard} from '../state/scoreBoard/scoreBoardSelector';
import UserType from '../types/UserType';
import Urls from '../consts/urls';

function ScoreBoard() {
	const history = useHistory();

	const scoreBoard = useSelector(selectScoreBoard);

	const handleBackToStartClick = () => {
		history.push(Urls.home);
	}

	return (
		<div className="animated-view">
			Score Board:
			<ol>
				{
					scoreBoard.map((sb: UserType, i: number) => (
						<li key={[sb.name, i].join()}>{sb.name} - {sb.score}p.</li>))
				}
			</ol>
			<button onClick={handleBackToStartClick}>Back to start</button>
		</div>
	)
}

export default ScoreBoard;
