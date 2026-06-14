import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    const stored = localStorage.getItem('currentUser');
    if (stored) this.currentUserSubject.next(JSON.parse(stored));
  }

  get currentUser(): User | null { return this.currentUserSubject.value; }
  get isLoggedIn(): boolean { return !!this.currentUser; }

  register(name: string, email: string, password: string): { success: boolean; message: string } {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email already registered!' };
    }
    const user: User = {
      id: Date.now().toString(),
      name, email, password,
      joinedAt: new Date(),
      totalExams: 0,
      totalScore: 0
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return { success: true, message: 'Account created successfully!' };
  }

  login(email: string, password: string): { success: boolean; message: string } {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { success: false, message: 'Invalid email or password!' };
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return { success: true, message: 'Login successful!' };
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  updateUser(updates: Partial<User>) {
    if (!this.currentUser) return;
    const updated = { ...this.currentUser, ...updates };
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const idx = users.findIndex(u => u.id === updated.id);
    if (idx !== -1) { users[idx] = updated; localStorage.setItem('users', JSON.stringify(users)); }
    localStorage.setItem('currentUser', JSON.stringify(updated));
    this.currentUserSubject.next(updated);
  }

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }
}
