import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/CounterSlice'



export const store = configureStore({
    reducer:{
        count:counterReducer
    }
})
