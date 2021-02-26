import { TOGGLE_HAMBURGER } from "./action";

const reducer = (state, action) => {
	if (action.type === TOGGLE_HAMBURGER) {
		console.log("You click Hamburger");
		return { ...state, isHamburgerOpen: !state.isHamburgerOpen };
	}
	return { ...state };
};

export default reducer;
