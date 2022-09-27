import "./App.css";

import {
	Routes,
	Route,
	Link
} from "react-router-dom";

import {Albums, Comments, Home, Post, Todos} from "./components";

function App() {
	return (
		<div>
			<ul>
				<li><Link to={""}>Home</Link></li>
				<li><Link to={"/todos"}>Todos</Link></li>
				<li><Link to={"/albums"}>Albums</Link></li>
				<li><Link to={"/comments"}>Comments</Link></li>
			</ul>

			<Routes>
				<Route index element={<Home />} />
				<Route path={"/todos"} element={<Todos/>}/>
				<Route path={"/albums"} element={<Albums/>}/>
				<Route path={"/comments"} element={<Comments/>}>
					<Route path={":id"} element={<Post/>}/>
				</Route>
			</Routes>
		</div>
)
;
}

export default App;
