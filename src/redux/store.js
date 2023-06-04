import { configureStore } from "@reduxjs/toolkit";
import { tweetReducer } from "./slice";


export const store = configureStore({
    reducer: {
        users: tweetReducer,
    }
})