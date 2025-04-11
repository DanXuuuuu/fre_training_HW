import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface TodoItem {
  id: number;
  title: string;
  isSelected: boolean;
  isEditing?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  todoList = signal<TodoItem[]>([]);
  selectAll = signal(false);
  newTodoTitle = '';

  addTodo() {
    if (!this.newTodoTitle.trim()) return;
    const newItem: TodoItem = {
      id: Date.now(),
      title: this.newTodoTitle,
      isSelected: false,
    };
    this.todoList.update(list => [...list, newItem]);
    this.newTodoTitle = '';
  }

  toggleSelectAll() {
    const shouldSelectAll = !this.selectAll();
    this.todoList.update(list =>
      list.map(t => ({ ...t, isSelected: shouldSelectAll }))
    );
    this.selectAll.set(shouldSelectAll);
  }

  editTodo(item: TodoItem, newTitle: string) {
    item.title = newTitle;
    this.todoList.update(list =>
      list.map(todo =>
        todo.id === item.id ? { ...todo, title: newTitle, isEditing: false } : todo
      )
    );
  }

  deleteSelected() {
    this.todoList.update(list => list.filter(t => !t.isSelected));
    this.selectAll.set(false);
  }

  toggleSelectItem(item: TodoItem) {
    this.todoList.update(list =>
      list.map(todo =>
        todo.id === item.id ? { ...todo, isSelected: !todo.isSelected } : todo
      )
    );
    this.updateSelectAllState();
  }

  private updateSelectAllState() {
    const allSelected = this.todoList().every(todo => todo.isSelected);
    this.selectAll.set(allSelected);
  }

  startEditing(item: TodoItem) {
    this.todoList.update(list =>
      list.map(todo =>
        todo.id === item.id ? { ...todo, isEditing: true } : todo
      )
    );
  }

  editTodoOnEnter(item: TodoItem) {
    this.todoList.update(list =>
      list.map(todo =>
        todo.id === item.id ? { ...todo, isEditing: false } : todo
      )
    );
  }

  editTodoOnBlur(item: TodoItem) {
      this.todoList.update(list =>
      list.map(todo =>
        todo.id === item.id ? { ...todo, isEditing: false } : todo
      )
    );
  }


}
