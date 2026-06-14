export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  joinedAt: Date;
  totalExams: number;
  totalScore: number;
}

export interface Question {
  id: string;
  section: 'quant' | 'reasoning' | 'english';
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  formula?: string;
}

export interface Exam {
  id: string;
  title: string;
  type: 'mock' | 'sectional' | 'previous';
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number;
  questions: Question[];
  sections: string[];
  totalMarks: number;
  category: string;
  description: string;
}

export interface ExamAttempt {
  id: string;
  userId: string;
  examId: string;
  examTitle: string;
  answers: { [questionId: string]: number };
  score: number;
  totalMarks: number;
  correctCount: number;
  wrongCount: number;
  unattempted: number;
  timeTaken: number;
  completedAt: Date;
  sectionWise: { [section: string]: { correct: number; wrong: number; total: number } };
}

export interface Formula {
  id: string;
  section: 'quant' | 'reasoning' | 'english';
  topic: string;
  title: string;
  formula: string;
  description: string;
  examples: string[];
}
