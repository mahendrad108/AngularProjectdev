import { createReducer, on } from "@ngrx/store";
import { fetchEmployeeSuccess} from "../actions/employee.action";
 
export const initialState = [];
export const employeeReducer = createReducer(
            initialState,
           on(fetchEmployeeSuccess,(state,action:any) =>
        {
           return action.payload;
        })
    );