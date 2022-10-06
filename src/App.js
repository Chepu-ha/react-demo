import "./App.css";
import {Route, Routes} from "react-router-dom";

import {Comments, Posts, Users,} from "./components";
import {MainLayout} from "./layouts";

function App() {

	return (
		<div>
			<Routes>
				<Route path={"/"} element={<MainLayout/>}>
					<Route path={"users"} element={<Users/>}/>
					<Route path={"comments"} element={<Comments/>}/>
					<Route path={"posts"} element={<Posts/>}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
