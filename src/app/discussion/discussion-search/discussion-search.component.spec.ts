import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionSearchComponent } from './discussion-search.component';

describe('DiscussionSearchComponent', () => {
  let component: DiscussionSearchComponent;
  let fixture: ComponentFixture<DiscussionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
