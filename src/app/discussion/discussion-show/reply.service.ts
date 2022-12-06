import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Discussion } from '../discussion.model';

@Injectable({ providedIn: 'root' })
export class ReplyService {

  replyUpdate= new Subject<Discussion[]>();
  private reply: Discussion[] = [
    {
      id: 10,
      title: 'This is a reply to Reddit Clone?',
      postText:
        'Does anyone know how to make or know of resources to make a Reddit Clone?',
    },
    {
      id: 20,
      title: 'This is how one makes cookies',
      postText:
        'Tri-tip pork belly shoulder capicola pork picanha flank. Ribeye meatball corned beef bresaola sausage pancetta alcatra tenderloin. Strip steak ground round ball tip bresaola landjaeger, andouille filet mignon leberkas ham. Ground round hamburger turducken porchetta chislic bacon rump short loin sausage biltong pancetta shoulder burgdoggen cupim.',
    },
  ];

  constructor() {}

  getReply() {
    return this.reply.slice();
  }

  addReply(newReply: Discussion) {
    this.reply.push(newReply)
    this.replyUpdate.next(this.getReply());
  }
}
