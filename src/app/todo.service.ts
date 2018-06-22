import {Injectable} from '@angular/core';
import {Todo} from "./model/Todo";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    new Todo(1, "Learn Angular", true),
    new Todo(1, "Profit??", false)
  ];

  constructor() {
  }

  getTodoList(): Observable<Todo[]> {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
