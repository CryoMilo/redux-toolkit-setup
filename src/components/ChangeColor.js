import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
	const [color, setColor] = useState("");
	const dispatch = useDispatch();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch(changeColor(color.toLowerCase()));
			}}>
			<input
				type="text"
				placeholder="insert color"
				onChange={(e) => {
					setColor(e.target.value);
				}}
			/>
			<button type="submit">CHANGE COLOR</button>
		</form>
	);
};

export default ChangeColor;
