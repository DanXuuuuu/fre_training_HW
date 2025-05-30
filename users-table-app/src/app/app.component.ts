import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './components/users-table/users-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UsersTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'users-table';
}
