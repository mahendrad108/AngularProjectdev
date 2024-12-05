import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, Observable } from 'rxjs';
import { Decrement, Increment, Reset } from '../../ngrx/actions/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 /**
  * Injecting the store service in constructor
  */

 Count$ : Observable<number> | undefined 
 constructor(private store: Store<any> )
{
this.Count$  = this.store.select('count');   // this is selector. we are selecting count from store

}
clickhandler(actionstring: string)
{
 if(actionstring=='increment')
  {
    this.store.dispatch(Increment()); 
  }
  if(actionstring == 'reset')
  {
    this.store.dispatch(Reset());
  }
  if(actionstring == 'decrement')
  {
    this.store.dispatch(Decrement());
  }
}


}
