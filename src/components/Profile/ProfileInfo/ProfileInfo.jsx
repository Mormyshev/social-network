import React from "react";
import s from "./ProfileInfo.module.css"
const ProfileInfo = (props) => {
    return (
		<div>	
			<div>
				<img src="https://wallpapers.com/images/file/free-image-rocky-mountains-lvroctginu4fvrqz.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>
    )
}

export default ProfileInfo;