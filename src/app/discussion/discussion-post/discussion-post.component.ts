import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { discussion } from 'src/app/shared/discussion.model';
import { DiscussionService } from '../discussion.service';

@Component({
  selector: 'app-discussion-post',
  templateUrl: './discussion-post.component.html',
  styleUrls: ['./discussion-post.component.css']
})
export class DiscussionPostComponent implements OnInit {
  listPost: any;

  post: any = {
    title: "",
    postText: ""
  };

  constructor(public discussionService: DiscussionService) {}

  ngOnInit(): void {
    this.discussionService.postChange.subscribe((updatePost: discussion[]) => {
      this.post = updatePost;
    });
  }

  onAddPost(InputRef: NgForm){
    const title = InputRef.value.title;
    const postText = InputRef.value.postText;
    this.discussionService.addPost({
      title: title,
      postText: postText
    });
  }
}
