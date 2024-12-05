import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
/**
 * inject store service
 */
todo$:Observable<any> | undefined;
constructor(private store:Store<any>) 
{
  this.todo$ =this.store.select('todos');
}

}
