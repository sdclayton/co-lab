import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comment } from '../comment.model';
import { Discussion } from '../discussion.model';
import { DiscussionService } from '../discussion.service';
import { ReplyService } from './reply.service';

@Component({
  selector: 'app-discussion-show',
  templateUrl: './discussion-show.component.html',
  styleUrls: ['./discussion-show.component.css']
})
export class DiscussionShowComponent implements OnInit {

  id: number;

  commentPost: Comment;

  discussionShared: Discussion


  openForm:boolean = false;

  constructor(
    private discussionService: DiscussionService,
    private route: ActivatedRoute,
    private replyService: ReplyService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id= +params['id'];
        this.discussionShared = this.discussionService.getDiscussionShared(this.id);
        this.commentPost = this.replyService.getCommentShared(this.id);
        console.log(this.commentPost);

      }
    );

  }

  OnClickOpenForm(){
    this.openForm = true;
  }

  onCancel(){
    this.openForm = false;
  }
  }


