import { Component, OnInit, Input } from '@angular/core';
import { JobPostingService } from './job-posting.service';
import { JobPosting } from './job-posting.model';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css'],
})

// export class JobPosting {
//   constructor(
//     public category: { name: string }[],
//     company: string,
//     level: string,
//     location: string,
//     refs: string
//   ) {}
// }
export class JobPostingComponent implements OnInit {
  jobPosting: JobPosting[] = [];

  constructor(private jobPostingService: JobPostingService) {}

  ngOnInit(): void {
    this.jobPostingService.getJobPost().subscribe((data: any) => {
      console.log(data)
      data.results.forEach((jobPosting) => {

        // Iterate through categories

        this.jobPosting.push(
          new JobPosting(jobPosting.categories[0].name, jobPosting.company.name, jobPosting.levels[0].name, '', '')
        );
      });

      console.log(this.jobPosting)
      // this.jobPosting = data;
      // console.log(data);
    });
  }
}
