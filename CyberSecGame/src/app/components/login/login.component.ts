import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.models';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class LoginComponent {
  user: User = new User('', '');
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user).subscribe({
      next: (response) => {
        // Stockez le token ou autres données dans le localStorage ou autre
        localStorage.setItem('auth_token', response.token);
        this.router.navigate(['/dashboard']); // Redirigez vers un tableau de bord ou une autre page
      },
      error: (error) => {
        this.errorMessage = 'Erreur de connexion, veuillez vérifier vos informations.';
      }
    });
  }
}
