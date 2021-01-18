import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setName, resetUser} from '../state/user/userSlice';
import Urls from '../consts/urls';
import {selectUser} from '../state/user/userSelector';

function Home() {
	const history = useHistory();
	const dispatch = useDispatch();

	const user = useSelector(selectUser);

	useEffect(() => {
		dispatch(resetUser());
	}, [dispatch]);

	const handleUserNameChange = (event: React.FormEvent<HTMLInputElement>) => {
		dispatch(setName(event.currentTarget.value));
	}

	const handleOnPlayClick = (e: React.FocusEvent<HTMLFormElement>) => {
		e.preventDefault();
		history.push(Urls.game);
	}

	return (
		<div className="animated-view">
			<form onSubmit={handleOnPlayClick}>
				<label>
					Enter Your name:
					<input value={user.name} onChange={handleUserNameChange}/>
				</label>
				<input disabled={!user.name} type="submit" value="Play!"/>
			</form>
		</div>
	)
}

export default Home;
