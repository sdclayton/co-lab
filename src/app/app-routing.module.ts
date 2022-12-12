import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobPostingComponent } from './job-posting/job-posting.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'job-posting', component: JobPostingComponent},
  {path: 'landing-page', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
