import { Component, Input, OnInit } from '@angular/core';
import { Discussion } from '../discussion.model';
import { DiscussionService } from '../discussion.service';

@Component({
  selector: 'app-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrls: ['./discussion-card.component.css'],
})
export class DiscussionCardComponent implements OnInit {
  listPost: any;
  discussion: Discussion[];


  constructor(public discussionService: DiscussionService) {}

  ngOnInit(): void {
    this.listPost = this.discussionService.getPost();
    this.discussionService.postChange.subscribe((updatedPosts) => {
      this.listPost = updatedPosts;
    });

  }

  onAddToDashboard(){
    this.discussionService.addPostToDashboard(this.listPost);
  }

  // onViewPost() {}
}
