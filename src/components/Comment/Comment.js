import {Link} from "react-router-dom";

import commentStyle from "./Comment.module.css";

export function Comment({comment}) {

	return (
		<div className={commentStyle.Comment}>
			<p><span>Comment {comment.id} -- </span><Link
				to={`/posts/${comment.id}`}><span>{JSON.stringify(comment)}</span></Link></p>
		</div>
	);
}