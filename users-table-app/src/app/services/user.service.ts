import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import usersData from '../data/users.json';

type SortDirection = 'asc' | 'desc';
type SortField = keyof User;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = signal<User[]>(usersData);
  private currentPage = signal(1);
  private itemsPerPage = signal(10);
  private sortField = signal<SortField>('id');
  private sortDirection = signal<SortDirection>('asc');

  getUsers() {
    return this.users;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getItemsPerPage() {
    return this.itemsPerPage;
  }

  getSortField() {
    return this.sortField;
  }

  getSortDirection() {
    return this.sortDirection;
  }

  setCurrentPage(page: number) {
    this.currentPage.set(page);
  }

  setItemsPerPage(items: number) {
    this.itemsPerPage.set(items);
    this.currentPage.set(1); // Reset to first page when changing items per page
  }

  setSort(field: SortField) {
    if (this.sortField() === field) {
      // Toggle direction if same field
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new field and default to ascending
      this.sortField.set(field);
      this.sortDirection.set('asc');
    }
  }

  getPaginatedUsers() {
    const sortedUsers = [...this.users()].sort((a, b) => {
      const field = this.sortField();
      const direction = this.sortDirection();
      
      if (typeof a[field] === 'string') {
        return direction === 'asc' 
          ? (a[field] as string).localeCompare(b[field] as string)
          : (b[field] as string).localeCompare(a[field] as string);
      }
      
      return direction === 'asc'
        ? (a[field] as number) - (b[field] as number)
        : (b[field] as number) - (a[field] as number);
    });

    const startIndex = (this.currentPage() - 1) * this.itemsPerPage();
    const endIndex = startIndex + this.itemsPerPage();
    return sortedUsers.slice(startIndex, endIndex);
  }

  getTotalPages() {
    return Math.ceil(this.users().length / this.itemsPerPage());
  }
} 