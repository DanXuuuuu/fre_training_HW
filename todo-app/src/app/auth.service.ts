import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser: Observable<string | null>;

  constructor() {
    // Initialize with user from localStorage if exists
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<string | null>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): boolean {
    // Hardcoded password for demo purposes
    if (password === 'password123') {
      localStorage.setItem('currentUser', username);
      this.currentUserSubject.next(username);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): string | null {
    return this.currentUserSubject.value;
  }
} 