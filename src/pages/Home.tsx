import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setName} from '../state/user/userSlice';
import Urls from '../consts/urls';
import {selectUser} from '../state/user/userSelector';

function Home() {
	const history = useHistory();
	const dispatch = useDispatch();

	const user = useSelector(selectUser);

	const handleUserNameChange = (event: React.FormEvent<HTMLInputElement>) => {
		dispatch(setName(event.currentTarget.value));
	}

	const handleOnPlayClick = () => {
		history.push(Urls.game);
	}

	return (
		<form onSubmit={handleOnPlayClick}>
			<label>
				Enter Your name:
				<input value={user.name} onChange={handleUserNameChange}/>
			</label>
			<input disabled={!user.name} type="submit" value="Play!"/>
		</form>
	)
}

export default Home;
