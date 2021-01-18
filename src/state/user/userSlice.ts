import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserType from '../../types/UserType';
import {INITIAL_POINTS} from '../../consts/game';

const initialState: UserType = {
	name: '',
	score: INITIAL_POINTS,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetUser: () => {
			return {...initialState};
		},
		setName: (state: UserType, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		setScore: (state: UserType, action: PayloadAction<number>) => {
			state.score = action.payload;
		},
		addToScore: (state: UserType, action: PayloadAction<number>) => {
			state.score += action.payload;
		},
	}
});

export const {setName, setScore, addToScore, resetUser} = userSlice.actions
export default userSlice;
