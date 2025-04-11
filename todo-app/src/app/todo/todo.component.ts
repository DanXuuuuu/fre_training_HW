import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TodoService, Todo } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoText: string = '';

  constructor(
    private authService: AuthService,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todoService.addTodo(this.newTodoText.trim());
      this.newTodoText = '';
    }
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
} 