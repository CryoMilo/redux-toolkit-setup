import React from "react";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
	return (
		<>
			<div className="App">
				<Profile />
				<Login />
				<ChangeColor />
			</div>
		</>
	);
};

export default App;
