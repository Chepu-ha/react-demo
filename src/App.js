import "./App.css";

import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	Outlet
} from "react-router-dom";

import {Albums, Comments, Post, Todos} from "./components";

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
				<Route path={"/todos"} element={<Todos/>}/>
				<Route path={"/albums"} element={<Albums/>}/>
				<Route path={"/comments"} element={<Comments/>}/>
				<Route path={"/posts/:id"} element={<Post/>}/>
			</Routes>
		</div>
)
;
}

export default App;
