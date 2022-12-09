import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReplyService } from '../reply.service';

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.css']
})
export class ReplyFormComponent implements OnInit {

replySubmit: boolean = false

  reply: any = {
    title: '',
    postText: '',
  };

  constructor(private replyService: ReplyService) { }

  ngOnInit(): void {
  }

  onReply(InputReply: NgForm){
    const title = InputReply.value.title;
    const replyText = InputReply.value.postText;
    this.replyService.addReply({
      id: this.replyService.getReply().length + 1,
      title: title,
      replyText: replyText,
    });
  }

  commentSubmit() {
    this.replySubmit = true;
  }

}
