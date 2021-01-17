import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserType from '../../types/UserType';

const initialState: UserType = {
	name: '',
	score: 1000,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName: (state: UserType, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setScore: (state: UserType, action: PayloadAction<number>) => {
			state.score = action.payload
		},
		addToScore: (state: UserType, action: PayloadAction<number>) => {
			state.score += action.payload
		},
	}
});

export const {setName, setScore, addToScore} = userSlice.actions
export default userSlice;
