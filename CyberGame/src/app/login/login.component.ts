import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User('', '');
  loginError: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    const success = this.authService.login(this.user);
    this.loginError = !success;
    if (success) {
      alert('Connexion réussie !');
    }
  }
}
