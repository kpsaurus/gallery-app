import React, { useState } from "react";

export const pathContext = React.createContext();

export const PathProvider = ({ children }) => {
	const [path, setPath] = useState("");

	const value = {
		path,
		setPath,
	};

	return <pathContext.Provider value={value}>{children}</pathContext.Provider>;
};
