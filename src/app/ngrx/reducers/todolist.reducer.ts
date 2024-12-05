import { createReducer, on } from "@ngrx/store";
import { todoaddaction, tododeleteaction, todoListaction } from "../actions/todolist.action";


let initialize =
[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }]
export const todolistreducer = createReducer(
    initialize,
    on(todoaddaction,(state:any,newtodo) =>
        {
           return [...state,newtodo]
        }),
        on(tododeleteaction,(state:any,todoDelete:any) =>
        {
          return state.filter((todo:any) =>todo.userId != todoDelete.userId)
        })
    ) 