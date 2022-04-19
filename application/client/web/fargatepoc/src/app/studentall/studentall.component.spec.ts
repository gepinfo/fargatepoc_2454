import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentallComponent } from './studentall.component';

describe('StudentallComponent', () => {
  let component: StudentallComponent;
  let fixture: ComponentFixture<StudentallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});