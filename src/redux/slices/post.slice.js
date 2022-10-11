import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";

const initialState = {
	posts: [],
	error: null
};

const getAll = createAsyncThunk(
	"postSlice/getAll",
	async (_, {rejectedWithValue}) => {
		try {
			const {data} = await postService.getAll();
			return data;
		} catch (e) {
			return rejectedWithValue(e.response.data);
		}
	}
);

const postSlice = createSlice({
	name: "postSlice",
	initialState,
	reducers: {},
	extraReducers: {
		[getAll.fulfilled]: (state, action) => {
			state.posts = action.payload;
		}
	}
});

const {reducer: postReducer, actions: {}} = postSlice;

const postActions = {
	getAll
};

export {postActions, postReducer};