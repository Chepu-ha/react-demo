import "./App.css";
import {Link, Route, Routes} from "react-router-dom";

import {Comments, Home, Posts, Users,} from "./components";

function App() {

  	return (
		<div>
			<ul>
				<li><Link to={""}>Home</Link></li>
				<li><Link to={"/users"}>Users</Link></li>
				<li><Link to={"/comments"}>Comments</Link></li>
				<li><Link to={"/posts"}>Posts</Link></li>
			</ul>

			<Routes>
				<Route index element={<Home/>} />
				<Route path={"/users"} element={<Users/>} />
				<Route path={"/comments"} element={<Comments/>} />
				<Route path={"/posts"} element={<Posts/>} />
			</Routes>
		</div>
	);
}

export default App;
