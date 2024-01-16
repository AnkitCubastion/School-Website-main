import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    movieName:"",
    genreName:"",
    sortName:"",
}

const filterSlice = createSlice({
    name:'filter',
    initialState:defaultState,
    reducers:{
        setMovieName:(state,action)=>{
            const {movie} = action.payload;
            state.movieName = movie;
        },
        setGenreName:(state,action)=>{
            const {genre} = action.payload;
            state.genreName = genre;
        },
        setSortName:(state,action)=>{
            const {sort} = action.payload;
            state.sortName = sort;
        }
    }
})

export const {setMovieName,setGenreName,setSortName} = filterSlice.actions;
export default filterSlice.reducer;