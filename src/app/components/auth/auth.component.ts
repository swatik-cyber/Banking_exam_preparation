import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogin = true;
  loading = false;
  message = '';
  messageType: 'success' | 'error' = 'error';

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPass = false;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(segments => {
      this.isLogin = segments[0]?.path === 'login';
    });
    if (this.auth.isLoggedIn) this.router.navigate(['/dashboard']);
  }

  submit() {
    this.message = '';
    if (!this.email || !this.password) {
      this.message = 'Please fill in all fields.';
      this.messageType = 'error';
      return;
    }

    if (!this.isLogin) {
      if (!this.name.trim()) { this.message = 'Name is required.'; this.messageType = 'error'; return; }
      if (this.password !== this.confirmPassword) { this.message = 'Passwords do not match!'; this.messageType = 'error'; return; }
      if (this.password.length < 6) { this.message = 'Password must be at least 6 characters.'; this.messageType = 'error'; return; }
    }

    this.loading = true;
    setTimeout(() => {
      const result = this.isLogin
        ? this.auth.login(this.email, this.password)
        : this.auth.register(this.name, this.email, this.password);

      this.loading = false;
      if (result.success) {
        this.message = result.message;
        this.messageType = 'success';
        setTimeout(() => this.router.navigate(['/dashboard']), 800);
      } else {
        this.message = result.message;
        this.messageType = 'error';
      }
    }, 600);
  }

  toggle() {
    this.isLogin = !this.isLogin;
    this.message = '';
    this.router.navigate([this.isLogin ? '/login' : '/register']);
  }
}
