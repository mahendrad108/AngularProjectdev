import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../Models/employee';
import { Store } from '@ngrx/store';
import { fetchEmployees } from '../../ngrx/actions/employee.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
 a: number;
 employees$ : any;
  constructor(private store: Store<{ employees: Employee[] }>) {
    this.employees$ =  this.store.select(x => x.employees);
 this.a =10;
  }

  ngOnInit() {
    this.store.dispatch(fetchEmployees());
  }
}
