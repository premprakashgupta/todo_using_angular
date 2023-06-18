export interface TodoItem {
  id: string;
  content: string;
}
export interface Todo {
  id: string;
  header: string;
  content: Array<TodoItem>;
}
