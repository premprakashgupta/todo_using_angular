import { createAction, props } from '@ngrx/store';
import { Todo, TodoItem } from '../../models/todo.model';

export const loadTodosAction = createAction('[Todo] Load Todos');
export const loadTodoSuccessAction = createAction(
  '[Todo] Load Todos Success',
  props<{ allTodo: Todo[] }>()
);

export const createTodoAction = createAction(
  '[Todo] create Todo',
  props<{ todo: Todo }>()
);
export const createTodoSuccessAction = createAction(
  '[Todo] create Todos Success',
  props<{ todo: Todo }>()
);
export const createTodoItemAction = createAction(
  '[Todo] create Todo Item',
  props<{ todoItem: TodoItem; todoId: string }>()
);
export const createTodoItemSuccessAction = createAction(
  '[Todo] create Todo Item Success',
  props<{ todoItem: TodoItem; todoId: string }>()
);
export const deleteTodoAction = createAction(
  '[Todo] delete Todo',
  props<{ todoId: string }>()
);
export const deleteTodoSuccessAction = createAction(
  '[Todo] delete Todo Success',
  props<{ todoId: string }>()
);
export const deleteTodoItemAction = createAction(
  '[Todo] delete Todo Item',
  props<{ todoId: string; todoItem: TodoItem }>()
);
export const deleteTodoItemSuccessAction = createAction(
  '[Todo] delete Todo Item Success',
  props<{ todoId: string; todoItem: TodoItem }>()
);
