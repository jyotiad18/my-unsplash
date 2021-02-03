import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Photo.css';
import { showHideDeleteModel } from '../redux/reducers/picturesSlice';

function Photo({ _id, title, url }) {
	const dispatch = useDispatch();
	const [isHover, setIsHover] = useState(false);	
	
	const onMouseOverHandler = () => {		
		setIsHover(!isHover);		
	}
	return (
		<div className="photo">			
			<div className="photo__content"
				onMouseEnter={onMouseOverHandler}
				onMouseLeave={onMouseOverHandler}				
			>
				<img src={url} alt="" />
				{isHover ?
					<div className="photo__hover">
						<span onClick={() => {
							onMouseOverHandler();							
							dispatch(showHideDeleteModel({
								_id: _id
							}));							
						}}>Delete</span>
						<h3>{title}</h3>
					</div>
				:null
				}
			</div>
  		</div>
	)
}

export default Photo;