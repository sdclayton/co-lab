import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionShowComponent } from './discussion-show.component';

describe('DiscussionShowComponent', () => {
  let component: DiscussionShowComponent;
  let fixture: ComponentFixture<DiscussionShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
