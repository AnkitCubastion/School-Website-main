import {createSlice} from "@reduxjs/toolkit";

const getMarksfromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("result"))||[];
}

const defaultState = {
    studentMark:getMarksfromLocalStorage(),
    classNum:0,
    searchRes:"",
    sortRes:"",
}

const resultSlice = createSlice({
    name:"result",
    initialState:defaultState,
    reducers:{
        setStudent:(state,action)=>{
            const {data} = action.payload; 
            state.studentMark = data;
            localStorage.setItem("result",JSON.stringify(data));
        },
        setClassNum:(state,action)=>{
            const {grade} = action.payload;
            state.classNum = parseInt(grade);
        },
        setSearchRes:(state,action)=>{
            const {search} = action.payload;
            state.searchRes = search;
        },
        setSortRes:(state,action)=>{
            const {sort} = action.payload;
            state.sortRes = sort;
        }

    }
})

export const {setStudent,setClassNum,setSearchRes,setSortRes} = resultSlice.actions;
export default resultSlice.reducer;