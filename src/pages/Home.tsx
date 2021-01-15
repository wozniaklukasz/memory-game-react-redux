import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setName} from '../state/user/userSlice';
import Urls from '../consts/urls';

function Home() {
	const [userName, setUserName] = useState<string>('');
	const history = useHistory();
	const dispatch = useDispatch();

	const handleUserNameChange = (event: React.FormEvent<HTMLInputElement>) => {
		setUserName(event.currentTarget.value)
	}

	const handleOnPlayClick = () => {
		dispatch(setName(userName));
		history.push(Urls.game);
	}

	return (
		<div>
			Enter Your name: <input value={userName} onChange={handleUserNameChange}/>
			<button disabled={!userName} onClick={handleOnPlayClick}>
				Play!
			</button>
		</div>
	)
}

export default Home;
