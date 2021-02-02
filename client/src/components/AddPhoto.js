import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddPhoto.css';
import Button from './Button';
import { showHideAddModel } from '../redux/reducers/picturesSlice';
import axios from '../axios';

function AddPhoto() {
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	const dispatch = useDispatch(); 
	
	const onSubmitHandler = async () => { 
		const data = JSON.stringify({
        	title: title,
        	url: url
    	})

		const resp =  await axios.post('/pictures', data, {
				headers: {
					'Content-Type': 'application/json',
				}
		});
		if (resp.data.message === null)
		{
			dispatch(showHideAddModel());	
		}
	}

	return (
		<div className="addPhoto">
			<h1>Add a new photo</h1>
			<form className="form">
				<div className="form__container">
					<label htmlFor="title">Label</label>
					<input type="text"
						id="title"
						name="title"
						value={title}
						placeholder="Suspendisse elit massa"
						onChange={e => setTitle(e.target.value)}
						required
					/>					
				</div>
				<div className="form__container">
					<label htmlFor="url">Url</label>
					<input type="text"
						id="url"
						name="url"
						value={url}
						placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
						onChange={e => setUrl(e.target.value)}
						required
					/>
				</div>
				<div className="form__buttons">
					<Button bgcolor={"#BDBDBD"}
						text={"Cancel"}
						onClickHandler={() => {dispatch(showHideAddModel())}}
						color={"#000"}
					/>
					<Button bgcolor={"#3DB46D"}
						text={"Submit"}
						onClickHandler={() => { onSubmitHandler() }}						
					/>
				</div>
			</form>
		</div>
	)
}

export default AddPhoto;
