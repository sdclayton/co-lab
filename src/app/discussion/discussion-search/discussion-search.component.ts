import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-discussion-search',
  templateUrl: './discussion-search.component.html',
  styleUrls: ['./discussion-search.component.css']
})
export class DiscussionSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enterSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue);
  }
}
