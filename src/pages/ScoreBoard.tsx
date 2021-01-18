import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addScore} from '../state/scoreBoard/scoreBoardSlice';
import {selectUser} from '../state/user/userSelector';
import {selectScoreBoard} from '../state/scoreBoard/scoreBoardSelector';
import UserType from '../types/UserType';
import Urls from '../consts/urls';

function ScoreBoard() {
	const history = useHistory();
	const dispatch = useDispatch();

	const user = useSelector(selectUser);
	const scoreBoard = useSelector(selectScoreBoard);

	useEffect(() => {
		dispatch(addScore(user));
	}, [dispatch, user]);

	const handleBackToStartClick = () => {
		history.push(Urls.home);
	}

	return (
		<div className="animated-view">
			Score Board:
			<ol>
				{
					scoreBoard.map((sb: UserType, i: number) => (<li key={[sb.name, i].join()}>{sb.name} - {sb.score}p.</li>))
				}
			</ol>
			<button onClick={handleBackToStartClick}>Back to start</button>
		</div>
	)
}

export default ScoreBoard;
