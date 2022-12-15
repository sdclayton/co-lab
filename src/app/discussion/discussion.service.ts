import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Comment } from './comment.model';
import { Discussion } from './discussion.model';

@Injectable({ providedIn: 'root' })
export class DiscussionService {


  postChange = new Subject<Discussion[]>();
  private discussionPost: Discussion[] = [
    {
      id: 0,
      title: 'How does one make a Reddit Clone?',
      postText:
        'Does anyone know how to make or know of resources to make a Reddit Clone?',
      comment: [],
    },
    {
      id: 1,
      title: 'Which Codefi cohort is the best?',
      postText:
        'Tri-tip pork belly shoulder capicola pork picanha flank. Ribeye meatball corned beef bresaola sausage pancetta alcatra tenderloin. Strip steak ground round ball tip bresaola landjaeger, andouille filet mignon leberkas ham. Ground round hamburger turducken porchetta chislic bacon rump short loin sausage biltong pancetta shoulder burgdoggen cupim.',
      comment: [],
    },
    {
      id: 2,
      title: 'When will the sun explode?',
      postText:
        'The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.',
      comment: [],
    },
    {
      id: 3,
      title: 'Where do I get a pet dragon?',
      postText:
        "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
      comment: [],
    },
  ];

  constructor() {}

  getPost() {
    return this.discussionPost.slice();
  }

  getDiscussionShared(index: number){
    return this.discussionPost[index];
  }

  addPost(newPost: Discussion) {
    this.discussionPost.push(newPost);
    this.postChange.next(this.getPost());
  }

}
