import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussionCardComponent } from './discussion/discussion-card/discussion-card.component';
import { DiscussionPostComponent } from './discussion/discussion-post/discussion-post.component';
import { DiscussionComponent } from './discussion/discussion.component';

const routes: Routes = [
  {path: 'discussion', component: DiscussionComponent, children:[
    {path: 'post', component: DiscussionPostComponent},
    {path: 'card', component: DiscussionCardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
