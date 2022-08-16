import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slices/PostSlice"

export default configureStore({
    reducer: {
        post: postReducer,
    }
})


















// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { postApi } from '../slices/Post'


// export const store = configureStore({
//     reducer: {
//         [postApi.reducerPath]: postApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(postApi.middleware)
// })

// setupListeners(store.dispatch)