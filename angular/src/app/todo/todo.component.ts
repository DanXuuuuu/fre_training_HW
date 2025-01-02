import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo.interfaces';

@Component({
  selector: 'app-todo',
  standalone: false,

  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  // interplation
  public name: string = 'Angular';
  isdisabled = true;
  // todos = new TodoService().todos;
  todos!: Todo[];
  title = '';

  constructor(private todoService: TodoService) {
//     this.todos = this.todoService.todos;
//   this.todoService.todo$.subscribe(todos=>
//     {this.todos = todos;
// })
// fetch(url).then(data => data.json()).then(data => this.data = data )
this.todoService.gettodo().subscribe(todos => {
  this.todos = todos;
});

  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((ele) => ele.id !== id);
  }
  handleClick(id: number) {
    // this.isdisabled = !this.isdisabled
    console.log('todo component: ', id);
  }
}
