import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  goToSignUp() {
    this.router.navigate(['./signup'])
  }

  goToLogin() {
    this.router.navigate(['./login'])
  }

}
