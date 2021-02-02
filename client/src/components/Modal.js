import React from 'react';
import './Modal.css';

function Modal({ width, height, Component}) {
	return (
		<div className="modal"> 
			<div className="modal__container"
				style={{ width: `${width}`, height: `${height}` }}>				
				{Component}
			</div>
		</div>
	)
}

export default Modal;
