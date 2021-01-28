import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseSubjectListComponent } from './subject-list.component';

describe('CourseSubjectListComponent', () => {
  let component: CourseSubjectListComponent;
  let fixture: ComponentFixture<CourseSubjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSubjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
