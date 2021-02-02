import React from 'react'
import './UserInfo.css';
import PersonIcon from '@material-ui/icons/Person';

function UserInfo() {
	return (
		<div className="userInfo">
			<PersonIcon />
			<div className="userInfo__detail">
				<h1>My Unsplash</h1>
				<p>devchallenges.io</p>
			</div>
		</div>
	)
}

export default UserInfo;
