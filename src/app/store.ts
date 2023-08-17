import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/products/productsSlice';
import postsReducer from '../features/posts/postsSlice';
import authReducer from '../features/auth/authSlice';
import makeupsReducer from '../features/makeups/makeupSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		products: productsReducer,
		posts: postsReducer,
		auth: authReducer,
		makeups: makeupsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
