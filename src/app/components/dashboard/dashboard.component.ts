import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ExamService } from '../../services/exam.service';
import { ExamAttempt, Exam } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  attempts: ExamAttempt[] = [];
  exams: Exam[] = [];
  totalCorrect = 0;
  totalWrong = 0;
  avgScore = 0;
  bestScore = 0;

  constructor(public auth: AuthService, private examService: ExamService) {}

  ngOnInit() {
    this.exams = this.examService.getExams().slice(0, 3);
    const user = this.auth.currentUser;
    if (user) {
      this.attempts = this.examService.getUserAttempts(user.id).slice(0, 5);
      if (this.attempts.length) {
        this.totalCorrect = this.attempts.reduce((s, a) => s + a.correctCount, 0);
        this.totalWrong = this.attempts.reduce((s, a) => s + a.wrongCount, 0);
        this.avgScore = Math.round(this.attempts.reduce((s, a) => s + a.score, 0) / this.attempts.length);
        this.bestScore = Math.max(...this.attempts.map(a => a.score));
      }
    }
  }

  getScorePct(attempt: ExamAttempt): number {
    return Math.round((attempt.score / attempt.totalMarks) * 100);
  }

  getScoreClass(pct: number): string {
    if (pct >= 70) return 'good';
    if (pct >= 50) return 'avg';
    return 'poor';
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }

  getDifficultyColor(d: string): string {
    return d === 'easy' ? '#10b981' : d === 'medium' ? '#f59e0b' : '#ef4444';
  }
}
