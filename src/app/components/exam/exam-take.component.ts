import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { Exam, Question } from '../../models';

@Component({
  selector: 'app-exam-take',
  templateUrl: './exam-take.component.html',
  styleUrls: ['./exam-take.component.css']
})
export class ExamTakeComponent implements OnInit, OnDestroy {
  exam!: Exam;
  currentIdx = 0;
  answers: { [id: string]: number } = {};
  timeLeft = 0;
  started = false;
  submitted = false;
  timer: any;
  flagged: Set<string> = new Set();
  showPanel = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private examService: ExamService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    const exam = this.examService.getExam(id);
    if (!exam) { this.router.navigate(['/exams']); return; }
    this.exam = exam;
    this.timeLeft = exam.duration * 60;
  }

  get current(): Question { return this.exam.questions[this.currentIdx]; }
  get progress(): number { return Math.round(((this.currentIdx + 1) / this.exam.questions.length) * 100); }
  get answeredCount(): number { return Object.keys(this.answers).filter(k => this.answers[k] !== -1).length; }
  get minutes(): number { return Math.floor(this.timeLeft / 60); }
  get seconds(): number { return this.timeLeft % 60; }
  get timerColor(): string { return this.timeLeft < 300 ? '#ef4444' : this.timeLeft < 600 ? '#f59e0b' : '#10b981'; }

  startExam() {
    this.started = true;
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) this.submit();
    }, 1000);
  }

  select(optIdx: number) {
    this.answers[this.current.id] = optIdx;
  }

  getStatus(q: Question): string {
    if (this.flagged.has(q.id)) return 'flagged';
    if (this.answers[q.id] !== undefined) return 'answered';
    return 'unanswered';
  }

  toggleFlag() {
    if (this.flagged.has(this.current.id)) this.flagged.delete(this.current.id);
    else this.flagged.add(this.current.id);
  }

  go(idx: number) {
    this.currentIdx = idx;
    this.showPanel = false;
  }

  prev() { if (this.currentIdx > 0) this.currentIdx--; }
  next() { if (this.currentIdx < this.exam.questions.length - 1) this.currentIdx++; }

  clearAnswer() { delete this.answers[this.current.id]; }

  submit() {
    if (this.timer) clearInterval(this.timer);
    const timeTaken = this.exam.duration * 60 - this.timeLeft;
    const attempt = this.examService.calculateResult(this.exam, this.answers, timeTaken);
    this.examService.saveAttempt(attempt);
    this.router.navigate(['/results', attempt.id]);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}
