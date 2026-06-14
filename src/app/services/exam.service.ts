import { Injectable } from '@angular/core';
import { Exam, ExamAttempt, Question } from '../models';
import { EXAMS } from '../data/exams.data';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class ExamService {
  constructor(private auth: AuthService) {}

  getExams(): Exam[] { return EXAMS; }
  getExam(id: string): Exam | undefined { return EXAMS.find(e => e.id === id); }

  saveAttempt(attempt: ExamAttempt) {
    const attempts: ExamAttempt[] = JSON.parse(localStorage.getItem('attempts') || '[]');
    attempts.push(attempt);
    localStorage.setItem('attempts', JSON.stringify(attempts));

    if (this.auth.currentUser) {
      this.auth.updateUser({
        totalExams: this.auth.currentUser.totalExams + 1,
        totalScore: this.auth.currentUser.totalScore + attempt.score
      });
    }
  }

  getUserAttempts(userId: string): ExamAttempt[] {
    const attempts: ExamAttempt[] = JSON.parse(localStorage.getItem('attempts') || '[]');
    return attempts.filter(a => a.userId === userId).sort((a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    );
  }

  calculateResult(exam: Exam, answers: { [id: string]: number }, timeTaken: number): ExamAttempt {
    let correct = 0, wrong = 0, unattempted = 0;
    const sectionWise: { [s: string]: { correct: number; wrong: number; total: number } } = {};

    exam.questions.forEach(q => {
      const sec = q.section;
      if (!sectionWise[sec]) sectionWise[sec] = { correct: 0, wrong: 0, total: 0 };
      sectionWise[sec].total++;

      if (answers[q.id] === undefined || answers[q.id] === -1) {
        unattempted++;
      } else if (answers[q.id] === q.correct) {
        correct++;
        sectionWise[sec].correct++;
      } else {
        wrong++;
        sectionWise[sec].wrong++;
      }
    });

    const score = correct * 1 - wrong * 0.25;

    return {
      id: Date.now().toString(),
      userId: this.auth.currentUser?.id || 'guest',
      examId: exam.id,
      examTitle: exam.title,
      answers,
      score: Math.max(0, score),
      totalMarks: exam.totalMarks,
      correctCount: correct,
      wrongCount: wrong,
      unattempted,
      timeTaken,
      completedAt: new Date(),
      sectionWise
    };
  }
}
