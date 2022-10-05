import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

let initState = {users: [], comments: [], posts: []};

let store = createStore((state = initState, action) => {
	switch (action.type) {
		case "GET-USERS":
			return {...state, users: action.payload};
		case "GET-COMMENTS":
			return {...state, comments: action.payload};
		case "GET-POSTS":
			return {...state, posts: action.payload};
		default:
			return state;
	}
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
