import { RootState } from '../../app/store';
import Makeup from './types/Makeup';

export const selectMakeups = (state: RootState): Makeup[] => state.makeups.makeups;
export const selectFiltered = (state: RootState): Makeup[] => state.makeups.filtered;
export const selectError = (state: RootState): string | undefined => state.makeups.error;
export const selectToggle = (state: RootState): boolean | undefined => state.makeups.toggle;
export const selectFavoriteMakeupProduct = (state: RootState): Makeup | undefined =>
	state.makeups.favoriteMakeupProduct;
