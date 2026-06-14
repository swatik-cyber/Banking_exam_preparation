import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ExamService } from '../../services/exam.service';
import { User } from '../../models';

interface LeaderEntry {
  user: User;
  totalScore: number;
  totalExams: number;
  avgScore: number;
  rank: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  entries: LeaderEntry[] = [];
  currentUserId: string | null = null;

  constructor(private auth: AuthService, private examService: ExamService) {}

  ngOnInit() {
    this.currentUserId = this.auth.currentUser?.id || null;
    const users = this.auth.getAllUsers();

    const computed = users.map(u => {
      const attempts = this.examService.getUserAttempts(u.id);
      const totalScore = attempts.reduce((s, a) => s + a.score, 0);
      const avgScore = attempts.length ? Math.round(totalScore / attempts.length) : 0;
      return { user: u, totalScore, totalExams: attempts.length, avgScore, rank: 0 };
    });

    computed.sort((a, b) => b.totalScore - a.totalScore);
    computed.forEach((c, i) => c.rank = i + 1);
    this.entries = computed;
  }

  get myEntry(): LeaderEntry | undefined {
    return this.entries.find(e => e.user.id === this.currentUserId);
  }

  medal(rank: number): string {
    return rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
  }
}
