import React from 'react'
import './Button.css';

function Button({ bgcolor, text, onClickHandler, color="#fff" }) {
	return (
		<button
			style={{ backgroundColor: `${bgcolor}`, color:`${color}`}}
			onClick={() => onClickHandler()}
			> {text}</ button>
	)
}

export default Button;
