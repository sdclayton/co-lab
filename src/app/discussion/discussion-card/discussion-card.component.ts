
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

  like = false;
  searchText: string= '';

  discussion: Discussion[];



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

 onDislike(){
  this.like = false;
 }
 onSearchTextEntered(searchValue:string){
  this.searchText = searchValue;
  // console.log(this.searchText);
}

  onAddToDashboard(){
    this.discussionService.addPostToDashboard(this.listPost);
  }


}
