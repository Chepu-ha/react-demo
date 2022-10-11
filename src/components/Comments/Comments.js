import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {commentActions} from "../../redux";
import {Comment} from "../Comment/Comment";

export function Comments() {

	const dispatch = useDispatch();
	const {comments} = useSelector(state => state.commentReducer);

	useEffect(() => {
		dispatch(commentActions.getAll());
	}, []);

	return (
		<div>
			{comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
		</div>
	);
}