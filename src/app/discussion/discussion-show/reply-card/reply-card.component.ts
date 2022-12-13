import { Component, OnInit } from '@angular/core';
import { ReplyService } from '../reply.service';

@Component({
  selector: 'app-reply-card',
  templateUrl: './reply-card.component.html',
  styleUrls: ['./reply-card.component.css']
})
export class ReplyCardComponent implements OnInit {

  replies: any;
  id: number;
  replyPosted: Comment;

  constructor(private replyService: ReplyService) { }

  ngOnInit(): void {
    this.replies = this.replyService.getReply();
    this.replyService.replyUpdate.subscribe((updatedReply) => {
      this.replies = updatedReply;
    });
  }

}
