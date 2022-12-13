import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussionCardComponent } from './discussion/discussion-card/discussion-card.component';
import { DiscussionShowComponent } from './discussion/discussion-show/discussion-show.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { PostDetailComponent } from './discussion/post-detail/post-detail.component';




import { LandingPageComponent } from './landing-page/landing-page.component';


import { JobPostingComponent } from './job-posting/job-posting.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'job-posting', component: JobPostingComponent},


  {path: 'landing-page', component: LandingPageComponent},

  {
    path: 'discussion', component: DiscussionComponent
  },
  { path: 'discussion/new', component: PostDetailComponent },
  {
    path: 'discussion/:id',
    component: DiscussionShowComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
