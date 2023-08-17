import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MakeupsState from './types/MakeupsState';
import * as api from './api';
import Makeup from './types/Makeup';
//import { deleteMakeupProduct } from './api';

const initialState: MakeupsState = {
	makeups: [],
	filtered: [],
	error: '',
	toggle: false,
};

export const loadMakeups = createAsyncThunk('makeups/loadMakeups', () => api.getAll());

export const loadMakeupsByBrand = createAsyncThunk('makeups/loadMakeupsByBrand', (brand: string) =>
	api.getMakeupsByBrand(brand)
);

export const loadMakeupsByBrandAndProductType = createAsyncThunk(
	'makeups/loadMakeupsByBrand',
	({ brand, product_type }: { brand: string; product_type: string }) =>
		api.getMakeupsByBrandAndProductType(brand, product_type)
);

export const makeupsSlice = createSlice({
	name: 'makeups',
	initialState,
	reducers: {
		changeToggleStatus: (state) => {
			state.toggle = !state.toggle;
		},
		chooseFavoriteMakeupProduct: (state, action: PayloadAction<Makeup>) => {
			state.favoriteMakeupProduct = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadMakeups.fulfilled, (state, action) => {
				state.makeups = action.payload.makeups;
			})
			/*.addCase(loadMakeupsByBrandAndProductType.fulfilled, (state, action) => {
				// если бы айпишка сохраняла - мы бы использовали вмесето filtered - posts
				state.filtered = state.filtered.map((makeup) =>
					makeupsSlice.makeup.product_type === action.payload.makeup.product_type ? action.payload : makeup
				);
			})*/
			.addCase(loadMakeupsByBrand.fulfilled, (state, action) => {
				state.filtered = action.payload;
			});
		/*	.addCase(deleteMakeupProduct.fulfilled, (state, action) => {
				state.makeups = state.makeups.filter((makeup) => makeup.id !== action.payload.id);
			})*/
	},
});

export default makeupsSlice.reducer; // экспорт функций reducers
export const { changeToggleStatus, chooseFavoriteMakeupProduct } = makeupsSlice.actions; // экспорт функций reducers
