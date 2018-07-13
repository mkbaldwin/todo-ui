import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  newItem: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
    this.resetNewTodo();
  }

  resetNewTodo(): void {
    this.newItem = new Todo(0, "", false);
  }

  getTodos(): void {
    this.todoService.getTodoList().subscribe(todos => this.todos = todos);
  }

  addTodo() {
    console.log("sdfdasf");
    this.todoService.addTodo(new Todo(this.newItem.id, this.newItem.title, this.newItem.complete));
    this.resetNewTodo();
  }
}
