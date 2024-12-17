import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
//KIM (from 'userSlice')
import moviesReducer from './moviesSlice'

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies: moviesReducer,
        }
    }
)
export default appStore