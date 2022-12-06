import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { findIndex } from 'rxjs';
import { Discussion } from '../discussion.model';
import { DiscussionService } from '../discussion.service';

@Component({
  selector: 'app-discussion-post',
  templateUrl: './discussion-post.component.html',
  styleUrls: ['./discussion-post.component.css'],
})
export class DiscussionPostComponent implements OnInit {
  listPost: any;

  post: any = {
    title: '',
    postText: '',
  };

  constructor(
    public discussionService: DiscussionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.discussionService.postChange.subscribe((updatePost: Discussion[]) => {
      this.post = updatePost;
    });
  }

  onAddPost(InputRef: NgForm) {
    const title = InputRef.value.title;
    const postText = InputRef.value.postText;

    this.discussionService.addPost({
      id: this.discussionService.getPost().length + 1,
      title: title,
      postText: postText,
    });
  }
  // onBack(){
  //   this.router.navigate(['/discussion/card'], {relativeTo: this.route})
  // }
}
