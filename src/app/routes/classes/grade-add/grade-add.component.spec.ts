import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassesGradeAddComponent } from './grade-add.component';

describe('ClassesGradeAddComponent', () => {
  let component: ClassesGradeAddComponent;
  let fixture: ComponentFixture<ClassesGradeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesGradeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesGradeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
