import React, { useState } from 'react';
import './AddPhoto.css';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { showHideDeleteModel, selectPictures } from '../redux/reducers/picturesSlice';
import axios from '../axios';

function DeletePhto() {
	const [passwordInput, setPasswordInput] = useState('');	
	const dispatch = useDispatch();
	const { _id } = useSelector(selectPictures);

	const onDeleteHandler = async() => { 
		// CheckValidation Passord
		if (passwordInput === "") return;

		const responePassword =  await axios.get(`Users/${passwordInput}`,{
				headers: {
					'Content-Type': 'application/json',
				}
		});
		if (responePassword.data.data) {
			/* Delete picture */			
			const resp =  await axios.delete(`Pictures/${_id}`,{
				headers: {
					'Content-Type': 'application/json',
				}
			});
			if (resp.data.data) {
				dispatch(showHideDeleteModel())
			}
		}
	}

	return (
		<div className="addPhoto">
			<h1>Are you sure?</h1>
			<form className="form">
				<div className="form__container">
					<label htmlFor="password">Password</label>
					<input type="password"
						id="password"
						name="password"
						placeholder="************"
						value={passwordInput}
						onChange={(e) => { setPasswordInput(e.target.value) }}
						autoComplete="false"
						required
					/>
				</div>				
				<div className="form__buttons">
					<Button bgcolor={"#BDBDBD"}
						text={"Cancel"}
						onClickHandler={() => { dispatch(showHideDeleteModel()) }}
						color={"#000"}
					/>
					<Button bgcolor={"#EB5757"}
						text={"Delete"}
					    onClickHandler={onDeleteHandler}						
					/>
				</div>
			</form>
		</div>
	)
}

export default DeletePhto;
