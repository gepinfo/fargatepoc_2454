import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegegetallComponent } from './collegegetall.component';

describe('CollegegetallComponent', () => {
  let component: CollegegetallComponent;
  let fixture: ComponentFixture<CollegegetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegegetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegegetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});