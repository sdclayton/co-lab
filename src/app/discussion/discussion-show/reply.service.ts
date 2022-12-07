import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Comment } from '../comment.model';


@Injectable({ providedIn: 'root' })
export class ReplyService {

  replyUpdate= new Subject<Comment[]>();
  private reply: Comment[] = [
    {
      id: 0,
      title: 'I am still learning how to do that',
      replyText:
        'I found on Google that you need an alien friend.',
    },
    {
      id: 1,
      title: 'I found this!',
      replyText:
        "Humpty Dumpty sat on the wall Humpty Dumpty had a great fall All the king's horses and all the king's men Couldn't put Humpty together again",
    },
  ];

  constructor() {}

  getReply() {
    return this.reply.slice();
  }

  addReply(newReply: Comment) {
    this.reply.push(newReply)
    this.replyUpdate.next(this.getReply());
  }

  getCommentShared(index: number){
    return this.reply[index];
  }

}
