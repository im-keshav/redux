import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'count',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value= state.value+1
            
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        incrementValueByUserInput:(state,action)=>{
            state.value= state.value + action.payload
        }
    }
    
})

export const { increment,decrement,incrementValueByUserInput } = counterSlice.actions

export default counterSlice.reducer