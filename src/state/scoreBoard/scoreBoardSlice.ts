import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserType from '../../types/UserType';

const initialState: UserType[] = [];

const scoreBoardSlice = createSlice({
	name: 'scoreBoard',
	initialState,
	reducers: {
		addScore: (state: UserType[], action: PayloadAction<UserType>) => {
			const newState = [...state];
			newState.push(action.payload);
			return newState.sort((a, b) => (a.score < b.score) ? 1 : -1)
		},
	}
});

export const {addScore} = scoreBoardSlice.actions
export default scoreBoardSlice;
