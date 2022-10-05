import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postsService} from "../../services";

export function Posts() {

	let state = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		postsService.get().then(({data}) => {
			dispatch({type: "GET-POSTS", payload: data});
		});
	}, []);

	return (
		<div>
			{state.posts.map((post)=><h2 key={post.id}>Post {post.id}: {post.title}</h2>)}
		</div>
	);
}