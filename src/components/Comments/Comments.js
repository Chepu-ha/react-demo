import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";
import {GET_COMMENTS} from "../../redux";

export function Comments() {

	let state = useSelector(state => state.commentsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		commentsService.get().then(({data}) => {
			dispatch({type: GET_COMMENTS, payload: data});
		});
	}, []);

	return (
		<div>
			{state.comments.map((comment)=><Comment key={comment.id} comment={comment}/>)}
		</div>
	);
}