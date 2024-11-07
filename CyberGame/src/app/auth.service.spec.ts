// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mockUser = new User('testuser', 'password123');

  constructor() {}

  login(user: User): boolean {
    // Vérifie si l'utilisateur existe (simulation)
    return user.username === this.mockUser.username && user.password === this.mockUser.password;
  }
}
