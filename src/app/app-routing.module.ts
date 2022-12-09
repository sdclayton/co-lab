import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussionCardComponent } from './discussion/discussion-card/discussion-card.component';
import { DiscussionShowComponent } from './discussion/discussion-show/discussion-show.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { PostDetailComponent } from './discussion/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: 'discussion',
    component: DiscussionComponent
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
