import { configureStore } from "@reduxjs/toolkit";
import { tweetReducer } from "./slice";
import { filterReducer } from "./filter/filterSlice";


export const store = configureStore({
    reducer: {
        users: tweetReducer,
filters:filterReducer,
    }
})