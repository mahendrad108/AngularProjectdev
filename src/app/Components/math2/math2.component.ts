import { Component, Inject } from '@angular/core';
import { MathService } from '../../Services/math.service';

@Component({
  selector: 'app-math2',
  standalone: true,
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
mathservice1:MathService |undefined;
  constructor()
{
this.mathservice1 = Inject(MathService);

}
ngOnInit()
{
  console.log( `subraction of two numbers = ${this.mathservice1?.sub(5,3)} `) ;

  console.log(`additon of two numbers = ${this.mathservice1?.add(10,20)}`);
}
}
