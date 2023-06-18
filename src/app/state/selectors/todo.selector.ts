import { createFeatureSelector } from '@ngrx/store';

import { Todo } from '../../models/todo.model';

export const selectTodo = createFeatureSelector<Todo[]>('todos');
