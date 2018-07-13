import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  clickItem(todo: Todo) {
    //TODO: Fix this to call the service
    todo.complete = !todo.complete;
  }
}
