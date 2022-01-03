import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiCall } from "../../WebServices";

const initialState = {
    lists: []
}

export const webSlice = createSlice({
    name: 'web',
    initialState,
    reducers: {
        getCallResponse: (state, action) => {
            state.lists = [];
            state.lists.push(action.payload)
        }
    }
})

export const { getCallResponse } = webSlice.actions

export default webSlice.reducer
