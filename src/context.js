import React, { useReducer, useContext } from "react";
import data from "./data";
import reducer from "./reducer";
import {
	TOGGLE_HAMBURGER,
	TOGGLE_EXP,
	TOGGLE_REFERENCE,
	TOGGLE_CV,
} from "./action";

const initialState = {
	isHamburgerOpen: false,
	data: data,
	jobShow: 0,
	referenceIndex: 0,
	isCVOpen: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openHamburger = () => {
		dispatch({ type: TOGGLE_HAMBURGER });
	};

	const toggleExp = (id) => {
		dispatch({ type: TOGGLE_EXP, payload: id });
	};

	const toggleReference = (type) => {
		dispatch({ type: TOGGLE_REFERENCE, payload: type });
	};

	const toggleCV = () => {
		dispatch({ type: TOGGLE_CV });
	};
	return (
		<AppContext.Provider
			value={{ openHamburger, ...state, toggleExp, toggleReference, toggleCV }}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
