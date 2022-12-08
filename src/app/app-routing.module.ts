import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCalendarComponent } from './dashboard/dashboard-calendar/dashboard-calendar.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'job-posting', component: JobPostingComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'calendar', component: DashboardCalendarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
