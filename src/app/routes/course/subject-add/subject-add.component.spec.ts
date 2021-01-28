import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseSubjectAddComponent } from './subject-add.component';

describe('CourseSubjectAddComponent', () => {
  let component: CourseSubjectAddComponent;
  let fixture: ComponentFixture<CourseSubjectAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSubjectAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSubjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
