import { createAction, props } from "@ngrx/store";
import { Employee } from "../../Models/employee";

export const fetchEmployees = createAction('Fetch all the Employees from API');

export const fetchEmployeeSuccess = createAction('All the Employees from API Loaded successfully',
     props<{payload : Employee[]}>());

export const fetchEmployeesError = createAction('Error in loading Employees ');

export const deleteEmployee = createAction('Deleting Employee ',
           props<{id:number}>)();

export const addEmployee = createAction('Adding an Employee',
       props<{employee: Employee}>());