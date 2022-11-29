import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  constructor(private http: HttpClient) { }

  getJobPost() {
    return this.http.get('https://www.themuse.com/api/public/jobs?category=Computer%20and%20IT&category=Data%20and%20Analytics&category=Data%20Science&category=Design%20and%20UX&category=IT&category=Project%20Management&category=Software%20Engineering&category=UX&level=Entry%20Level&level=Mid%20Level&level=Senior%20Level&level=management&level=Internship&page=1')
  }
}

