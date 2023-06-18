import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap, switchMap } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import {
  createTodoAction,
  createTodoItemAction,
  createTodoItemSuccessAction,
  createTodoSuccessAction,
  deleteTodoAction,
  deleteTodoItemAction,
  deleteTodoItemSuccessAction,
  deleteTodoSuccessAction,
  loadTodoSuccessAction,
  loadTodosAction,
} from '../actions/todo.actions';
// import { addTodo, addTodoSuccess } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  getAllTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodosAction),
      switchMap(() =>
        this.todoservice
          .getTodoFromFirebase()
          .pipe(map((data) => loadTodoSuccessAction({ allTodo: data })))
      )
    )
  );
  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodoAction),
      switchMap((actions) =>
        this.todoservice
          .createTodoToFirebase(actions.todo)
          .pipe(map((data) => createTodoSuccessAction({ todo: data })))
      )
    )
  );
  createTodoItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodoItemAction),
      switchMap((actions) =>
        this.todoservice
          .createTodoItemToFirebase(actions.todoItem, actions.todoId)
          .pipe(
            map((data) =>
              createTodoItemSuccessAction({
                todoItem: data,
                todoId: actions.todoId,
              })
            )
          )
      )
    )
  );

  deleteTodoItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodoItemAction),
      switchMap((actions) =>
        this.todoservice
          .deleteTodoItemFromFirebase(actions.todoId, actions.todoItem)
          .pipe(map((data) => deleteTodoItemSuccessAction(data)))
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodoAction),
      switchMap((actions) =>
        this.todoservice.deleteTodoFromFirebase(actions.todoId).pipe(
          map((data) =>
            deleteTodoSuccessAction({
              todoId: actions.todoId,
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoservice: TodoService) {}
}
