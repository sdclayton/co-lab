import { Component, OnInit, Input } from '@angular/core';
import { JobPostingService } from './job-posting.service';
import { JobPosting } from './job-posting.model';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {

  @Input() jobPosting: JobPosting[]
  // jobPosting: any [];

  constructor(private jobPostingService: JobPostingService) { }

  ngOnInit(): void {
    this.jobPostingService.getJobPost().subscribe((data: any) => {
      // this.jobPosting = data;
      console.log(data)
    })
  }
}

