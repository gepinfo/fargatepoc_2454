import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegecreateComponent } from './collegecreate.component';

describe('CollegecreateComponent', () => {
  let component: CollegecreateComponent;
  let fixture: ComponentFixture<CollegecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});