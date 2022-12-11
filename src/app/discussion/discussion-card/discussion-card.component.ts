import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../discussion.service';

@Component({
  selector: 'app-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrls: ['./discussion-card.component.css'],
})
export class DiscussionCardComponent implements OnInit {
  listPost: any;
  like = false;

  constructor(public discussionService: DiscussionService) {}

  ngOnInit(): void {
    this.listPost = this.discussionService.getPost();
    this.discussionService.postChange.subscribe((updatedPosts) => {
      this.listPost = updatedPosts;
    });

  }



 onLike(){
  this.like = true;
 }
}
