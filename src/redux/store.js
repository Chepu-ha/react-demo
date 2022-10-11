import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {commentReducer, postReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
	userReducer,
	postReducer,
	commentReducer
});

const setUpStore = () => configureStore({
	reducer: rootReducer
});

export {setUpStore};