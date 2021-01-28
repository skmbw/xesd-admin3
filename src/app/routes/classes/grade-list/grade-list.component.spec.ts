import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassesGradeListComponent } from './grade-list.component';

describe('ClassesGradeListComponent', () => {
  let component: ClassesGradeListComponent;
  let fixture: ComponentFixture<ClassesGradeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesGradeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesGradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
