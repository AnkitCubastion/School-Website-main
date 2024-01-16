import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || [];
  };


const defaultState = {
    user:getUserFromLocalStorage(),
}

const UserSlice = createSlice({
    name:'user',
    initialState:defaultState,
    reducers:{
        userLogin:(state,action)=>{
            console.log(action.payload);
            state.user = action.payload.userData;
            console.log(state.user);
            localStorage.setItem('user', JSON.stringify(action.payload.userData));
        },
        userLogout:(state,action)=>{
            state.user = [];
            localStorage.removeItem('user');
            toast.success('Logged out successfully');
        }
    }
})

export const {userLogin,userLogout} = UserSlice.actions;
export default UserSlice.reducer;