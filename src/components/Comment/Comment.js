import {Link, Outlet, useParams} from "react-router-dom";

import CommentStyle from "./Comment.module.css";

export function Comment({comment}) {

	const {id: postId} = useParams();

	return (
		<div className={CommentStyle.Comment}>
			<div>
				<div>
					<span>Comment {comment.id} -- </span>
					<Link to={`${comment.id}`}>
						<span>{JSON.stringify(comment)}</span>
					</Link>
				</div>
			</div>
			<div>
				{comment.id === Number(postId) && <Outlet/>}
			</div>
		</div>
	);
}