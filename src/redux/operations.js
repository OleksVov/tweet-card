import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://647c8650c0bae2880ad0cfd3.mockapi.io';


export const fetchTweets = createAsyncThunk('users/fetchTweets', async(_, thunkAPI) => {
    try {
        const response = await axios.get('/users');
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
} );

export const updateFollow = createAsyncThunk('users/updateFollow', async({id, followers}, thunkAPI) => {
    try {
        const response = await axios.get(`/users/${id}`, {
            followers: followers
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});