import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    isLogin: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.username = action.payload;
            state.isLogin = true;
        },
        logOutUser:(state)=>{
            state.username='';
            state.isLogin=false;
        },
        warner:()=>{
            alert('its warning !')
        }
    }
})

export const { loginUser ,logOutUser,warner} = loginSlice.actions

export default loginSlice.reducer