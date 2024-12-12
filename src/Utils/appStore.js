import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
//KIM (from user slice)

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
        }
    }
)
export default appStore