import {Link} from "react-router-dom";

export function Header() {
	return (
		<div>
			<ul>
				<li><Link to={"/"}>Home</Link></li>
				<li><Link to={"/users"}>Users</Link></li>
				<li><Link to={"/comments"}>Comments</Link></li>
				<li><Link to={"/posts"}>Posts</Link></li>
			</ul>
		</div>
	);
}