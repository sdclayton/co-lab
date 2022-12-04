import { Component, OnInit, Input } from '@angular/core';
import { JobPostingService } from './job-posting.service';
import { JobPosting, jobPostingItem } from './job-posting.model';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css'],
})

export class JobPostingComponent implements OnInit {
  jobPosting: JobPosting[] = [];

  constructor(private jobPostingService: JobPostingService) {}

  ngOnInit(): void {
    this.jobPostingService.getJobPost().subscribe((data: any) => {
      console.log(data);
      data.results.forEach((jobPosting: jobPostingItem) => {
        // Iterate through categories

        const category = jobPosting.categories[0]
          ? jobPosting.categories[0].name
          : '';

        this.jobPosting.push(
          new JobPosting(
            category,
            jobPosting.company.name,
            jobPosting.levels[0].name,
            jobPosting.locations[0].name,
            jobPosting.refs.landing_page
          )
        );
      });

      console.log(this.jobPosting);
      // this.jobPosting = data;
      // console.log(data);
    });
  }
}
