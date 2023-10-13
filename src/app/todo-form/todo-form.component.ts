import { Component, OnInit } from '@angular/core';

import { Todo } from "../todo";
import { Store } from "@ngrx/store";
import { requestAddAction } from "../todo.actions";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = new Todo();

  constructor(private store: Store<{ todos: Todo[] }>) {}

  ngOnInit(): void {}

  add(): void {
    this.store.dispatch(requestAddAction({ todo: this.todo }));
    this.todo = new Todo();
  }
}
