import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionbankExerciseComponent } from './exercise.component';

describe('QuestionbankExerciseComponent', () => {
  let component: QuestionbankExerciseComponent;
  let fixture: ComponentFixture<QuestionbankExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
