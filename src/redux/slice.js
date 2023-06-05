import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, updateFollow, unUpdateFollow } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};


export const tweetSlice = createSlice({
    name: 'users',
    initialState,
   reducers: {
clearOnMount(state) {
    state.items.length = 0;
}
   },
    extraReducers: {
        [fetchTweets.pending](state) {
            state.isLoading = true;
        },
        [fetchTweets.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = [...state.items, ...action.payload];
        },
        [fetchTweets.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateFollow.pending](state) {
            state.isLoading = true
        },
        [updateFollow.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                user => user.id === action.payload.id
              );
              state.items.splice(index, 1, action.payload);
        },
        [updateFollow.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [unUpdateFollow.pending](state) {
            state.isLoading = true
        },
        [unUpdateFollow.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                user => user.id === action.payload.id
              );
              state.items.splice(index, 1, action.payload);
        },
        [unUpdateFollow.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export const tweetReducer = tweetSlice.reducer;

export const {clearOnMount} = tweetSlice.actions;
