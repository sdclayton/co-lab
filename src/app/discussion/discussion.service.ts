import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { discussion } from "../shared/discussion.model";

@Injectable({providedIn:'root'})

export class DiscussionService {
openform=false;

  postChange = new Subject<discussion[]>();
  private discussionPost: discussion[] = [{
    title: "Test",
    postText: "This is a test"
  }];

  constructor(){}

  getPost(){
    return this.discussionPost.slice();
  }

  addPost(newPost: discussion){
    this.discussionPost.push(newPost);
    this.postChange.next(this.getPost());
    console.log('this works')
  }

}
