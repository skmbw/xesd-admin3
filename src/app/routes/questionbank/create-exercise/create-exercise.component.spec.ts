import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionbankCreateExerciseComponent } from './create-exercise.component';

describe('QuestionbankCreateExerciseComponent', () => {
  let component: QuestionbankCreateExerciseComponent;
  let fixture: ComponentFixture<QuestionbankCreateExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankCreateExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankCreateExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
