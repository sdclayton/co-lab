import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobPostingService } from './job-posting/job-posting.service';
import { JobPostingComponent } from './job-posting/job-posting.component';

import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionCardComponent } from './discussion/discussion-card/discussion-card.component';
import { DiscussionPostComponent } from './discussion/discussion-post/discussion-post.component';
import { PostDetailComponent } from './discussion/post-detail/post-detail.component';
import { DiscussionShowComponent } from './discussion/discussion-show/discussion-show.component';
import { ReplyFormComponent } from './discussion/discussion-show/reply-form/reply-form.component';
import { ReplyCardComponent } from './discussion/discussion-show/reply-card/reply-card.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    JobPostingComponent,
    DiscussionComponent,
    DiscussionCardComponent,
    DiscussionPostComponent,
    PostDetailComponent,
    DiscussionShowComponent,
    ReplyFormComponent,
    ReplyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [JobPostingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
