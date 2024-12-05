import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./Components/counter/counter.component";
import { TodolistComponent } from "./Components/todolist/todolist.component";
import { AddemployeeComponent } from "./Components/addemployee/addemployee.component";
import { EmployeelistComponent } from "./Components/employeelist/employeelist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, TodolistComponent, AddemployeeComponent, EmployeelistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_august_project_2024';

addresult : number=0;
cars: string[] = ['Tata','Maruti'];
  addNumbers(a:any,b:any)
  {
    debugger;
 this.addresult = +a + +b;
  }
  multiplication(a:any,b:any)
  {
    return a * b;
  }
  isNumberEven(n:number)
  {
    return n%2==0 ? 'even' : 'odd';
  }
  addnewcar(newcar:string)
  {
   this.cars.push(newcar); 
  }
}
