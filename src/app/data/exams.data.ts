import { Exam } from '../models';
import { ALL_QUESTIONS } from './questions.data';

const quantQs = ALL_QUESTIONS.filter(q => q.section === 'quant');
const reasoningQs = ALL_QUESTIONS.filter(q => q.section === 'reasoning');
const englishQs = ALL_QUESTIONS.filter(q => q.section === 'english');

const easyQs = ALL_QUESTIONS.filter(q => q.difficulty === 'easy');
const mediumQs = ALL_QUESTIONS.filter(q => q.difficulty === 'medium');
const hardQs = ALL_QUESTIONS.filter(q => q.difficulty === 'hard');

export const EXAMS: Exam[] = [
  {
    id: 'mock-1',
    title: 'SBI PO Mock Test 1',
    type: 'mock',
    difficulty: 'medium',
    duration: 60,
    category: 'Banking',
    description: 'Full-length mock test for SBI PO Prelims. All three sections covered.',
    sections: ['Quantitative Aptitude', 'Reasoning', 'English Language'],
    totalMarks: ALL_QUESTIONS.slice(0, 30).length,
    questions: ALL_QUESTIONS.slice(0, 30)
  },
  {
    id: 'mock-2',
    title: 'IBPS PO Mock Test 1',
    type: 'mock',
    difficulty: 'hard',
    duration: 60,
    category: 'Banking',
    description: 'Full mock test for IBPS PO exam with tough questions.',
    sections: ['Quantitative Aptitude', 'Reasoning', 'English Language'],
    totalMarks: ALL_QUESTIONS.length,
    questions: ALL_QUESTIONS
  },
  {
    id: 'sect-quant',
    title: 'Quantitative Aptitude Sectional',
    type: 'sectional',
    difficulty: 'medium',
    duration: 30,
    category: 'Sectional',
    description: 'Focus only on Quantitative Aptitude. Covers Number System, %age, P&L, SI/CI, Time & Work.',
    sections: ['Quantitative Aptitude'],
    totalMarks: quantQs.length,
    questions: quantQs
  },
  {
    id: 'sect-reasoning',
    title: 'Verbal & Non-Verbal Reasoning Sectional',
    type: 'sectional',
    difficulty: 'medium',
    duration: 25,
    category: 'Sectional',
    description: 'Analogy, Series, Blood Relations, Coding-Decoding, Directions, Syllogism.',
    sections: ['Reasoning'],
    totalMarks: reasoningQs.length,
    questions: reasoningQs
  },
  {
    id: 'sect-english',
    title: 'English Language Sectional',
    type: 'sectional',
    difficulty: 'easy',
    duration: 20,
    category: 'Sectional',
    description: 'Synonyms, Antonyms, Fill in the Blanks, Error Spotting, Idioms.',
    sections: ['English Language'],
    totalMarks: englishQs.length,
    questions: englishQs
  },
  {
    id: 'easy-mock',
    title: 'Beginner\'s Practice Test',
    type: 'mock',
    difficulty: 'easy',
    duration: 20,
    category: 'Practice',
    description: 'Start here! Easy questions from all sections to build confidence.',
    sections: ['Quantitative Aptitude', 'Reasoning', 'English Language'],
    totalMarks: easyQs.length,
    questions: easyQs
  },
  {
    id: 'hard-mock',
    title: 'Advanced Challenge Test',
    type: 'mock',
    difficulty: 'hard',
    duration: 45,
    category: 'Advanced',
    description: 'Only difficult questions. For those who are ready for the real challenge!',
    sections: ['Quantitative Aptitude', 'Reasoning', 'English Language'],
    totalMarks: hardQs.length,
    questions: hardQs
  }
];
