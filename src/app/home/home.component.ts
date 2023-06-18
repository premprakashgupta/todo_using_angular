import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { selectTodo } from '../state/selectors/todo.selector';
import {
  createTodoAction,
  createTodoItemAction,
  deleteTodoAction,
  deleteTodoItemAction,
  loadTodosAction,
} from '../state/actions/todo.actions';
import { Todo, TodoItem } from '../models/todo.model';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  todo$ = this.store.pipe(select(selectTodo));

  // local operation for todo
  title = 'my-angular-app';
  taskInputs: string[] = [];
  todoName: string = '';

  ngOnInit(): void {
    this.store.dispatch(loadTodosAction());
  }
  handleCreateTodo() {
    const uid = uuidv4();
    this.store.dispatch(
      createTodoAction({
        todo: { id: uid, header: this.todoName, content: [] },
      })
    );
  }
  handleCreateTodoItem(todoId: string, i: number) {
    console.log(todoId);
    const uid = uuidv4();
    this.store.dispatch(
      createTodoItemAction({
        todoItem: { id: uid, content: this.taskInputs[i] },
        todoId: todoId,
      })
    );
  }
  handleDeleteTodo(todoId: string) {
    this.store.dispatch(
      deleteTodoAction({
        todoId: todoId,
      })
    );
  }
  handleDeleteTodoItem(todoId: string, todoItem: TodoItem) {
    this.store.dispatch(
      deleteTodoItemAction({
        todoId: todoId,
        todoItem: todoItem,
      })
    );
  }
}
