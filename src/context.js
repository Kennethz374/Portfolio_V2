import React, { useEffect, useReducer, useContext } from "react";
import data from "./data";
import reducer from "./reducer";
import { TOGGLE_HAMBURGER, TOGGLE_EXP, TOGGLE_REFERENCE } from "./action";

const initialState = {
	isHamburgerOpen: false,
	data: data,
	jobShow: 0,
	referenceIndex: 0,
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
	return (
		<AppContext.Provider
			value={{ openHamburger, ...state, toggleExp, toggleReference }}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
