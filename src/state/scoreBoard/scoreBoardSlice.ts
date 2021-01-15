import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import User from '../../types/User';

const initialState: User[] = [];

const scoreBoardSlice = createSlice({
	name: 'scoreBoard',
	initialState,
	reducers: {
		addScore: (state: User[], action: PayloadAction<User>) => {
			state.push(action.payload);
		},
	}
});

export const {addScore} = scoreBoardSlice.actions
export default scoreBoardSlice;
