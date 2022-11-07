import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ProfileModal.style.css";

const ProfileModal = React.forwardRef((props, profileRef) => {
	return (
		<div className="profile-modal" ref={profileRef}>
			<p className="top">Profile</p>
			<div className="bottom">
				<div className="list">
					<Link to="/">Profile</Link>
					<Link to="/">Settings</Link>
					<Link to="/">Purchase History</Link>
				</div>
				<button className="log-out">Log-out</button>
			</div>
		</div>
	);
});

export default ProfileModal;
