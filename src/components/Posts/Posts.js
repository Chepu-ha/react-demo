import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postActions} from "../../redux";
import {Post} from "../Post/Post";

export function Posts() {

	const dispatch = useDispatch();
	const {posts} = useSelector(state => state.commentReducer);

	useEffect(() => {
		dispatch(postActions.getAll());
	}, []);

	return (
		<div>
			{posts.map((post) => <Post key={post.id} post={post}/>)}
		</div>
	);
}