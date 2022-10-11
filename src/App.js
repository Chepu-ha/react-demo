import {Comment, Comments, Header, Posts, Users} from "./components";

function App() {
	return (
		<div>
			<div>
				<Header/>
			</div>
			<div>
				{/*<Users/>*/}
				{/*<Posts/>*/}
				<Comments/>
			</div>
		</div>
	);
}

export default App;
