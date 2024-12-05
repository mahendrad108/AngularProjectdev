import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterreducer } from './ngrx/reducers/counter.reducer'
import { todolistreducer } from './ngrx/reducers/todolist.reducer';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffect } from './ngrx/Effects/employee.effect';
import { employeeReducer } from './ngrx/reducers/employee.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ count: counterreducer, todos: todolistreducer,employees:employeeReducer }),
    provideEffects(EmployeeEffect)
]
};
