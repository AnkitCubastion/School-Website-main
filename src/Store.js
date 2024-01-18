import {configureStore} from "@reduxjs/toolkit";
import FilterReducer from "../src/Feature/Filter/FilterSlice";
import UserReducer from "../src/Feature/User/UserSlice";
import ResultReducer from "../src/Feature/Result/ResultSlice"

export const Store = configureStore({
    reducer:{
        filterState:FilterReducer,
        userState:UserReducer,
        resultState:ResultReducer,
    }
});