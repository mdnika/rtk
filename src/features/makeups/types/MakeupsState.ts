import Makeup from './Makeup';

export default interface MakeupsState {
	makeups: Makeup[];
	filtered: Makeup[];
	error?: string;
	toggle?: boolean;
	favoriteMakeupProduct?: Makeup;
}
