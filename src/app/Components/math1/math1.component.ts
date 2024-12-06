import { Component } from '@angular/core';
import { MathService } from '../../Services/math.service';

@Component({
  selector: 'app-math1',
  standalone: true,
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {

  constructor(private mathservice:MathService)
  {
      console.log('I am from Math1 Component');
  }
ngOnInit()
{
  console.log(`additon of two numbers = ${this.mathservice.add(10,20)}`);
  
}
}
