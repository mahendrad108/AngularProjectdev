import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../../Model/employee';
import { response } from 'express';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
constructor(private employeeservice:EmployeeService)
{

}
employees :  Employee[] =[]; 

ngOnInit()
{
  this.employeeservice.getAllEmployees().subscribe(response=>
  {
    this.employees = response;
    console.log(this.employees);  
  }
  )
}

}
