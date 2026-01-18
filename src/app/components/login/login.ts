import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  isLoading = signal(false);

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      console.log('User from auth service:', user);
      if (user) {
        console.log('Navigating to landing...');
        this.router.navigate(['/landing']);
      }
    });
  }

  async login() {
    this.isLoading.set(true);
    try {
      await this.authService.googleSignIn();
      // Successful sign-in will trigger the subscription in ngOnInit
    } catch (err) {
      console.error('Error during Google sign-in:', err);
      this.isLoading.set(false);
    }
  }
}
