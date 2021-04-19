import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBugComponent } from './search-bug.component';

describe('SearchBugComponent', () => {
  let component: SearchBugComponent;
  let fixture: ComponentFixture<SearchBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
