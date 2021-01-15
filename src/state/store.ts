import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import scoreBoardSlice from './scoreBoard/scoreBoardSlice';

const reducer = combineReducers({
	user: userSlice.reducer,
	scoreBoard: scoreBoardSlice.reducer,
});

const middleware = getDefaultMiddleware({
	serializableCheck: false,
});

const store = configureStore({
	reducer,
	middleware,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
