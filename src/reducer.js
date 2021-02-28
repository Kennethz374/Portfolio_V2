import { TOGGLE_HAMBURGER, TOGGLE_EXP } from "./action";

const reducer = (state, action) => {
	if (action.type === TOGGLE_HAMBURGER) {
		console.log("You click Hamburger");
		return { ...state, isHamburgerOpen: !state.isHamburgerOpen };
	}
	if (action.type === TOGGLE_EXP) {
		console.log(`you click id =====>${action.payload}`);
		if (action.payload === 0) {
			return { ...state, jobShow: 0 };
		}
		return { ...state, jobShow: action.payload };
	}
	return { ...state };
};

export default reducer;
