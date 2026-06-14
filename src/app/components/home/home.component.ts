import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    { icon: '🏦', title: 'Banking Exams', desc: 'SBI PO, IBPS PO, RBI Grade B, Bank Clerk & more' },
    { icon: '📊', title: 'Mock Tests', desc: 'Full-length & sectional mocks with real exam pattern' },
    { icon: '📐', title: 'Formula Bank', desc: '100+ formulas for Quant, Reasoning & English' },
    { icon: '🎯', title: 'Difficulty Levels', desc: 'Easy → Medium → Hard progression to build mastery' },
    { icon: '📈', title: 'Analytics', desc: 'Detailed score analysis & section-wise performance' },
    { icon: '🏆', title: 'Leaderboard', desc: 'Compete with peers, track your rank' }
  ];

  stats = [
    { number: '500+', label: 'Practice Questions' },
    { number: '7', label: 'Mock Tests' },
    { number: '22+', label: 'Formula Sheets' },
    { number: '3', label: 'Subjects Covered' }
  ];

  exams = [
    { name: 'SBI PO', icon: '🏛️', color: '#3b82f6' },
    { name: 'IBPS PO', icon: '🏦', color: '#8b5cf6' },
    { name: 'RBI Grade B', icon: '📜', color: '#06b6d4' },
    { name: 'Bank Clerk', icon: '💼', color: '#10b981' },
    { name: 'SSC CGL', icon: '🎓', color: '#f59e0b' },
    { name: 'CAT MBA', icon: '📋', color: '#ef4444' }
  ];

  constructor(public auth: AuthService, private router: Router) {}

  getStarted() {
    if (this.auth.isLoggedIn) this.router.navigate(['/exams']);
    else this.router.navigate(['/register']);
  }
}
