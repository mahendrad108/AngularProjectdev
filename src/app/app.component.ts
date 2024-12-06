import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Math1Component } from "./Components/math1/math1.component";
import { Math2Component } from "./Components/math2/math2.component";
import { EmployeeComponent } from "./Components/employee/employee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Math1Component, Math2Component, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project28112024';
}
