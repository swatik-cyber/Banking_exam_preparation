import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { AuthService } from '../../services/auth.service';
import { ExamAttempt, Exam, Question } from '../../models';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  attempt!: ExamAttempt;
  exam!: Exam;
  showReview = false;
  filterType: 'all' | 'correct' | 'wrong' | 'unattempted' = 'all';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private examService: ExamService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    const user = this.auth.currentUser;
    if (!user) { this.router.navigate(['/login']); return; }

    const attempts = this.examService.getUserAttempts(user.id);
    const attempt = attempts.find(a => a.id === id);
    if (!attempt) { this.router.navigate(['/dashboard']); return; }
    this.attempt = attempt;

    const exam = this.examService.getExam(attempt.examId);
    if (!exam) { this.router.navigate(['/dashboard']); return; }
    this.exam = exam;
  }

  get percentage(): number {
    return Math.round((this.attempt.score / this.attempt.totalMarks) * 100);
  }

  get grade(): string {
    const p = this.percentage;
    if (p >= 80) return 'Excellent';
    if (p >= 60) return 'Good';
    if (p >= 40) return 'Average';
    return 'Needs Improvement';
  }

  get gradeColor(): string {
    const p = this.percentage;
    if (p >= 80) return '#10b981';
    if (p >= 60) return '#3b82f6';
    if (p >= 40) return '#f59e0b';
    return '#ef4444';
  }

  get circumference(): number { return 2 * Math.PI * 60; }
  get dashOffset(): number { return this.circumference - (this.percentage / 100) * this.circumference; }

  get sectionKeys(): string[] { return Object.keys(this.attempt.sectionWise); }

  sectionLabel(s: string): string {
    return s === 'quant' ? 'Quantitative Aptitude' : s === 'reasoning' ? 'Reasoning' : 'English Language';
  }

  sectionPct(s: string): number {
    const sec = this.attempt.sectionWise[s];
    return Math.round((sec.correct / sec.total) * 100);
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }

  get filteredQuestions(): Question[] {
    if (this.filterType === 'all') return this.exam.questions;
    return this.exam.questions.filter(q => {
      const ans = this.attempt.answers[q.id];
      if (this.filterType === 'unattempted') return ans === undefined;
      if (this.filterType === 'correct') return ans === q.correct;
      if (this.filterType === 'wrong') return ans !== undefined && ans !== q.correct;
      return true;
    });
  }

  getUserAnswer(q: Question): number | undefined {
    return this.attempt.answers[q.id];
  }

  qStatus(q: Question): string {
    const ans = this.attempt.answers[q.id];
    if (ans === undefined) return 'unattempted';
    return ans === q.correct ? 'correct' : 'wrong';
  }
}
