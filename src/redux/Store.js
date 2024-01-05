import { configureStore } from "@reduxjs/toolkit"; //create store
import CounterSlice from "./CounterSlice";

 


 export const store = configureStore({
    //reducer can only update of state in store
    //reducer key  is predefine ( object which can hold more than one reducer)
    reducer:{
        //reducer is coming from counterSlice since we are export defult
        counter:CounterSlice

    }
 })