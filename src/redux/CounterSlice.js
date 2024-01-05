import { createSlice } from "@reduxjs/toolkit";




export const CounterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0

    },
//actions are created inside this reduxers key as object

    reducers:{
        //logics to update state

        //function to increment number
        increment:(state,action)=>{
            //if its a argument then it can only accessed by action and value in playload
            state.value +=action.payload
        },
        //function to decrement number 
        decrement:(state,action)=>{
            state.value -=action.payload
        },
        //function to reset number
        reset:(state)=>{
            state.value =0
        }
        
    }
})

//action is require by component inorder to update state

export const {increment , decrement, reset} = CounterSlice.actions

//reducer is require t store to change the state value 
export default CounterSlice.reducer
