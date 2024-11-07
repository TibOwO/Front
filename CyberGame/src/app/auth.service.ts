import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly mockUser =
    { username: 'testuser', password: 'password123' };

  constructor() {}

  login(user: { username: string, password: string }): boolean {
    return user.username === this.mockUser.username &&
           user.password === this.mockUser.password;
  }

  logout() {
    // Déconnexion de l'utilisateur
  }

  isAuthenticated(): boolean {
    // Vérifie si l'utilisateur est connecté
    return true;
  }
  
}