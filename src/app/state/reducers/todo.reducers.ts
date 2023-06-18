import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import {
  createTodoItemSuccessAction,
  createTodoSuccessAction,
  deleteTodoItemSuccessAction,
  deleteTodoSuccessAction,
  loadTodoSuccessAction,
} from '../actions/todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(loadTodoSuccessAction, (state, { allTodo }) => {
    return allTodo;
  }),
  on(createTodoSuccessAction, (state, { todo }) => {
    let newState = [...state];
    newState.unshift(todo);
    return newState;
  }),
  on(createTodoItemSuccessAction, (state, { todoItem, todoId }) => {
    return state.map((item) => {
      if (item && item.id === todoId) {
        return {
          ...item,
          content: [...item.content, todoItem],
        };
      }
      return item;
    });
  }),
  on(deleteTodoSuccessAction, (state, { todoId }) => {
    return state.filter((item) => item.id !== todoId);
  }),
  on(deleteTodoItemSuccessAction, (state, { todoId, todoItem }) => {
    const updatedTodos = state.map((item) => {
      if (item.id === todoId) {
        const updatedContent = item.content.filter(
          (it) => it.id !== todoItem.id
        );

        return {
          ...item,
          content: updatedContent,
        };
      }
      return item;
    });

    return updatedTodos;
  })
);
