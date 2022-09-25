import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../services";

export function Post() {

	const [post, setPost] = useState([]);
	const {id: postId} = useParams();

	useEffect(() => {
		postsService.get(postId).then(({data}) => {
			setPost(data);
		});
	}, [postId]);

	return (
		<div>
			<div>Post {postId} -- {JSON.stringify(post)}</div>
		</div>
	);
}
