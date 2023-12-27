import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = () => {
	let postData = [
		{id: 1, message: 'Hello, my friend!'},
		{id: 2, message: 'How are you?'}
	]
    return(
		<div className="posts_block">
			<h3>My posts</h3>
			<div className={s.create_new_posts}>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<Post message={postData[0].message} id={postData[0].id} like_count="5"/>
				<Post message={postData[1].message} id={postData[1].id} like_count="3"/>
			</div>
		</div>
    )
}

export default MyPosts;