import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() =>
					dispatch(login({ name: "John Smith", age: 0, email: "js@gmail.com" }))
				}>
				Login
			</button>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};

export default Login;
