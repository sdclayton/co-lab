import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobPostingComponent } from './job-posting/job-posting.component';

const routes: Routes = [
  {path: '', redirectTo: '/job-posting', pathMatch: 'full'},
  {path: 'job-posting', component: JobPostingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
