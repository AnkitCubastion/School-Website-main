import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    studentMark:[],
}

const resultSlice = createSlice({
    name:"result",
    initialState:defaultState,
    reducers:{
        setStudent:(state,action)=>{
            console.log(action.payload);
        }
    }
})

export const {setStudent} = resultSlice.actions;
export default resultSlice.reducer;