import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {commentsService} from "../../services";

export function Comments() {

	let state = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		commentsService.get().then(({data}) => {
			dispatch({type: "GET-COMMENTS", payload: data});
		});
	}, []);

	return (
		<div>
			{state.comments.map((comment)=><h2 key={comment.id}>Comment {comment.id}: {comment.name}</h2>)}
		</div>
	);
}