import React, { useEffect, useReducer, useContext } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const openHamberger = () => {
		console.log("Hamberger is Open!!!");
	};
	return (
		<AppContext.Provider value={{ openHamberger, data }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
