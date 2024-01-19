import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    teachName:"",
    subName:"",
    sortName:"",
}

const filterSlice = createSlice({
    name:'filter',
    initialState:defaultState,
    reducers:{
        setTeachName:(state,action)=>{
            const {movie} = action.payload;
            state.teachName = movie;
        },
        setSubName:(state,action)=>{ 
            const {genre} = action.payload;
            state.subName = genre;
        },
        setSortName:(state,action)=>{
            const {sort} = action.payload;
            state.sortName = sort;
        }
    }
})

export const {setTeachName,setSubName,setSortName} = filterSlice.actions;
export default filterSlice.reducer;