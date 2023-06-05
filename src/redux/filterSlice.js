import { createSlice } from "@reduxjs/toolkit";
import { statusFilter } from "./constants";


const initialState ={
    status: statusFilter.all,
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload;
        }
    }
});

export const {setStatusFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;