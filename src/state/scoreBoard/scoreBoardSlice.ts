import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserType from '../../types/UserType';

const initialState: UserType[] = [];

const scoreBoardSlice = createSlice({
	name: 'scoreBoard',
	initialState,
	reducers: {
		// todo: add sort by score
		addScore: (state: UserType[], action: PayloadAction<UserType>) => {
			state.push(action.payload);
		},
	}
});

export const {addScore} = scoreBoardSlice.actions
export default scoreBoardSlice;
