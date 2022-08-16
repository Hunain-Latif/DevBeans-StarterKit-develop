import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const responce = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return responce.data


})

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false,
                state.posts = action.payload;
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false

        }
    }
})

export default postSlice.reducer;