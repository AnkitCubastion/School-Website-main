import {configureStore} from "@reduxjs/toolkit";
import FilterReducer from "../src/Feature/Filter/FilterSlice";
import UserReducer from "../src/Feature/User/UserSlice";

export const Store = configureStore({
    reducer:{
        filterState:FilterReducer,
        userState:UserReducer,
    }
});