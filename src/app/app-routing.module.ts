import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExamListComponent } from './components/exam/exam-list.component';
import { ExamTakeComponent } from './components/exam/exam-take.component';
import { ResultsComponent } from './components/results/results.component';
import { FormulasComponent } from './components/formulas/formulas.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'exams', component: ExamListComponent, canActivate: [AuthGuard] },
  { path: 'exam/:id', component: ExamTakeComponent, canActivate: [AuthGuard] },
  { path: 'results/:id', component: ResultsComponent, canActivate: [AuthGuard] },
  { path: 'formulas', component: FormulasComponent, canActivate: [AuthGuard] },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
