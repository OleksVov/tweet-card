import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://647c8650c0bae2880ad0cfd3.mockapi.io';


export const fetchTweets = createAsyncThunk('users/fetchTweets', async(page, thunkAPI) => {
    try {
        const response = await axios.get(`/users/?completed=false&page=${page}&limit=3`);
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
} );

export const updateFollow = createAsyncThunk('users/updateFollow', async({id, follow, followers}, thunkAPI) => {
    try {
        const response = await axios.put(`/users/${id}`, {
            followers: followers+1,
            follow: follow,
        });
    
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const unUpdateFollow = createAsyncThunk('users/updateFollow', async({id, follow, followers}, thunkAPI) => {
    try {
        const response = await axios.put(`/users/${id}`, {
            followers: followers-1,
            follow: follow,
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});