import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

export function Comments() {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		commentsService.get().then(({data}) => {
			setComments(data);
		});
	}, []);

	return (
		<div>
			<h2>Comments</h2>
			<Outlet/>
			<div>{comments.map((comment)=><Comment comment={comment} key={comment.id}/>)}</div>
		</div>
	);
}