import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Discussion } from './discussion.model';

@Injectable({ providedIn: 'root' })
export class DiscussionService {
  openform = false;

  postChange = new Subject<Discussion[]>();
  private discussionPost: Discussion[] = [
    {
      id: 10,
      title: 'How does one make a Reddit Clone?',
      postText:
        'Does anyone know how to make or know of resources to make a Reddit Clone?',
    },
    {
      id: 20,
      title: 'How does one make cookies',
      postText:
        'Tri-tip pork belly shoulder capicola pork picanha flank. Ribeye meatball corned beef bresaola sausage pancetta alcatra tenderloin. Strip steak ground round ball tip bresaola landjaeger, andouille filet mignon leberkas ham. Ground round hamburger turducken porchetta chislic bacon rump short loin sausage biltong pancetta shoulder burgdoggen cupim.',
    },
  ];

  constructor() {}

  getPost() {
    return this.discussionPost.slice();
  }

  addPost(newPost: Discussion) {
    this.discussionPost.push(newPost);
    this.postChange.next(this.getPost());
    console.log('this works');
  }
}
