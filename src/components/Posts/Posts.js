import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postsService} from "../../services";
import {Post} from "../Post/Post";
import {GET_POSTS} from "../../redux";

export function Posts() {

	let state = useSelector(state => state.postsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		postsService.get().then(({data}) => {
			dispatch({type: GET_POSTS, payload: data});
		});
	}, []);

	return (
		<div>
			{state.posts.map((post)=><Post key={post.id} post={post}/>)}
		</div>
	);
}