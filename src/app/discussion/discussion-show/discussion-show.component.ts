import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Discussion } from '../discussion.model';
import { DiscussionService } from '../discussion.service';

@Component({
  selector: 'app-discussion-show',
  templateUrl: './discussion-show.component.html',
  styleUrls: ['./discussion-show.component.css']
})
export class DiscussionShowComponent implements OnInit {

  id: number;

  discussionShow: Discussion[];

  discussionShared: Discussion;

  openForm:boolean = false;

  constructor(private discussionService: DiscussionService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id= +params['id'];
        this.discussionShared = this.discussionService.getDiscussionShared(this.id);
      }
    );

    // this.discussionShow.push(
    //   new Discussion (
    //     this.discussionShow.title,
    //     this.discussionShow.postText,
    //     this.discussionShow.id
    //   )
    // );

  }

  OnClickOpenForm(){
    this.openForm = true;
  }
  }


