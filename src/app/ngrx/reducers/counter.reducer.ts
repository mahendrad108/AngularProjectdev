import { createReducer, on } from "@ngrx/store";
import { Decrement, Increment, Reset } from "../actions/counter.action";



const initialstate =0;
export const  counterreducer = createReducer
(
    initialstate,
    on(Increment,(state) =>state +1),
    on(Decrement,(state) => state-1),
    on(Reset,(state) => state =0)
)