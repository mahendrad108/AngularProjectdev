import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient : HttpClient) 
  {
  }
  fetchAllEmployees()
  {
    return this.httpclient.get("http://localhost:3000/employees")
  }
}
