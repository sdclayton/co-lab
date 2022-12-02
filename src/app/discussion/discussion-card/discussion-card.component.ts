import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DiscussionService } from '../discussion.service';

@Component({
  selector: 'app-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrls: ['./discussion-card.component.css']
})
export class DiscussionCardComponent implements OnInit {

  listPost: any;

  constructor( private route: ActivatedRoute, private router: Router, public discussionService: DiscussionService) { }

  ngOnInit(): void {
    this.listPost = this.discussionService.getPost();
    this.discussionService.postChange.subscribe((updatedPosts) => {
      this.listPost = updatedPosts
    });
  }

  onReply() {
    this.router.navigate(['post'], {relativeTo: this.route})
  }

}
