import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  allExams: Exam[] = [];
  filtered: Exam[] = [];
  activeFilter = 'all';
  activeType = 'all';

  constructor(private examService: ExamService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.allExams = this.examService.getExams();
    this.route.queryParams.subscribe(p => {
      if (p['filter']) { this.activeFilter = p['filter']; }
      this.applyFilter();
    });
  }

  applyFilter() {
    this.filtered = this.allExams.filter(e => {
      const diffMatch = this.activeFilter === 'all' || e.difficulty === this.activeFilter;
      const typeMatch = this.activeType === 'all' || e.type === this.activeType;
      return diffMatch && typeMatch;
    });
  }

  setFilter(f: string) { this.activeFilter = f; this.applyFilter(); }
  setType(t: string) { this.activeType = t; this.applyFilter(); }

  getDiffColor(d: string): string {
    return d === 'easy' ? '#10b981' : d === 'medium' ? '#f59e0b' : '#ef4444';
  }

  getTypeIcon(t: string): string {
    return t === 'mock' ? '📋' : t === 'sectional' ? '🎯' : '📜';
  }
}
