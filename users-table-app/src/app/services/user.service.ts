import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import usersData from '../data/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = signal<User[]>(usersData);
  private currentPage = signal(1);
  private itemsPerPage = signal(10);

  getUsers() {
    return this.users;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getItemsPerPage() {
    return this.itemsPerPage;
  }

  setCurrentPage(page: number) {
    this.currentPage.set(page);
  }

  setItemsPerPage(items: number) {
    this.itemsPerPage.set(items);
    this.currentPage.set(1); // Reset to first page when changing items per page
  }

  getPaginatedUsers() {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage();
    const endIndex = startIndex + this.itemsPerPage();
    return this.users().slice(startIndex, endIndex);
  }

  getTotalPages() {
    return Math.ceil(this.users().length / this.itemsPerPage());
  }
} 