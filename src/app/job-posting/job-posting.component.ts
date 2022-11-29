import { Component, OnInit } from '@angular/core';
import { JobPostingService } from './job-posting.service';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {

  jobPosting: any [];

  constructor(private jobPostingService: JobPostingService) { }

  ngOnInit(): void {
    this.jobPostingService.getJobPost().subscribe((data: any) => {
      // this.jobPosting = data;
      console.log(data)
    })
  }
}

