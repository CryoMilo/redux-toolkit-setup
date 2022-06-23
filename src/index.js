import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { themeSlice } from "./features/theme";
import { userSlice } from "./features/user";
import "./styles/index.css";

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		theme: themeSlice.reducer,
	},
});

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
