import React, { useEffect, useReducer, useContext } from "react";
import data from "./data";
import reducer from "./reducer";
import { TOGGLE_HAMBURGER } from "./action";

const initialState = {
	isHamburgerOpen: false,
	data: data,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openHamburger = () => {
		dispatch({ type: TOGGLE_HAMBURGER });
	};
	return (
		<AppContext.Provider value={{ openHamburger, ...state }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
