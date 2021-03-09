import {
	TOGGLE_HAMBURGER,
	TOGGLE_EXP,
	TOGGLE_REFERENCE,
	TOGGLE_CV,
} from "./action";

const reducer = (state, action) => {
	if (action.type === TOGGLE_HAMBURGER) {
		return { ...state, isHamburgerOpen: !state.isHamburgerOpen };
	}
	if (action.type === TOGGLE_EXP) {
		if (action.payload === 0) {
			return { ...state, jobShow: 0 };
		}
		return { ...state, jobShow: action.payload };
	}
	if (action.type === TOGGLE_REFERENCE) {
		if (action.payload === "nextSlide") {
			if (state.referenceIndex + 1 > state.data.reference.length - 1) {
				return { ...state, referenceIndex: 0 };
			} else {
				return { ...state, referenceIndex: state.referenceIndex + 1 };
			}
		}
		if (action.payload === "prevSlide") {
			if (state.referenceIndex - 1 < 0) {
				return { ...state, referenceIndex: state.data.reference.length - 1 };
			} else {
				return { ...state, referenceIndex: state.referenceIndex - 1 };
			}
		}
	}

	if (action.type === TOGGLE_CV) {
		return { ...state, isCVOpen: !state.isCVOpen };
	}
	return { ...state };
};

export default reducer;
