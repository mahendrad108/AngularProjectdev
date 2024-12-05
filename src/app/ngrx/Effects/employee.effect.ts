import { Injectable } from "@angular/core";
import { EmployeeService } from "../../Services/employee.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetchEmployees } from "../actions/employee.action";
import { catchError, exhaustMap, map, of } from "rxjs";


@Injectable()
export class EmployeeEffect
{
    /**
     *
     */
    constructor
    (
        private actions$  : Actions,
        private employeeservice   : EmployeeService
            
    ) 
    {
    }
        loadEmployees$ = createEffect(()=>   this.actions$.pipe(
                ofType(fetchEmployees),
                exhaustMap(() => this.employeeservice.fetchAllEmployees()
                .pipe(
                    map(Employees =>
                    ({ type:'Employees loaded successfully',payload:Employees})
                    ),
                    catchError(() => of({ type : 'Failure in loading employees' }))
                    
                    ))
                ));
        
    
}