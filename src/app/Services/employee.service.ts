import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Model/employee';

import { response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService 
{
 api_url:string ="http://localhost:3000/employees";
  constructor(private httpclient:HttpClient) 
  {
  }
getAllEmployees():Observable<Employee[]>
{
return this.httpclient.get<Employee[]>(this.api_url).pipe
(
  map((response:Employee[]) =>
  {
    return response.map((emp:Employee) =>
    {
     return new Employee(emp.eid,emp.firstname,emp.lastname,emp.sal,emp.gender,emp.id)
    });
  })
)
}
}



