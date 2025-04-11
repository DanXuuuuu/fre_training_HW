import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);

  constructor() {
    // Load todos from localStorage if they exist
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
      this.todosSubject.next(this.todos);
    }
  }

  getTodos() {
    return this.todosSubject.asObservable();
  }

  addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    this.todos.push(newTodo);
    this.updateTodos();
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.updateTodos();
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateTodos();
  }

  private updateTodos() {
    this.todosSubject.next(this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
} 