import React from 'react'
import { useDispatch } from 'react-redux';
import './Header.css';
import UserInfo from '../components/UserInfo';
import Search from '../components/Search';
import Button from '../components/Button';
import { showHideAddModel } from '../redux/reducers/picturesSlice';

function Header() {
	const dispatch = useDispatch(); 	
	return (
		<div className="header">
			<div className="header__left">
				<UserInfo />	
			    <Search />
			</div>			
			<Button bgcolor={"#3DB46D"}
				text={"Add a photo"}
				onClickHandler={() => {
					dispatch(showHideAddModel());
				}}
				/>
		</div>
	)
}

export default Header;
