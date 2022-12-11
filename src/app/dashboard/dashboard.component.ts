import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Discussion } from '../discussion/discussion.model';
import { DiscussionService } from '../discussion/discussion.service';
import { JobPosting } from '../job-posting/job-posting.model';
import { JobPostingService } from '../job-posting/job-posting.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  // jobPosting: JobPosting[] = [];
  @Input() discussion: Discussion[];
  private discChanged: Subscription;
  id: number;
  constructor(private discussionService: DiscussionService, private jobPostingService: JobPostingService) { }

  ngOnInit(): void {
    this.discussion = this.discussionService.getPost();
    this.discChanged = this.discussionService.dashBoardChanged.subscribe(
      (discussion: Discussion[]) => {
        this.discussion = discussion;
      }
    )
  }

  ngOnDestroy(): void {
      this.discChanged.unsubscribe();
  }

}
