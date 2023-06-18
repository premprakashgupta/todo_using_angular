import { Injectable } from '@angular/core';
import { Todo, TodoItem } from '../models/todo.model';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
  doc,
  setDoc,
  deleteDoc,
  arrayRemove,
} from 'firebase/firestore';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodoFromFirebase(): Observable<Todo[]> {
    const firestore = getFirestore();
    const todosCollection = collection(firestore, 'todos');
    return from(getDocs(todosCollection)).pipe(
      map((querySnapshot) => {
        const todos: Todo[] = [];
        querySnapshot.forEach((doc) => {
          todos.push(doc.data() as Todo);
        });
        return todos;
      })
    );
  }
  createTodoToFirebase(todo: Todo): Observable<Todo> {
    const firestore = getFirestore();
    const docRef = doc(firestore, 'todos', todo.id);
    return from(setDoc(docRef, todo)).pipe(map(() => todo));
  }
  createTodoItemToFirebase(
    todoItem: TodoItem,
    todoId: string
  ): Observable<TodoItem> {
    const firestore = getFirestore();

    const collectionRef = doc(firestore, 'todos', todoId);
    return from(
      updateDoc(collectionRef, {
        content: arrayUnion(todoItem),
      })
    ).pipe(map(() => todoItem));
  }
  deleteTodoFromFirebase(todoId: string): Observable<string> {
    const firestore = getFirestore();

    const collectionRef = doc(firestore, 'todos', todoId);
    return from(deleteDoc(collectionRef)).pipe(map(() => todoId));
  }
  deleteTodoItemFromFirebase(
    todoId: string,
    todoItem: TodoItem
  ): Observable<any> {
    const firestore = getFirestore();
    const collectionRef = doc(firestore, 'todos', todoId);

    return from(
      updateDoc(collectionRef, {
        content: arrayRemove(todoItem),
      })
    ).pipe(map(() => ({ todoId, todoItem })));
  }
}
