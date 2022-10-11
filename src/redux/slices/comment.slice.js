import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../../services/comment.service";

const initialState = {
	comments: [],
	error: null
};

const getAll = createAsyncThunk(
	"commentSlice/getAll",
	async (_, {rejectedWithValue}) => {
		try {
			const {data} = await commentService.getAll();
			return data;
		} catch (e) {
			return rejectedWithValue(e.response.data);
		}
	}
);

const commentSlice = createSlice({
		name: "commentSlice",
		initialState,
		reducers: {},
		extraReducers: {
			[getAll.fulfilled]: (state, action)=>{
				state.comments = action.payload;
			}
		}
	}
);

const {reducer: commentReducer, actions: {}} = commentSlice;

const commentActions = {
	getAll
};

export {commentActions, commentReducer};