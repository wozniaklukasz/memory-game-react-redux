import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userSlice from './userSlice';

const reducer = combineReducers({
	user: userSlice.reducer
});

const middleware = getDefaultMiddleware({
	serializableCheck: false,
});

const store = configureStore({
	reducer,
	middleware,
})

export default store;
