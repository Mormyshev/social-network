import React from "react";
import s from "./Post.module.css"
const Post = (props) => {
    return(
		<div>
			<div className={s.item}>
				<div className={s.item_post}>
					<div className={s.post_text}>{props.message}</div>
					<img src="https://www.dhresource.com/0x0/f2/albu/g4/M01/5D/59/rBVaEFcTe72AOb3bAACz3sAKVqM666.jpg" alt="" />
				</div>
				<div className={s.item_likes}>
					<span>like {props.like_count}</span>
				</div>
			</div>
		</div>
    )
}

export default Post;