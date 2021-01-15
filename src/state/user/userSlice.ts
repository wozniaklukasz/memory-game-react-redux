import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import User from '../../types/User';

const initialState: User = {
	name: 'TODO test',
	score: 1000,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName: (state: User, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setScore: (state: User, action: PayloadAction<number>) => {
			state.score = action.payload
		},
		addToScore: (state: User, action: PayloadAction<number>) => {
			state.score += action.payload
		},
	}
});

export const {setName, setScore, addToScore} = userSlice.actions
export default userSlice;
